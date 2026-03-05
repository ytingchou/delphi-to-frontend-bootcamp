# Week 03 - CSS 佈局系統與 Tailwind CSS（Chapter 3）

## 章節導讀

這一章會讓你從「能排版」升級成「可維護排版」。

你會學到：
1. Box model、Flex、Grid 的實戰分工。
2. Mobile-first 響應式思維。
3. Tailwind utility-first 的可讀寫法。

## 0 基礎詞彙

- `Box model`: content/padding/border/margin。
- `Flex`: 一維排列系統。
- `Grid`: 二維版面系統。
- `Mobile-first`: 先寫手機，再往大螢幕擴充。

## 知識地圖（ASCII）

```text
Layout problem?
  -> one dimension  => Flex
  -> two dimensions => Grid
Responsive
  -> base styles (mobile)
  -> md/lg overrides
```

## 核心知識（像書一樣讀）

### 1. 先選佈局工具，再寫 class

選錯工具會讓 CSS 複雜度暴增。

- 導覽列、按鈕群：常用 Flex。
- 儀表板卡片區：常用 Grid。

### 2. 響應式不是「縮小字體」而已

你要同時思考：
1. 欄數要不要改。
2. 元件順序要不要改。
3. overflow 是否安全。

### 3. Tailwind 的核心價值

Tailwind 不是亂塞 class，而是把樣式決策寫在元件旁，降低 context switch。

## Code-Along（逐步照做）

### Step 0 - 建立練習頁

```bash
mkdir -p playground/week-03-layout
cd playground/week-03-layout
```

建立 `index.html`：

```html
<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Week 03 Layout</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="min-h-screen bg-slate-50 text-slate-900">
    <div class="mx-auto max-w-6xl p-4 md:p-8">
      <header class="mb-6 flex items-center justify-between rounded-xl bg-white p-4 shadow-sm">
        <h1 class="text-xl font-bold">Sales Dashboard</h1>
        <button class="rounded-md bg-blue-600 px-4 py-2 text-white">Refresh</button>
      </header>

      <main class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <aside class="rounded-xl bg-white p-4 shadow-sm md:col-span-1">Menu</aside>
        <section class="space-y-4 md:col-span-2">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <article class="rounded-xl bg-white p-4 shadow-sm">Card A</article>
            <article class="rounded-xl bg-white p-4 shadow-sm">Card B</article>
          </div>
          <article class="rounded-xl bg-white p-4 shadow-sm">Table Area</article>
        </section>
      </main>
    </div>
  </body>
</html>
```

### Step 1 - 觀察 Flex 與 Grid 的分工

1. `header` 使用 `flex`（一維）。
2. `main` 使用 `grid`（二維區塊）。
3. `sm/md` 斷點控制欄數。

### Step 2 - 增加可視化邊界（除錯技巧）

把 `article` 加上：

```html
class="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
```

驗收：
1. 手機版單欄。
2. `md` 以上主區塊變兩欄。
3. 元件沒有 overflow 出畫面。

### Step 3 - 做一次「壞改」再修正

故意把 `main` 改成 `flex`，你會發現卡片網格變難維護。再改回 `grid`，寫下差異。

建議輸出：`notes/week-03-flex-vs-grid.md`

## 版面診斷圖（ASCII）

```text
[Header:flex]
[Main:grid 1->3 cols]
  [Aside]
  [Content:grid cards + table]
```

## 常見錯誤與排查

1. 只用 `px` 寫死尺寸：
- 症狀：小螢幕破版。
- 修正：先寫 base，再加 breakpoint。

2. 不必要 wrapper 太多：
- 症狀：class 很長但可讀性差。
- 修正：先刪除沒有 layout 職責的容器。

3. `gap` 與 `margin` 混用失控：
- 症狀：間距不一致。
- 修正：同一層優先用 `gap`。

## 本週 5 天節奏（章節閱讀 + 實作）

- Day 1: 讀核心知識 + 完成 Step 0。
- Day 2: 完成 Step 1（Flex/Grid 判斷）。
- Day 3: 完成 Step 2~3 + 記錄比較。
- Day 4: 完成 [Workshop week-03](../workshops/week-03/README.md)。
- Day 5: 完成 [Assignment week-03](../assignments/week-03/README.md)。

## Cline 協作模板

```text
請幫我 review 這個 dashboard 版面。
請你先回答：
1) 哪些區塊應該用 flex
2) 哪些區塊應該用 grid
3) 哪些 class 重複或可刪除
請只列出最重要 5 點。
```

## 本週實作

- Workshop: [week-03](../workshops/week-03/README.md)
- Assignment: [week-03](../assignments/week-03/README.md)
- Rubric: [week-03](../rubrics/week-03.md)

## 完成定義

- 能用 Flex/Grid 做出同時支援 mobile/desktop 的 layout。
- 能說明你每個 breakpoint 的設計理由。


## 常見錯誤示例（Wrong vs Right）

- Wrong: 二維卡片區硬用 Flex，後續難維護。
- Right: 二維區塊用 Grid，一維導覽用 Flex。

```html
<!-- Wrong -->
<div class="flex flex-wrap gap-4">
  <article class="w-[48%]">Card A</article>
  <article class="w-[48%]">Card B</article>
</div>

<!-- Right -->
<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
  <article>Card A</article>
  <article>Card B</article>
</div>
```

## 章節練習（不看答案先做）

1. 請做一個 dashboard（手機單欄、桌機多欄）並標註哪些區塊用 Flex、哪些用 Grid。
2. 請把同一區塊各做 Flex 版與 Grid 版，比較維護成本。
3. 請完成 visual QA（間距、斷點、overflow、對齊、可讀性）。

## 提示（卡住再看）

1. 一維排列先想 Flex，二維矩陣先想 Grid。
2. 先寫 base（mobile），再加 `sm/md/lg`。
3. 同層間距優先 `gap`，少用混雜 margin。

## 交付證據清單（提交前自查）

建議模板：[chapter-evidence-template](../templates/learner-ops/chapter-evidence-template.md)

- 手機/桌機兩種版面證據。
- `notes/week-03-flex-vs-grid.md` 比較紀錄。
- 一次 overflow 問題修正證據。

## 延伸閱讀（遇到進階需求再看）

- MDN CSS: <https://developer.mozilla.org/en-US/docs/Learn/CSS>
- Tailwind docs: <https://tailwindcss.com/docs>
- Tailwind + Next.js: <https://tailwindcss.com/docs/guides/nextjs>
