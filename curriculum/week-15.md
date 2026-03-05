# Week 15 - ESLint + Jest + CI 品質閘（Chapter 15）

## 章節導讀

這一章會把「可跑」變成「可放心合併」。

你會學到：
1. ESLint 規則如何保護團隊一致性。
2. Jest 測試如何覆蓋關鍵邏輯與錯誤路徑。
3. CI 品質閘如何定義 block merge 條件。

## 0 基礎詞彙

- `Lint`: 靜態規範檢查。
- `Unit test`: 單元測試。
- `Integration test`: 整合測試。
- `Quality gate`: 合併前必過條件。

## 品質流圖（ASCII）

```text
Code
  -> lint
  -> unit tests
  -> integration tests
  -> PR review
  -> merge
```

Mermaid source: [week-15-quality-gate.mmd](../assets/diagrams/week-15-quality-gate.mmd)

## 核心知識（像書一樣讀）

### 1. 規範是團隊協作工具

ESLint 不是為了挑語法，而是避免常見維護雷區。

### 2. 測試先保護高風險邏輯

優先測：
1. auth 判斷。
2. BFF mapper。
3. 錯誤處理分支。

### 3. CI 要快、準、可行動

失敗訊號必須能讓人快速知道：哪裡壞、怎麼修。

## Code-Along（逐步照做）

### Step 0 - 安裝測試與 lint 依賴

在 `playground/week-09-next-app`：

```bash
npm i -D jest @types/jest ts-jest @testing-library/react @testing-library/jest-dom eslint
```

### Step 1 - 建立一個可測函式

建立 `src/lib/mapper.ts`：

```ts
export type UpstreamOrder = { order_id: string; amount_cents: number };
export type OrderDto = { id: string; amount: number };

export function mapOrder(input: UpstreamOrder): OrderDto {
  return {
    id: input.order_id,
    amount: input.amount_cents / 100,
  };
}
```

### Step 2 - 寫 Jest 測試

建立 `src/lib/mapper.test.ts`：

```ts
import { mapOrder } from "./mapper";

describe("mapOrder", () => {
  it("maps cents to amount", () => {
    const result = mapOrder({ order_id: "o-1", amount_cents: 2599 });
    expect(result).toEqual({ id: "o-1", amount: 25.99 });
  });

  it("handles zero amount", () => {
    const result = mapOrder({ order_id: "o-2", amount_cents: 0 });
    expect(result.amount).toBe(0);
  });
});
```

### Step 3 - 補上 lint/test scripts

在 `package.json` scripts 加上：

```json
{
  "scripts": {
    "lint": "eslint .",
    "test": "jest --runInBand"
  }
}
```

### Step 4 - 驗收

```bash
npm run lint
npm run test
```

驗收標準：
1. lint 無 error。
2. test 綠燈。
3. 你至少覆蓋 1 個錯誤或邊界案例。

## 測試策略圖（ASCII）

```text
Most tests -> pure logic unit tests
Some tests -> integration tests
Few tests  -> full e2e critical paths
```

## 常見錯誤與排查

1. 只測 happy path：
- 風險：真實錯誤時崩潰。
- 修正：至少加 1 個 error/edge case。

2. 過度 mock：
- 風險：測試綠燈但真實壞掉。
- 修正：只 mock 必要邊界。

3. lint 規則太多一次導入：
- 風險：團隊停擺。
- 修正：先定 blocker 規則。

## 本週 5 天節奏（章節閱讀 + 實作）

- Day 1: 讀核心知識 + 完成 Step 0。
- Day 2: 完成 Step 1~2（函式 + 測試）。
- Day 3: 完成 Step 3~4（腳本 + 驗收）。
- Day 4: 完成 [Workshop week-15](../workshops/week-15/README.md)。
- Day 5: 完成 [Assignment week-15](../assignments/week-15/README.md)。

## Cline 協作模板

```text
請 review 我的測試覆蓋。
請回答：
1) 哪些關鍵路徑沒測到
2) 哪些測試過度依賴 mock
3) 你建議先補哪 3 個測試
```

## 本週實作

- Workshop: [week-15](../workshops/week-15/README.md)
- Assignment: [week-15](../assignments/week-15/README.md)
- Rubric: [week-15](../rubrics/week-15.md)

## 完成定義

- 能建立 lint/test 品質閘。
- 能為 auth/BFF/error path 補足高價值測試。


## 常見錯誤示例（Wrong vs Right）

- Wrong: 測試只驗 happy path。
- Right: 同時覆蓋錯誤與邊界案例。

```ts
// Wrong
it("maps order", () => {
  expect(mapOrder({ order_id: "o1", amount_cents: 100 })).toEqual({ id: "o1", amount: 1 });
});

// Right
it("maps order", () => {
  expect(mapOrder({ order_id: "o1", amount_cents: 100 })).toEqual({ id: "o1", amount: 1 });
});
it("handles zero amount", () => {
  expect(mapOrder({ order_id: "o2", amount_cents: 0 }).amount).toBe(0);
});
```

## 章節練習（不看答案先做）

1. 請為 mapper/validator 補至少 2 個單元測試。
2. 請補 1 個錯誤路徑測試（非 happy path）。
3. 請定義品質閘：哪些 lint/test 失敗要阻擋 merge。

## 提示（卡住再看）

1. 先測純函式，最容易穩定。
2. 每個關鍵模組至少一個 edge case。
3. CI 規則先少而準，再逐步加嚴。

## 交付證據清單（提交前自查）

建議模板：[chapter-evidence-template](../templates/learner-ops/chapter-evidence-template.md)

- `npm run lint` 綠燈。
- `npm run test` 綠燈。
- 一份 quality gate 說明文件。

## 延伸閱讀（遇到進階需求再看）

- ESLint docs: <https://eslint.org/docs/latest/use/getting-started>
- Jest docs: <https://jestjs.io/docs/getting-started>
- Next.js Jest guide: <https://nextjs.org/docs/app/guides/testing/jest>
