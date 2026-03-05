# Week 05 - TypeScript 核心型別系統（Chapter 5）

## 章節導讀

這一章要把你從「JavaScript 可跑就好」帶到「型別先保護品質」。

你會學到：
1. 為什麼 TS 能降低維運風險。
2. `type`/`interface`/`union`/`narrowing` 的最小實戰。
3. 如何把一段 JS 穩定遷移成 TS。

## 0 基礎詞彙

- `Static Type`: 編譯時型別檢查。
- `Type Narrowing`: 從寬型別縮小到可安全使用的型別。
- `any`: 關閉型別保護，不建議濫用。
- `unknown`: 先驗證再使用。

## 型別流程圖（ASCII）

```text
External data (unknown)
  -> runtime check / type guard
  -> narrowed type
  -> safe business logic
```

## 核心知識（像書一樣讀）

### 1. TS 的價值不是「語法比較麻煩」

TS 的核心價值：
1. 在你執行前就抓到一批錯誤。
2. 團隊重構時有型別護欄。
3. 型別本身就是文件。

### 2. `any` 與 `unknown` 的策略

- `any`: 我放棄檢查。
- `unknown`: 我先檢查再使用。

在維護期，`unknown + narrowing` 幾乎總是比 `any` 安全。

### 3. Union + Narrowing 是企業專案高頻模式

```ts
type ApiResult =
  | { ok: true; data: { id: string; name: string } }
  | { ok: false; error: string };
```

使用前先判斷 `ok`，再取資料。

## Code-Along（逐步照做）

### Step 0 - 建立 TS 練習專案

```bash
mkdir -p playground/week-05-ts-core
cd playground/week-05-ts-core
npm init -y
npm i -D typescript
npx tsc --init
```

### Step 1 - 建立型別與函式

建立 `src/index.ts`：

```ts
type User = {
  id: string;
  email: string;
  role: "admin" | "member";
};

type ApiResult =
  | { ok: true; data: User }
  | { ok: false; error: string };

function printUser(result: ApiResult): string {
  if (!result.ok) {
    return `Error: ${result.error}`;
  }

  return `${result.data.email} (${result.data.role})`;
}

const success: ApiResult = {
  ok: true,
  data: { id: "u1", email: "dev@example.com", role: "admin" },
};

console.log(printUser(success));
```

### Step 2 - 做一次 unknown narrowing

在同檔加上：

```ts
function isUser(input: unknown): input is User {
  if (typeof input !== "object" || input === null) return false;

  const maybe = input as Record<string, unknown>;
  return (
    typeof maybe.id === "string" &&
    typeof maybe.email === "string" &&
    (maybe.role === "admin" || maybe.role === "member")
  );
}

function parseUser(input: unknown): User {
  if (!isUser(input)) {
    throw new Error("Invalid User payload");
  }
  return input;
}
```

### Step 3 - 驗收

```bash
npx tsc --noEmit
```

你應該做到：
1. 沒有 type error。
2. 能解釋為什麼這裡用 `unknown` 不用 `any`。
3. 能指出哪裡做了 narrowing。

### Step 4 - 小型遷移練習

把一段你熟悉的 JS function 改寫成 TS，並寫在：
`notes/week-05-js-to-ts.md`

## 常見錯誤與排查

1. 到處用 `as` 斷言：
- 風險：把錯誤藏起來。
- 修正：優先用 type guard。

2. `role: string` 寫太寬：
- 風險：非法值混入。
- 修正：用 literal union。

3. 忽略 null/undefined：
- 風險：runtime crash。
- 修正：strict 模式 + 明確檢查。

## 本週 5 天節奏（章節閱讀 + 實作）

- Day 1: 讀核心知識 + 完成 Step 0。
- Day 2: 完成 Step 1（union/result）。
- Day 3: 完成 Step 2~4（narrowing + 遷移）。
- Day 4: 完成 [Workshop week-05](../workshops/week-05/README.md)。
- Day 5: 完成 [Assignment week-05](../assignments/week-05/README.md)。

## Cline 協作模板

```text
請你 review 我的 TypeScript 設計。
請依序回答：
1) 哪些地方目前用 any（若有）
2) 可以如何改成 unknown + narrowing
3) 哪些 union 設計可以更精準
```

## 本週實作

- Workshop: [week-05](../workshops/week-05/README.md)
- Assignment: [week-05](../assignments/week-05/README.md)
- Rubric: [week-05](../rubrics/week-05.md)

## 完成定義

- 能完成一個 JS 模組到 TS 的安全遷移。
- 能用 union + narrowing 保護錯誤路徑。


## 常見錯誤示例（Wrong vs Right）

- Wrong: 用 `any` 快速通過型別。
- Right: 外部資料用 `unknown`，透過 type guard 收斂後再使用。

## 章節練習（不看答案先做）

1. 請把一段 `any` 代碼改成 `unknown + type guard`。
2. 請用 discriminated union 建立成功/失敗結果型別。
3. 請找出 3 個可能 runtime crash 點並用 TS 修正。

## 提示（卡住再看）

1. 外部輸入一律先當 `unknown`。
2. `ok: true | false` 可快速建立清楚分支。
3. 優先修 `null/undefined` 與寬型別欄位。

## 交付證據清單（提交前自查）

建議模板：[chapter-evidence-template](../templates/learner-ops/chapter-evidence-template.md)

- `npx tsc --noEmit` 綠燈結果。
- 至少一個自訂 type guard。
- `notes/week-05-js-to-ts.md` 遷移記錄。

## 延伸閱讀（遇到進階需求再看）

- TypeScript Handbook: <https://www.typescriptlang.org/docs/handbook/intro.html>
- Narrowing: <https://www.typescriptlang.org/docs/handbook/2/narrowing.html>
