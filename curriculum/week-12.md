# Week 12 - Next.js 維運能力：設定、觀測、交付（Chapter 12）

## 章節導讀

這一章是「把功能安全交付」的核心。你會學到如何把專案從可跑變成可維運。

你會學到：
1. 環境變數與 secrets 邊界。
2. 可行動的 logging 與 incident triage。
3. release checklist 與 rollback 思維。

## 0 基礎詞彙

- `Env var`: 環境變數。
- `Observability`: 可觀測性（log/trace/metrics）。
- `Runbook`: 事件處置手冊。
- `Rollback`: 回退到安全版本。

## 交付流程圖（ASCII）

```text
Code change
  -> lint/test/build
  -> review
  -> deploy
  -> monitor
  -> rollback (if needed)
```

Mermaid source: [week-12-release-loop.mmd](../assets/diagrams/week-12-release-loop.mmd)

## 核心知識（像書一樣讀）

### 1. 設定錯誤比程式錯誤更常見

你要明確區分：
- client 可公開變數（`NEXT_PUBLIC_`）。
- server-only secrets（不得暴露到瀏覽器）。

### 2. 日誌要能行動，不是只堆文字

最小欄位：
- timestamp
- request id
- route
- error code
- message

### 3. 交付不是 merge 結束

真正交付包含：
1. 上線後監控。
2. 異常處置。
3. 可執行 rollback。

## Code-Along（逐步照做）

### Step 0 - 建立環境設定檢查

在 `playground/week-09-next-app` 新增 `.env.example`：

```env
NEXT_PUBLIC_APP_NAME=Bootcamp Admin
API_BASE_URL=http://localhost:3000
OIDC_ISSUER=http://localhost:8080/realms/bootcamp
```

### Step 1 - 建立 server-only config reader

建立 `src/lib/config.ts`：

```ts
export function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing env: ${name}`);
  }
  return value;
}

export const config = {
  apiBaseUrl: getRequiredEnv("API_BASE_URL"),
};
```

### Step 2 - 建立最小 logger

建立 `src/lib/logger.ts`：

```ts
type LogLevel = "info" | "warn" | "error";

type LogMeta = Record<string, unknown>;

export function log(level: LogLevel, message: string, meta: LogMeta = {}) {
  const entry = {
    time: new Date().toISOString(),
    level,
    message,
    ...meta,
  };

  console.log(JSON.stringify(entry));
}
```

在 BFF route handler 捕捉錯誤時使用：

```ts
log("error", "bff_orders_failed", { route: "/api/bff/orders" });
```

### Step 3 - 建立 release checklist

新增 `notes/week-12-release-checklist.md`，至少包含：
1. lint/test/build 結果。
2. env 已核對。
3. rollback 步驟（指令 + 觸發條件）。

### Step 4 - 驗收

1. 缺環境變數時，啟動即明確失敗。
2. 失敗 log 可看出 route 與錯誤碼。
3. 你有可執行的 release/rollback 清單。

## Incident 分流圖（ASCII）

```text
Alert
  -> Can reproduce?
     -> yes: triage by logs + request id
     -> no: collect evidence first
  -> apply rollback criteria?
     -> yes: rollback
     -> no: patch forward
```

## 常見錯誤與排查

1. 把 secret 放 `NEXT_PUBLIC_`：
- 風險：前端可見。
- 修正：僅 server 使用。

2. 錯誤 log 沒關聯資訊：
- 風險：難定位。
- 修正：至少加 route/request id。

3. 沒有 rollback 條件：
- 風險：事故拖長。
- 修正：明確定義 rollback 門檻。

## 本週 5 天節奏（章節閱讀 + 實作）

- Day 1: 讀核心知識 + 完成 Step 0。
- Day 2: 完成 Step 1~2（config/logger）。
- Day 3: 完成 Step 3~4（release checklist + 驗收）。
- Day 4: 完成 [Workshop week-12](../workshops/week-12/README.md)。
- Day 5: 完成 [Assignment week-12](../assignments/week-12/README.md)。

## Cline 協作模板

```text
請幫我 review 這份 release checklist。
請指出：
1) 缺少哪些 blocker 級檢查
2) rollback 步驟是否可執行
3) incident triage 先後順序是否合理
```

## 本週實作

- Workshop: [week-12](../workshops/week-12/README.md)
- Assignment: [week-12](../assignments/week-12/README.md)
- Rubric: [week-12](../rubrics/week-12.md)

## 完成定義

- 能提供可用 config/logging/release runbook。
- 能對事故做初步 triage 與 rollback 判斷。


## 常見錯誤示例（Wrong vs Right）

- Wrong: 把秘密值放在 `NEXT_PUBLIC_*`。
- Right: secrets 只在 server 使用，並加上 env 檢查與可行動 log。

## 章節練習（不看答案先做）

1. 請建立 `.env.example` 與必填 env 驗證機制。
2. 請讓 BFF 錯誤 log 帶 route 與 request 關聯資訊。
3. 請寫出 release/rollback checklist（可直接執行）。

## 提示（卡住再看）

1. 先分 public env 與 server-only secret。
2. log 要讓人能快速定位，不只輸出錯誤字串。
3. 先定 rollback 觸發條件，再定步驟。

## 交付證據清單（提交前自查）

建議模板：[chapter-evidence-template](../templates/learner-ops/chapter-evidence-template.md)

- 缺 env 時的明確失敗證據。
- 結構化 log 範例至少一筆。
- `notes/week-12-release-checklist.md`。

## 延伸閱讀（遇到進階需求再看）

- Next.js deployment docs: <https://nextjs.org/docs/app/getting-started/deploying>
- Next.js env vars: <https://nextjs.org/docs/app/guides/environment-variables>
