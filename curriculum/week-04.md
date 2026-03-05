# Week 04 - JavaScript 基礎、非同步與除錯（Chapter 4）

## 章節導讀

你會在這章建立真正可維護的 JS 心智模型，尤其是 async。很多 React/Next 問題本質上都來自 JS 執行順序誤判。

你會學到：
1. 同步與非同步執行順序。
2. Promise/async-await 的錯誤處理。
3. fetch 三態（loading/success/error）最小正確模式。

## 0 基礎詞彙

- `Call Stack`: 目前正在執行的函式堆疊。
- `Promise`: 非同步結果容器。
- `await`: 等待 Promise 完成。
- `try/catch`: 捕捉執行過程中的錯誤。

## 事件循環圖（ASCII）

```text
Call Stack
   |
   v
Web APIs (timer/fetch)
   |
   v
Task Queue / Microtask Queue
   |
   v
Event Loop pushes callback back to Call Stack
```

## 核心知識（像書一樣讀）

### 1. 先理解順序，再寫程式

以下程式的輸出順序是什麼？

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```

答案：`A D C B`（microtask 先於 macrotask）。

### 2. 非同步錯誤不會自己消失

你要主動定義：
1. API 失敗時顯示什麼。
2. 失敗訊息記錄在哪。
3. 是否允許 retry。

### 3. fetch 三態是必要，不是選配

```text
loading -> success
loading -> error
```

如果只寫 success path，產品一定會出現「卡住沒回應」問題。

## Code-Along（逐步照做）

### Step 0 - 建立練習檔

```bash
mkdir -p playground/week-04-async
cd playground/week-04-async
```

建立 `index.html`：

```html
<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Week 04 Async</title>
  </head>
  <body>
    <button id="load-btn">Load Data</button>
    <p id="status">Idle</p>
    <pre id="result"></pre>
    <script src="./main.js"></script>
  </body>
</html>
```

建立 `main.js`：

```js
const loadBtn = document.querySelector("#load-btn");
const status = document.querySelector("#status");
const result = document.querySelector("#result");

async function loadData() {
  status.textContent = "Loading...";
  result.textContent = "";

  try {
    // 用公開測試 API 做示範；專案內可改成自己的 BFF endpoint。
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    status.textContent = "Success";
    result.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    status.textContent = "Error";
    result.textContent = String(error);
    console.error("loadData failed:", error);
  }
}

loadBtn?.addEventListener("click", loadData);
```

### Step 1 - 驗收三態

1. 正常網路：應看到 `Success` + JSON。
2. 故意改錯 URL：應看到 `Error`。
3. 看 Console：應該有 error log。

### Step 2 - 增加超時防護

在 `main.js` 增加 timeout helper：

```js
function withTimeout(promise, ms = 3000) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), ms)),
  ]);
}
```

把 fetch 改成：

```js
const response = await withTimeout(fetch("https://jsonplaceholder.typicode.com/todos/1"), 3000);
```

### Step 3 - 寫除錯紀錄

建立 `notes/week-04-debug-log.md`，記錄：
1. 你製造的錯誤案例。
2. 你看了哪些證據（Network/Console）。
3. 你怎麼修。

## 常見錯誤與排查

1. 忘記 `await response.json()`：
- 現象：拿到 Promise 不是資料。
- 修正：補 `await`。

2. 只檢查 catch，沒檢查 `response.ok`：
- 現象：4xx/5xx 不會進 catch。
- 修正：手動判斷 `!response.ok`。

3. UI 沒有 loading：
- 現象：使用者看起來像當機。
- 修正：一開始先設 `Loading...`。

## 本週 5 天節奏（章節閱讀 + 實作）

- Day 1: 讀核心知識 + 完成 Step 0。
- Day 2: 完成 Step 1（三態驗收）。
- Day 3: 完成 Step 2~3（timeout + debug log）。
- Day 4: 完成 [Workshop week-04](../workshops/week-04/README.md)。
- Day 5: 完成 [Assignment week-04](../assignments/week-04/README.md)。

## Cline 協作模板

```text
我有一段 async/fetch 程式會失敗。
請你先給我：
1) 最小重現
2) 檢查順序（Network -> Console -> Code）
3) 只改必要行數的 patch 建議
```

## 本週實作

- Workshop: [week-04](../workshops/week-04/README.md)
- Assignment: [week-04](../assignments/week-04/README.md)
- Rubric: [week-04](../rubrics/week-04.md)

## 完成定義

- 能寫出含 loading/success/error 的穩定 fetch 流程。
- 能針對 async 問題提交可重現且有證據的 bug report。


## 章節練習（不看答案先做）

1. 請手推一段 event loop 範例輸出順序並解釋原因。
2. 請完成 `loading/success/error` 三態 fetch 範例。
3. 請加入 timeout 防護並驗證 timeout 錯誤能被 UI 呈現。

## 提示（卡住再看）

1. 先分同步、microtask、macrotask，再排順序。
2. `response.ok` 需手動判斷，不等於進 `catch`。
3. 每次失敗都要保留 Network + Console 證據。

## 交付證據清單（提交前自查）

建議模板：[chapter-evidence-template](../templates/learner-ops/chapter-evidence-template.md)

- event loop 推導筆記。
- 三態畫面證據（成功與失敗）。
- `notes/week-04-debug-log.md`（含 timeout 案例）。

## 延伸閱讀（遇到進階需求再看）

- MDN JavaScript Guide: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide>
- MDN Promise: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise>
- JavaScript.info async: <https://javascript.info/async>
