# Week 11 - Next.js Route Handlers 作為 BFF（Chapter 11）

## 章節導讀

這一章要把你 Delphi 強項（商業邏輯與契約設計）搬到前端專案的 BFF 層。

你會學到：
1. `app/api/*/route.ts` 的標準實作。
2. 上游 payload 到前端 DTO 的映射。
3. 錯誤碼與錯誤訊息統一契約。

## 0 基礎詞彙

- `BFF`: Backend for Frontend，專為前端定製 API 層。
- `Route Handler`: App Router 的 API 入口。
- `DTO`: 前端穩定資料格式。
- `Error contract`: 統一錯誤回傳結構。

## BFF 流程圖（ASCII）

```text
Browser UI
  -> Next.js /api/bff/orders
      -> validate request
      -> call upstream API
      -> map payload to DTO
      -> map error to frontend contract
  -> return stable response
```

## 核心知識（像書一樣讀）

### 1. BFF 的真正價值

不是「幫忙轉發」而已，而是：
1. 隔離上游變動。
2. 集中錯誤與安全策略。
3. 讓前端用穩定資料模型。

### 2. 錯誤路徑要先設計

你要先定義：
- 哪些錯誤碼會回給前端。
- 前端收到後如何顯示與處理。

### 3. CORS 與安全直覺

透過同源 BFF，browser 不直接碰上游 API token，可降低 CORS 與洩漏風險。

## Code-Along（逐步照做）

### Step 0 - 使用 week-09 專案

```bash
cd playground/week-09-next-app
mkdir -p app/api/bff/orders
```

### Step 1 - 建立 route handler

`app/api/bff/orders/route.ts`：

```ts
import { NextResponse } from "next/server";

type UpstreamOrder = {
  order_id: string;
  amount_cents: number;
  status: "paid" | "pending";
};

type OrderDto = {
  id: string;
  amount: number;
  status: "PAID" | "PENDING";
};

function mapOrder(order: UpstreamOrder): OrderDto {
  return {
    id: order.order_id,
    amount: order.amount_cents / 100,
    status: order.status === "paid" ? "PAID" : "PENDING",
  };
}

export async function GET() {
  try {
    const upstreamResponse = await fetch("https://mocki.io/v1/6df4f32f-7db5-4ccf-98bf-51bd8eec54a3", {
      cache: "no-store",
    });

    if (!upstreamResponse.ok) {
      return NextResponse.json(
        { ok: false, error: { code: "UPSTREAM_ERROR", message: "Upstream failed" } },
        { status: 502 },
      );
    }

    const upstreamData = (await upstreamResponse.json()) as UpstreamOrder[];
    const data = upstreamData.map(mapOrder);

    return NextResponse.json({ ok: true, data }, { status: 200 });
  } catch {
    return NextResponse.json(
      { ok: false, error: { code: "UNKNOWN", message: "Unexpected error" } },
      { status: 500 },
    );
  }
}
```

### Step 2 - 前端呼叫 BFF

在 `app/(admin)/dashboard/page.tsx` 改為呼叫 `/api/bff/orders`。

```tsx
type OrderDto = { id: string; amount: number; status: "PAID" | "PENDING" };

async function getOrders(): Promise<OrderDto[]> {
  const response = await fetch("http://localhost:3000/api/bff/orders", { cache: "no-store" });
  const json = await response.json();

  if (!response.ok || !json.ok) {
    throw new Error("Failed to load orders");
  }

  return json.data as OrderDto[];
}
```

### Step 3 - 驗收

1. 前端只吃 DTO，不直接吃上游 payload。
2. 上游失敗時能回統一錯誤格式。
3. 你能說明 `502` 與 `500` 的差異。

### Step 4 - 建立錯誤對照表

建立 `notes/week-11-error-mapping.md`：
- 上游錯誤 -> BFF 錯誤碼 -> 前端 UI 行為。

## 常見錯誤與排查

1. 直接把 upstream payload 回傳前端：
- 風險：上游一變就全壞。
- 修正：強制經過 mapper。

2. 所有錯誤都回 500：
- 風險：無法快速定位。
- 修正：按責任分層回 status。

3. 在 log 輸出敏感資料：
- 風險：安全事件。
- 修正：mask 或不記錄敏感欄位。

## 本週 5 天節奏（章節閱讀 + 實作）

- Day 1: 讀核心知識 + 完成 Step 0。
- Day 2: 完成 Step 1（route handler + mapper）。
- Day 3: 完成 Step 2~4（前端整合 + 錯誤表）。
- Day 4: 完成 [Workshop week-11](../workshops/week-11/README.md)。
- Day 5: 完成 [Assignment week-11](../assignments/week-11/README.md)。

## Cline 協作模板

```text
請幫我審查 BFF route handler 的設計。
請輸出：
1) DTO 是否穩定
2) error mapping 是否完整
3) 哪些 log 可能有敏感資訊風險
```

## 本週實作

- Workshop: [week-11](../workshops/week-11/README.md)
- Assignment: [week-11](../assignments/week-11/README.md)
- Rubric: [week-11](../rubrics/week-11.md)

## 完成定義

- 能實作至少兩個 BFF endpoint 並維持穩定契約。
- 能完整描述 BFF 對維護性與安全性的價值。


## 章節練習（不看答案先做）

1. 請實作一支 BFF endpoint（驗證輸入、呼叫上游、回傳 DTO）。
2. 請建立 `upstream -> BFF -> UI` 錯誤映射表。
3. 請示範上游欄位變更時，UI 仍穩定的 mapper 設計。

## 提示（卡住再看）

1. 前端不直接吃 upstream payload。
2. BFF 成功與失敗回應格式都要固定。
3. status code 要能反映錯誤責任來源。

## 交付證據清單（提交前自查）

建議模板：[chapter-evidence-template](../templates/learner-ops/chapter-evidence-template.md)

- 至少一支 `/api/bff/*` 可演示。
- `notes/week-11-error-mapping.md`。
- 上游失敗時 UI 行為證據。

## 延伸閱讀（遇到進階需求再看）

- Next.js Route Handlers: <https://nextjs.org/docs/app/getting-started/route-handlers-and-middleware>
- HTTP status reference: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Status>
