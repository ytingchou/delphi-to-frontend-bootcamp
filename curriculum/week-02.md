# Week 02 - Semantic HTML、Form 與 Accessibility（Chapter 2）

## 章節導讀

這一章會教你把「畫面」變成「語意化文件」，這是前端工程的根基。你會學到：

1. 為什麼 HTML 不只是排版。
2. 一個可用表單應該包含哪些元素。
3. 無障礙（a11y）最小必要規則。

這章的成果是：你能做出一頁可鍵盤操作、可讀屏理解、可測試定位的表單頁。

## 0 基礎詞彙

- `Semantic HTML`: 用有語意的標籤描述內容，不是全用 `div`。
- `a11y`: Accessibility，可存取性。
- `label`: 表單欄位的文字標籤。
- `focus`: 鍵盤導覽目前停留的元素。

## 知識地圖（ASCII）

```text
Semantic structure
  -> better screen reader support
  -> better keyboard navigation
  -> better test selectors
  -> better maintainability
```

Mermaid source: [week-02-semantic-a11y-flow.mmd](../assets/diagrams/week-02-semantic-a11y-flow.mmd)

## 核心知識（像書一樣讀）

### 1. 語意化標籤是結構，不是樣式

基礎頁面骨架：
- `header`: 頁首區塊。
- `main`: 主內容區。
- `section/article`: 章節或獨立內容。
- `footer`: 頁尾。

如果你全部用 `div`，畫面看起來可能一樣，但語意會消失，後續輔助技術與自動化測試成本上升。

### 2. 表單的最小正確模式

每個欄位至少要有：
1. `label` 對應輸入欄位。
2. 必填與格式提示。
3. 錯誤訊息可被讀屏讀到。

### 3. 鍵盤操作是基本品質線

至少驗收這三件事：
1. 可用 `Tab` 走完互動元件。
2. Focus 樣式可見。
3. Enter/Space 行為符合預期。

## Code-Along（逐步照做）

### Step 0 - 建立練習檔案

```bash
mkdir -p playground/week-02-semantic-form
cd playground/week-02-semantic-form
```

建立 `index.html`：

```html
<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Week 02 Semantic Form</title>
    <style>
      body { font-family: sans-serif; margin: 24px; line-height: 1.5; }
      .field { margin-bottom: 12px; }
      .error { color: #b00020; }
      :focus-visible { outline: 3px solid #1d4ed8; outline-offset: 2px; }
    </style>
  </head>
  <body>
    <header><h1>註冊表單</h1></header>
    <main>
      <section aria-labelledby="signup-title">
        <h2 id="signup-title">建立帳號</h2>
        <form id="signup-form" novalidate>
          <div class="field">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" required aria-describedby="email-help email-error" />
            <p id="email-help">請輸入公司信箱</p>
            <p id="email-error" class="error" hidden>Email 格式錯誤</p>
          </div>

          <div class="field">
            <label for="password">密碼</label>
            <input id="password" name="password" type="password" required minlength="8" aria-describedby="pwd-error" />
            <p id="pwd-error" class="error" hidden>密碼至少 8 碼</p>
          </div>

          <button type="submit">送出</button>
        </form>
      </section>
    </main>
  </body>
</html>
```

### Step 1 - 加入最小驗證邏輯

建立 `form.js`：

```js
const form = document.querySelector("#signup-form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailError = document.querySelector("#email-error");
const pwdError = document.querySelector("#pwd-error");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValid = email.validity.valid;
  const pwdValid = password.validity.valid;

  emailError.hidden = emailValid;
  pwdError.hidden = pwdValid;

  if (emailValid && pwdValid) {
    alert("提交成功");
  }
});
```

在 `index.html` 最後加入：

```html
<script src="./form.js"></script>
```

### Step 2 - 啟動與驗收

可用任何靜態伺服器開啟（例如 VS Code Live Server）。

你應該驗收：
1. 不輸入直接送出會顯示錯誤。
2. `Tab` 可依序走到 Email、Password、送出按鈕。
3. Focus 樣式清楚可見。

### Step 3 - A11y 自我檢查清單

1. 每個輸入都有對應 `label`。
2. 錯誤訊息有 `aria-describedby` 關聯。
3. heading 階層從 `h1` 到 `h2` 合理。

建議輸出檔案：`notes/week-02-a11y-audit.md`

## 常見錯誤與排查

1. 只放 placeholder 沒有 label：
- 問題：讀屏與可用性差。
- 解法：補 `label for` 與 input `id`。

2. 用 `div` 假按鈕：
- 問題：鍵盤與語意都錯。
- 解法：改 `<button>`。

3. 錯誤文字只改顏色：
- 問題：讀屏不一定知道。
- 解法：讓錯誤訊息與欄位有語意關聯。

## 本週 5 天節奏（章節閱讀 + 實作）

- Day 1: 讀完核心知識 + 完成 Step 0。
- Day 2: 完成 Step 1 + 表單驗證。
- Day 3: 完成 Step 2 + a11y 清單。
- Day 4: 完成 [Workshop week-02](../workshops/week-02/README.md)。
- Day 5: 完成 [Assignment week-02](../assignments/week-02/README.md)。

## Cline 協作模板

```text
請你扮演前端 code reviewer，幫我檢查下面 HTML 表單是否符合語意化與 a11y 最小要求。
請用以下格式回答：
1) 必修正問題（blocking）
2) 建議修正（non-blocking）
3) 我應該先改哪 2 個點
```

## 本週實作

- Workshop: [week-02](../workshops/week-02/README.md)
- Assignment: [week-02](../assignments/week-02/README.md)
- Rubric: [week-02](../rubrics/week-02.md)

## 完成定義

- 能交付一頁語意化且可鍵盤操作的表單。
- 能說明至少 5 個常見 a11y 反模式與修正方式。


## 常見錯誤示例（Wrong vs Right）

- Wrong: 用 placeholder 當欄位標籤。
- Right: 使用 `label for` 與欄位語意關聯。

```html
<!-- Wrong -->
<input id="email" placeholder="Email" />

<!-- Right -->
<label for="email">Email</label>
<input id="email" type="email" aria-describedby="email-help" />
<p id="email-help">請輸入公司信箱</p>
```

## 章節練習（不看答案先做）

1. 請把一頁僅用 `div` 的表單重構成語意化結構（`header/main/section/form`）。
2. 請做出可鍵盤操作的表單（Tab 可走完、focus 可見）。
3. 請列出 5 個 a11y 風險並給出修正。

## 提示（卡住再看）

1. 每個 input 先補 `label for`，再做樣式。
2. 錯誤訊息需用 `aria-describedby` 與欄位關聯。
3. 用鍵盤完整走一次提交流程再做結論。

## 交付證據清單（提交前自查）

建議模板：[chapter-evidence-template](../templates/learner-ops/chapter-evidence-template.md)

- 語意化 HTML 檔案（非全 `div`）。
- 鍵盤導覽錄影或截圖證據。
- `notes/week-02-a11y-audit.md`（含修正前後）。

## 延伸閱讀（遇到進階需求再看）

- MDN HTML: <https://developer.mozilla.org/en-US/docs/Learn/HTML>
- MDN Accessibility: <https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides>
- WebAIM: <https://webaim.org/>
