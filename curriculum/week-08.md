# Week 08 - React 架構化實戰：表單、資料流、可測試性（Chapter 8）

## 章節導讀

這一章把你從單頁練習推進到「可交付 feature」。

你會學到：
1. feature 分層（UI / hooks / services / types）。
2. 表單驗證與錯誤處理策略。
3. 讓元件天生可測（不是最後才補測試）。

## 0 基礎詞彙

- `Feature folder`: 以功能切資料夾。
- `Service layer`: API 呼叫與資料轉換層。
- `Custom hook`: 可重用的狀態邏輯。
- `Testability`: 程式碼容易驗證與定位問題的程度。

## 架構圖（ASCII）

```text
UI Components
   <-> useFeatureHook
   <-> Service (API/mapper)
   <-> Types (DTO/contracts)
```

Mermaid source: [week-08-feature-layering.mmd](../assets/diagrams/week-08-feature-layering.mmd)

## 核心知識（像書一樣讀）

### 1. 分層不是為了漂亮，是為了改得動

- UI 層：只管呈現與事件。
- Hook 層：管狀態、流程。
- Service 層：管 API、資料映射。

### 2. 表單最常見失敗點

1. 驗證規則散落多處。
2. 錯誤訊息格式不一致。
3. 提交時沒有 loading/disabled 保護。

### 3. 可測試性先於測試框架

先讓邏輯可拆、可預測，再談 Jest/RTL。

## Code-Along（逐步照做）

### Step 0 - 建立 feature 結構

以 `week-07` 專案為基礎：

```bash
cd playground/week-07-react
mkdir -p src/features/profile/{components,hooks,services,types}
```

### Step 1 - 建立型別與 service

建立 `src/features/profile/types/profile.ts`：

```ts
export type ProfileForm = {
  name: string;
  email: string;
};

export type ProfileSaveResult =
  | { ok: true }
  | { ok: false; message: string };
```

建立 `src/features/profile/services/profileService.ts`：

```ts
import type { ProfileForm, ProfileSaveResult } from "../types/profile";

export async function saveProfile(input: ProfileForm): Promise<ProfileSaveResult> {
  await new Promise((r) => setTimeout(r, 500));

  if (!input.email.includes("@")) {
    return { ok: false, message: "Email 格式錯誤" };
  }

  return { ok: true };
}
```

### Step 2 - 建立 hook 管流程

建立 `src/features/profile/hooks/useProfileForm.ts`：

```ts
import { useState } from "react";
import { saveProfile } from "../services/profileService";
import type { ProfileForm } from "../types/profile";

const initial: ProfileForm = { name: "", email: "" };

export function useProfileForm() {
  const [form, setForm] = useState<ProfileForm>(initial);
  const [error, setError] = useState<string>("");
  const [saving, setSaving] = useState(false);

  async function submit() {
    setSaving(true);
    setError("");

    const result = await saveProfile(form);

    if (!result.ok) {
      setError(result.message);
      setSaving(false);
      return;
    }

    setSaving(false);
  }

  return { form, setForm, error, saving, submit };
}
```

### Step 3 - 建立 UI 元件

建立 `src/features/profile/components/ProfileForm.tsx`：

```tsx
import { useProfileForm } from "../hooks/useProfileForm";

export function ProfileForm() {
  const { form, setForm, error, saving, submit } = useProfileForm();

  return (
    <section>
      <h2>Profile Form</h2>
      <label>
        Name
        <input
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
        />
      </label>
      <label>
        Email
        <input
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
        />
      </label>
      {error ? <p style={{ color: "crimson" }}>{error}</p> : null}
      <button onClick={submit} disabled={saving}>
        {saving ? "Saving..." : "Save"}
      </button>
    </section>
  );
}
```

把 `App.tsx` 改成只 render 這個 feature。

### Step 4 - 驗收

1. 錯誤 email 要顯示錯誤文字。
2. 送出時按鈕顯示 `Saving...`。
3. 邏輯不寫在 UI 元件內（集中在 hook/service）。

## 可測試性圖（ASCII）

```text
Input event
  -> hook state transition
  -> service call
  -> ui reflects loading/error/success
```

## 常見錯誤與排查

1. UI 直接呼叫 fetch：
- 問題：難測、難替換。
- 修正：移到 service。

2. 驗證散在 onChange/onSubmit：
- 問題：規則重複。
- 修正：集中在 hook 或 validator。

3. 沒有 loading 狀態：
- 問題：重複提交。
- 修正：提交時 disable 按鈕。

## 本週 5 天節奏（章節閱讀 + 實作）

- Day 1: 讀核心知識 + 完成 Step 0。
- Day 2: 完成 Step 1~2（types/service/hook）。
- Day 3: 完成 Step 3~4（UI + 驗收）。
- Day 4: 完成 [Workshop week-08](../workshops/week-08/README.md)。
- Day 5: 完成 [Assignment week-08](../assignments/week-08/README.md)。

## Cline 協作模板

```text
我正在做 React feature 分層。
請你先 review 我的資料夾與責任切分，格式如下：
1) 過度耦合點
2) 可重構點
3) 最小改動建議
```

## 本週實作

- Workshop: [week-08](../workshops/week-08/README.md)
- Assignment: [week-08](../assignments/week-08/README.md)
- Rubric: [week-08](../rubrics/week-08.md)

## 完成定義

- 能交付一個分層清楚、可驗證的 React feature。
- 能用清楚文件說明你的分層決策。


## 常見錯誤示例（Wrong vs Right）

- Wrong: UI 元件直接呼叫 API 並混商業規則。
- Right: UI 只觸發 hook，API 在 service 層。

```tsx
// Wrong (inside component)
async function onSubmit() {
  const res = await fetch("/api/profile", { method: "POST" });
  if (!res.ok) setError("Save failed");
}

// Right
// component -> useProfileForm.submit()
// useProfileForm -> profileService.saveProfile()
```

## 章節練習（不看答案先做）

1. 請把一個表單功能拆成 `components/hooks/services/types`。
2. 請證明 UI 層不直接呼叫 API。
3. 請設計 3 個測試案例（happy/error/edge）。

## 提示（卡住再看）

1. UI 只處理輸入與顯示，流程放 hook。
2. API 呼叫與映射放 service。
3. 先列 test cases，再寫測試或實作。

## 交付證據清單（提交前自查）

建議模板：[chapter-evidence-template](../templates/learner-ops/chapter-evidence-template.md)

- 分層目錄與責任說明。
- 至少一個 error path 演示。
- 測試案例清單與對應實作狀態。

## 延伸閱讀（遇到進階需求再看）

- React forms: <https://react.dev/reference/react-dom/components/input>
- Testing Library intro: <https://testing-library.com/docs/react-testing-library/intro/>
