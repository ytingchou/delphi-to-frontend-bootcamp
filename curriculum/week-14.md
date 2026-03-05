# Week 14 - Auth.js + Keycloak Provider（Server-Side OIDC）（Chapter 14）

## 章節導讀

這一章會把上週協定知識實作成可用系統，重點是：
- 登入流程可運作。
- token 不暴露在 browser JS。
- 透過 Next.js BFF server-side 呼叫受保護 API。

你會學到：
1. Auth.js（next-auth）+ Keycloak provider 設定。
2. session/token callback 設計。
3. 透過 route handler 轉發 token，避免 CORS 問題。

## 0 基礎詞彙

- `Auth.js`: Next.js 常用認證方案。
- `Provider`: 外部身份提供者（例如 Keycloak）。
- `Session`: 已登入狀態。
- `BFF token forwarding`: server-side 代呼叫 API。

## 架構圖（ASCII）

```text
Browser (cookie only)
  -> Next.js server (Auth.js)
      -> Keycloak login / callback
      -> session created
  -> Next.js /api/bff/*
      -> read session/token on server
      -> call backend API with Bearer token
  -> Browser receives DTO only
```

## 核心知識（像書一樣讀）

### 1. 為什麼 token 要留在 server side

如果 token 直接交給 browser JS，XSS 風險會變高。server-side 轉發可以降低暴露面。

### 2. Auth.js callback 是關鍵

你要清楚設計：
- `jwt` callback 存什麼。
- `session` callback 露給前端什麼。

### 3. CORS 問題的常見解法

Browser 只打同源的 Next.js route handler；由 Next.js server 去打上游 API。

## Code-Along（逐步照做）

### Step 0 - 加入 Auth.js 套件

在 `playground/week-09-next-app`：

```bash
npm i next-auth
```

### Step 1 - 建立 `auth.ts`

`auth.ts`：

```ts
import NextAuth from "next-auth";
import Keycloak from "next-auth/providers/keycloak";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Keycloak({
      clientId: process.env.KEYCLOAK_CLIENT_ID,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string | undefined;
      return session;
    },
  },
});
```

### Step 2 - 建立 auth route

`app/api/auth/[...nextauth]/route.ts`：

```ts
import { handlers } from "@/auth";

export const { GET, POST } = handlers;
```

### Step 3 - 建立受保護 BFF route（server-side 轉發）

`app/api/bff/profile/route.ts`：

```ts
import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function GET() {
  const session = await auth();

  if (!session?.accessToken) {
    return NextResponse.json(
      { ok: false, error: { code: "UNAUTHORIZED", message: "Please login" } },
      { status: 401 },
    );
  }

  const response = await fetch("http://localhost:4000/api/profile", {
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    return NextResponse.json(
      { ok: false, error: { code: "UPSTREAM_ERROR", message: "Profile API failed" } },
      { status: 502 },
    );
  }

  const data = await response.json();
  return NextResponse.json({ ok: true, data });
}
```

### Step 4 - 驗收

1. 可登入/登出。
2. 未登入呼叫 `/api/bff/profile` 會回 401。
3. 登入後由 server-side 帶 token 呼叫上游。
4. Browser 端看不到 Bearer token 直接打上游。

建議比對範例：
- [next-auth-keycloak](../references/examples/next-auth-keycloak/README.md)

## 認證排查圖（ASCII）

```text
Login fail?
  -> check issuer/client/secret
  -> check redirect URI
  -> check callback logs
API 401?
  -> check session exists
  -> check accessToken in jwt/session callback
```

## 常見錯誤與排查

1. callback route 路徑不匹配：
- 現象：登入後跳錯頁。
- 修正：Keycloak redirect URI 與 Auth.js callback 一致。

2. session 沒 accessToken：
- 現象：BFF 一直 401。
- 修正：檢查 jwt/session callback。

3. 前端直接呼叫上游 API：
- 現象：CORS/安全問題。
- 修正：統一走 Next.js BFF route。

## 本週 5 天節奏（章節閱讀 + 實作）

- Day 1: 讀核心知識 + 完成 Step 0。
- Day 2: 完成 Step 1~2（Auth.js 接線）。
- Day 3: 完成 Step 3~4（BFF token forwarding + 驗收）。
- Day 4: 完成 [Workshop week-14](../workshops/week-14/README.md)。
- Day 5: 完成 [Assignment week-14](../assignments/week-14/README.md)。

## Cline 協作模板

```text
請審查這份 Auth.js + Keycloak 設定，
我需要你列出：
1) 可能 token 洩漏點
2) callback 設計風險
3) server-side BFF 是否正確避免 CORS 問題
```

## 本週實作

- Workshop: [week-14](../workshops/week-14/README.md)
- Assignment: [week-14](../assignments/week-14/README.md)
- Rubric: [week-14](../rubrics/week-14.md)
- Reference example: [next-auth-keycloak](../references/examples/next-auth-keycloak/README.md)

## 完成定義

- 能完成登入/登出與保護頁流程。
- 能透過 server-side route handler 呼叫受保護 API。
- 能解釋此設計如何降低 CORS 與 token 暴露風險。


## 章節練習（不看答案先做）

1. 請完成 Auth.js + Keycloak 登入/登出與保護頁流程。
2. 請實作一支 server-side BFF route，用 session token 轉發上游 API。
3. 請證明 browser 沒直接拿 token 呼叫上游 API。

## 提示（卡住再看）

1. 優先核對 issuer/clientId/clientSecret/redirect URI。
2. 先驗證 jwt callback，再驗證 session callback。
3. 前端應只打同源 `/api/bff/*`。

## 交付證據清單（提交前自查）

建議模板：[chapter-evidence-template](../templates/learner-ops/chapter-evidence-template.md)

- 登入、登出、保護頁證據。
- `/api/bff/profile` 的 401 與成功案例。
- token 不外露的網路行為說明。

## 延伸閱讀（遇到進階需求再看）

- Auth.js providers: <https://authjs.dev/getting-started/providers/keycloak>
- Next.js auth guide: <https://nextjs.org/docs/app/guides/authentication>
