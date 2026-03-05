# Week 10 - React Server Components (RSC) 深入（Chapter 10）

## 章節導讀

這一章是 Next.js 維護核心。你要學會切分：
- 哪些邏輯放 server。
- 哪些互動放 client。

你會學到：
1. RSC 執行模型。
2. `use client` 成本與邊界。
3. Streaming 與 loading 體驗。

## 0 基礎詞彙

- `Server Component`: 在伺服器執行，不送 JS 到瀏覽器。
- `Client Component`: 在瀏覽器執行，可處理互動。
- `Hydration`: 瀏覽器接手互動畫面的過程。
- `Streaming`: 分段傳回 UI。

## RSC 流程圖（ASCII）

```text
Request
  -> Server Component fetches data
  -> Server renders HTML payload
  -> Browser receives streamed UI
  -> Client islands hydrate for interaction
```

## 核心知識（像書一樣讀）

### 1. 先預設 server-first

在 App Router，優先用 Server Component，只有互動需求才切 client。

### 2. `use client` 是成本開關

一旦加上 `use client`，該元件及其依賴會進入 client bundle。

### 3. 安全邊界

敏感邏輯（token、內部欄位、權限檢查）應留在 server。

## Code-Along（逐步照做）

### Step 0 - 使用 week-09 專案

```bash
cd playground/week-09-next-app
npm run dev
```

### Step 1 - 建立 Server Component 頁面

`app/(admin)/dashboard/page.tsx`：

```tsx
type Todo = { id: number; title: string; completed: boolean };

async function getTodos(): Promise<Todo[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return response.json();
}

export default async function DashboardPage() {
  const todos = await getTodos();

  return (
    <section>
      <h1 className="text-2xl font-bold">RSC Dashboard</h1>
      <ul className="mt-4 space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="rounded border p-2">
            {todo.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
```

### Step 2 - 加入最小 Client Component

建立 `app/(admin)/dashboard/RefreshButton.tsx`：

```tsx
"use client";

import { useRouter } from "next/navigation";

export function RefreshButton() {
  const router = useRouter();

  return (
    <button className="rounded bg-blue-600 px-3 py-2 text-white" onClick={() => router.refresh()}>
      Refresh
    </button>
  );
}
```

並在 `page.tsx` 引入：

```tsx
import { RefreshButton } from "./RefreshButton";
```

在畫面加：

```tsx
<RefreshButton />
```

### Step 3 - 驗收

1. 資料抓取在 server component。
2. 互動只放在 client component。
3. 你可以解釋為何 `RefreshButton` 需要 `use client`。

### Step 4 - 邊界審查清單

建立 `notes/week-10-rsc-boundary.md`：
- 哪些檔案是 server。
- 哪些是 client。
- 是否有敏感資料被傳到 client。

## 風險圖（ASCII）

```text
Too much use client
  -> bigger bundle
  -> slower hydration
  -> potential secret leakage risk
```

## 常見錯誤與排查

1. 在 server component 用 `useState`：
- 錯誤：Hooks 不能在 server component 這樣用。
- 修正：拆出 client component。

2. 不小心把整頁標 `use client`：
- 風險：失去 server-first 優勢。
- 修正：局部 island 化。

3. fetch cache 策略不明：
- 問題：資料不更新或過度更新。
- 修正：明確設定 `cache` 或 `revalidate`。

## 本週 5 天節奏（章節閱讀 + 實作）

- Day 1: 讀核心知識 + 完成 Step 0。
- Day 2: 完成 Step 1（RSC data fetch）。
- Day 3: 完成 Step 2~4（client island + 邊界審查）。
- Day 4: 完成 [Workshop week-10](../workshops/week-10/README.md)。
- Day 5: 完成 [Assignment week-10](../assignments/week-10/README.md)。

## Cline 協作模板

```text
請幫我審查這個 Next.js 頁面的 server/client 邊界。
請輸出表格：
- 檔案
- 建議類型（Server/Client）
- 理由
- 若改錯的風險
```

## 本週實作

- Workshop: [week-10](../workshops/week-10/README.md)
- Assignment: [week-10](../assignments/week-10/README.md)
- Rubric: [week-10](../rubrics/week-10.md)

## 完成定義

- 能交付一頁含 RSC + client island 的 dashboard。
- 能說明邊界決策與安全原因。


## 章節練習（不看答案先做）

1. 請把一頁切成 Server Component 與 Client Component，並逐一說明理由。
2. 請找一個不必要的 `use client` 並改回 server-first。
3. 請檢查是否有敏感資訊被傳到 client。

## 提示（卡住再看）

1. 不需互動的邏輯優先留 server。
2. client component 盡量縮小成 island。
3. token/secret/內部欄位不應出現在 client props。

## 交付證據清單（提交前自查）

建議模板：[chapter-evidence-template](../templates/learner-ops/chapter-evidence-template.md)

- `notes/week-10-rsc-boundary.md`。
- 邊界重構前後對照。
- loading/error 狀態完整證據。

## 延伸閱讀（遇到進階需求再看）

- Server Components: <https://nextjs.org/docs/app/building-your-application/rendering/server-components>
- Client Components: <https://nextjs.org/docs/app/building-your-application/rendering/client-components>
