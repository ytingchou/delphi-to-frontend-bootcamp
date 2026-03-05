# Week 01 - Web 平台心智模型與開發環境（Chapter 1）

## 章節導讀

這一章目標是讓「前端 0 基礎」學習者先建立共同語言。你會先搞懂：

1. 瀏覽器到底做了什麼。
2. Request/Response 是怎麼在 Browser、Next.js、BFF、Backend 之間流動。
3. 為什麼維護 Next.js 專案前，必須先會看 Network 與 Console。

這章讀完你應該能獨立回答：
- 使用者按下按鈕後，資料是怎麼走到後端再回來。
- 一個 API 失敗時，先查哪裡，不要盲改程式。

## 0 基礎詞彙（先讀這 5 分鐘）

- `Browser`: 使用者端執行環境（Chrome/Edge）。
- `Server`: 回應請求的服務（Next.js server、Backend API）。
- `HTTP`: Browser 與 Server 溝通的協定。
- `Request`: 你送出去的要求。
- `Response`: 伺服器回來的結果。

## 知識地圖（ASCII）

```text
User click
  -> Browser sends HTTP request
  -> Next.js server receives request
  -> (optional) BFF calls backend API
  -> backend returns data
  -> Next.js returns HTML/JSON
  -> Browser renders UI
```

## 核心知識（像書一樣讀）

### 1. Browser 不只是「顯示畫面」

Browser 至少做三件事：
1. 解析 HTML/CSS，畫出畫面。
2. 執行 JavaScript。
3. 發 HTTP request 拿資料。

所以前端 bug 常分三類：
1. 畫面結構錯（HTML/CSS）。
2. 邏輯錯（JavaScript）。
3. 網路錯（HTTP/API）。

### 2. HTTP 最小必要集合

你先記住這張表就夠開始維護：

- `GET`: 讀資料。
- `POST`: 新增資料。
- `PUT/PATCH`: 更新資料。
- `DELETE`: 刪資料。

Status code 快速判斷：

- `2xx`: 成功。
- `4xx`: 請求有問題（參數、授權、路徑）。
- `5xx`: 伺服器內部錯誤。

### 3. Cookie 與 localStorage 的第一層差異

```text
Cookie: 會隨 request 自動送到 server（可設 HttpOnly）
localStorage: 只在 browser 內，可被 JS 讀取
```

在企業專案的安全實作，通常會把敏感 session 放在 server-side + HttpOnly cookie，而不是直接放前端可讀 storage。

## Code-Along（逐步照做）

### Step 0 - 建立本章練習資料夾

```bash
mkdir -p playground/week-01-http-basics
cd playground/week-01-http-basics
npm init -y
```

### Step 1 - 建立最小 HTTP 伺服器

建立 `server.mjs`：

```js
import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/api/health" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: true, service: "week-01", time: Date.now() }));
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ ok: false, error: "NOT_FOUND" }));
});

server.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
```

### Step 2 - 啟動與發送 request

```bash
node server.mjs
```

另開終端：

```bash
curl -i http://localhost:3001/api/health
curl -i http://localhost:3001/not-exists
```

### Step 3 - 驗收（你應該看到）

1. 第一個 `curl` 回 `200` 與 JSON。
2. 第二個 `curl` 回 `404` 與 `NOT_FOUND`。
3. 你能指出 `method/url/status/body` 在哪裡。

### Step 4 - DevTools 練習

1. 開 browser 輸入 `http://localhost:3001/api/health`。
2. 打開 DevTools `Network`，點這筆 request。
3. 在筆記記錄：
- Request URL
- Request Method
- Status Code
- Response Body

建議輸出檔案：`notes/week-01-day-1.md`

## 常見錯誤與排查（先照順序）

1. `EADDRINUSE`:
- 原因：3001 被占用。
- 解法：換 port 或關閉舊 process。

2. `Cannot find module`:
- 原因：檔名或路徑拼錯。
- 解法：確認 `server.mjs` 在當前目錄。

3. `curl` 回應空白:
- 原因：server 沒啟動。
- 解法：先看終端是否有 `Server running`。

## 本週 5 天節奏（章節閱讀 + 實作）

- Day 1: 讀完本章「核心知識」+ 完成 Step 0~2。
- Day 2: 完成 Step 3~4 + DevTools 截圖證據。
- Day 3: 寫 1 份 bug 重現報告（含 request/response 證據）。
- Day 4: 完成 [Workshop week-01](../workshops/week-01/README.md)。
- Day 5: 完成 [Assignment week-01](../assignments/week-01/README.md) + 回顧。

## Cline 協作模板（直接可貼）

```text
你是我的前端導師。請先檢查我對 HTTP request/response 的理解。
我目前觀察到：
1) GET /api/health 回 200
2) GET /not-exists 回 404
請你：
- 先重述我是否理解正確
- 給我 3 個最常見排查順序
- 只給下一步，不要一次給太多
```

## 本週實作

- Workshop: [week-01](../workshops/week-01/README.md)
- Assignment: [week-01](../assignments/week-01/README.md)
- Rubric: [week-01](../rubrics/week-01.md)

## 完成定義

- 能口述一個 request 從 browser 到 server 再回 browser 的流程。
- 能在 DevTools 找到一筆失敗 API 的 status、header、response。
- 能提交至少一份含證據的 bug report。


## 章節練習（不看答案先做）

1. 請用自己的話畫出 `Browser -> Next.js -> BFF/API -> DB -> Browser` 流程，並說明每層責任。
2. 請比較 `GET /api/health` 與 `GET /not-exists` 的 request/response 差異（method、status、body）。
3. 請提交一份 bug report（預期/實際/重現步驟/Network 證據）。

## 提示（卡住再看）

1. 先用 `curl -i` 看完整 HTTP 回應，再對照 DevTools。
2. 先判斷是 4xx 還是 5xx，再決定查請求或查伺服器。
3. bug report 最少要有 1 張 Network 證據與 1 段原始回應。

## 交付證據清單（提交前自查）

建議模板：[chapter-evidence-template](../templates/learner-ops/chapter-evidence-template.md)

- 一份 request/response 對照筆記。
- 一張 DevTools Network 截圖（含 status）。
- 一份可重現 bug report。

## 延伸閱讀（遇到進階需求再看）

- MDN Web 概念: <https://developer.mozilla.org/en-US/docs/Learn>
- MDN HTTP: <https://developer.mozilla.org/en-US/docs/Web/HTTP>
- Chrome DevTools: <https://developer.chrome.com/docs/devtools>
