# Week 09 - Next.js App Router 入門到可維護（Chapter 9）

## 章節導讀

這一章是 React 到 Next.js 的轉折點。你會開始用檔案結構驅動路由，而不是在程式裡手刻路由表。

你會學到：
1. `app/` 目錄核心慣例。
2. `layout/page/loading/error/not-found` 的責任。
3. 如何做可維護的多層後台路由。

## 0 基礎詞彙

- `App Router`: Next.js 新一代路由系統（`app/`）。
- `layout.tsx`: 共用殼層。
- `page.tsx`: 路由頁面。
- `loading.tsx`: 載入狀態。
- `error.tsx`: 例外邊界。

## 路由結構圖（ASCII）

```text
app/
  layout.tsx
  page.tsx
  (admin)/
    dashboard/
      page.tsx
      loading.tsx
      error.tsx
```

Mermaid source: [week-09-app-router.mmd](../assets/diagrams/week-09-app-router.mmd)

## 核心知識（像書一樣讀）

### 1. 先規劃 route tree，再寫檔案

路由錯誤通常不是語法錯，是結構思維錯。

### 2. layout 是共用容器，不是功能頁

`layout.tsx` 放共用框架（header/sidebar），`page.tsx` 放頁面內容。

### 3. loading/error 不是裝飾，而是產品品質線

沒有 loading/error，使用者只會看到空白或壞頁。

## Code-Along（逐步照做）

### Step 0 - 建立 Next.js 專案

```bash
npx create-next-app@latest playground/week-09-next-app --ts --eslint --app --tailwind
cd playground/week-09-next-app
npm run dev
```

### Step 1 - 建立後台 route tree

建立以下檔案：

- `app/(admin)/dashboard/page.tsx`
- `app/(admin)/dashboard/loading.tsx`
- `app/(admin)/dashboard/error.tsx`

`page.tsx`：

```tsx
export default function DashboardPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome to admin dashboard.</p>
    </section>
  );
}
```

`loading.tsx`：

```tsx
export default function Loading() {
  return <p className="animate-pulse">Loading dashboard...</p>;
}
```

`error.tsx`：

```tsx
"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div>
      <p>Something went wrong.</p>
      <button onClick={reset}>Retry</button>
    </div>
  );
}
```

### Step 2 - 建立 admin layout

建立 `app/(admin)/layout.tsx`：

```tsx
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-[220px_1fr]">
      <aside className="border-r p-4">Admin Menu</aside>
      <main className="p-6">{children}</main>
    </div>
  );
}
```

### Step 3 - 驗收

1. 開 `http://localhost:3000/dashboard` 可看到後台殼層。
2. `layout` 與 `page` 職責清楚。
3. 你能描述 loading/error 的觸發時機。

### Step 4 - 產出 route 文件

建立 `notes/week-09-route-tree.md`，列出每個路徑與檔案責任。

## 常見錯誤與排查

1. `error.tsx` 忘了 `"use client"`：
- 現象：無法使用 `reset`。
- 修正：標記 client component。

2. 把頁面邏輯寫進 layout：
- 風險：跨頁耦合。
- 修正：layout 只放框架。

3. route group 用錯：
- 風險：URL 與結構認知混亂。
- 修正：先畫 route tree。

## 本週 5 天節奏（章節閱讀 + 實作）

- Day 1: 讀核心知識 + 完成 Step 0。
- Day 2: 完成 Step 1（route files）。
- Day 3: 完成 Step 2~4（layout + 文件）。
- Day 4: 完成 [Workshop week-09](../workshops/week-09/README.md)。
- Day 5: 完成 [Assignment week-09](../assignments/week-09/README.md)。

## Cline 協作模板

```text
請先幫我把這個 Next.js 專案畫成 route tree。
接著請指出：
1) 哪些檔案責任混在一起
2) 哪些 loading/error 缺漏
3) 最小修正順序
```

## 本週實作

- Workshop: [week-09](../workshops/week-09/README.md)
- Assignment: [week-09](../assignments/week-09/README.md)
- Rubric: [week-09](../rubrics/week-09.md)

## 完成定義

- 能建立多層 layout + loading/error 的 App Router 架構。
- 能清楚解釋檔案慣例與責任邊界。


## 常見錯誤示例（Wrong vs Right）

- Wrong: 沒有 route tree 就直接建立檔案。
- Right: 先定 URL 與檔案責任，再建立 `layout/page/loading/error`。

## 章節練習（不看答案先做）

1. 請畫出 App Router route tree（含 layout/page/loading/error）。
2. 請做一個 `/dashboard`，可演示 loading 與 error。
3. 請說明 route group `(...)` 的使用理由。

## 提示（卡住再看）

1. 先定 URL，再定檔案結構。
2. layout 放殼層，不放頁面商業邏輯。
3. `error.tsx` 要 client，且提供 retry 行為。

## 交付證據清單（提交前自查）

建議模板：[chapter-evidence-template](../templates/learner-ops/chapter-evidence-template.md)

- route tree 文件一份。
- `/dashboard` 含 loading/error 的證據。
- 檔案責任切分說明。

## 延伸閱讀（遇到進階需求再看）

- Next.js App Router: <https://nextjs.org/docs/app>
- Route groups: <https://nextjs.org/docs/app/building-your-application/routing/route-groups>
