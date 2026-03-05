# Week 06 - TypeScript 進階：Generics 與 API 契約（Chapter 6）

## 章節導讀

這一章重點是「讓型別跨層一致」，你會做出可維護的 API 契約，而不是每層各寫一套。

你會學到：
1. 泛型（Generics）如何避免重複。
2. Utility types 如何快速組裝模型。
3. DTO 映射與錯誤模型如何落地。

## 0 基礎詞彙

- `Generic`: 可參數化型別。
- `DTO`: Data Transfer Object，跨層資料格式。
- `Pick/Omit/Partial/Record`: 型別工具。
- `Contract`: 前後端共同遵守的資料規格。

## 契約流圖（ASCII）

```text
Backend payload
  -> BFF mapper
  -> Frontend DTO
  -> UI props
```

## 核心知識（像書一樣讀）

### 1. 先有契約，再有畫面

前端若直接依賴 backend 原始欄位，後端一改名就炸。

做法：
1. 固定前端 DTO。
2. 在 BFF/mapping 層轉譯上游格式。

### 2. Generic 的實用思維

不是為了炫技，而是為了消除重複且保持可讀。

### 3. 成功/失敗都要有型別

你要讓錯誤路徑跟成功路徑一樣可讀、可測、可維護。

## Code-Along（逐步照做）

### Step 0 - 延續 week-05 專案

```bash
cd playground/week-05-ts-core
mkdir -p src/week06
```

### Step 1 - 建立通用結果型別

建立 `src/week06/contracts.ts`：

```ts
export type ApiSuccess<T> = {
  ok: true;
  data: T;
};

export type ApiFailure = {
  ok: false;
  error: {
    code: "VALIDATION" | "UNAUTHORIZED" | "UNKNOWN";
    message: string;
  };
};

export type ApiResult<T> = ApiSuccess<T> | ApiFailure;
```

### Step 2 - 建立 DTO 與 mapper

建立 `src/week06/user-mapper.ts`：

```ts
import type { ApiResult } from "./contracts";

type UpstreamUser = {
  user_id: string;
  display_name: string;
  is_admin: boolean;
};

export type UserDto = {
  id: string;
  name: string;
  role: "admin" | "member";
};

export function mapUser(payload: UpstreamUser): UserDto {
  return {
    id: payload.user_id,
    name: payload.display_name,
    role: payload.is_admin ? "admin" : "member",
  };
}

export function toUserResult(payload: UpstreamUser): ApiResult<UserDto> {
  try {
    return { ok: true, data: mapUser(payload) };
  } catch {
    return {
      ok: false,
      error: { code: "UNKNOWN", message: "Failed to map user" },
    };
  }
}
```

### Step 3 - Utility type 演練

在同檔案補上：

```ts
export type UserPatchDto = Partial<Pick<UserDto, "name">>;
export type UserTableRow = Pick<UserDto, "id" | "name" | "role">;
```

### Step 4 - 驗收

1. `npx tsc --noEmit` 無錯。
2. 你能說明「為什麼 UI 不直接吃 `UpstreamUser`」。
3. 你有定義成功與失敗的統一契約。

## 常見錯誤與排查

1. Generic 過度抽象：
- 症狀：型別很炫但團隊看不懂。
- 修正：先可讀，再 DRY。

2. DTO 與 backend payload 混用：
- 症狀：欄位命名亂。
- 修正：強制 mapper 隔離。

3. 只型別化成功路徑：
- 症狀：錯誤處理到 UI 才爆。
- 修正：錯誤模型先定義。

## 本週 5 天節奏（章節閱讀 + 實作）

- Day 1: 讀核心知識 + 完成 Step 0。
- Day 2: 完成 Step 1（ApiResult）。
- Day 3: 完成 Step 2~4（mapper + utility types）。
- Day 4: 完成 [Workshop week-06](../workshops/week-06/README.md)。
- Day 5: 完成 [Assignment week-06](../assignments/week-06/README.md)。

## Cline 協作模板

```text
請比較我目前的型別建模：
A. 直接使用 backend payload
B. 使用 DTO + mapper + ApiResult
請從維護成本、重構風險、測試可行性三個角度比較。
```

## 本週實作

- Workshop: [week-06](../workshops/week-06/README.md)
- Assignment: [week-06](../assignments/week-06/README.md)
- Rubric: [week-06](../rubrics/week-06.md)

## 完成定義

- 能建立可復用 API 契約型別。
- 能用 DTO 映射隔離上游變動。


## 常見錯誤示例（Wrong vs Right）

- Wrong: 前端直接依賴 upstream payload 欄位。
- Right: 經過 mapper 轉成穩定 DTO，成功與失敗都用契約型別。

## 章節練習（不看答案先做）

1. 請建立 `ApiResult<T>` 並套用至少兩種資料模型。
2. 請做一個 DTO mapper，把 upstream payload 轉成前端模型。
3. 請做錯誤契約表（error code -> UI 行為）。

## 提示（卡住再看）

1. 先做可讀版本，再做 generic 抽象。
2. UI 不直接依賴 upstream 欄位命名。
3. 錯誤路徑跟成功路徑都要有型別。

## 交付證據清單（提交前自查）

建議模板：[chapter-evidence-template](../templates/learner-ops/chapter-evidence-template.md)

- `ApiResult<T>` 與實際使用範例。
- mapper 前後資料對照表。
- `notes/week-06` 契約與錯誤模型說明。

## 延伸閱讀（遇到進階需求再看）

- TS Generics: <https://www.typescriptlang.org/docs/handbook/2/generics.html>
- TS Utility Types: <https://www.typescriptlang.org/docs/handbook/utility-types.html>
