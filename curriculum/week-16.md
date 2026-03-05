# Week 16 - Capstone：企業後台交付演練（Chapter 16）

## 章節導讀

最後一章是交付整合。你要在有限時間做出可 demo、可測、可維運的成果。

你會整合：
1. Next.js App Router + RSC。
2. BFF route handlers。
3. Auth.js + Keycloak OIDC。
4. ESLint + Jest 品質閘。

## 0 基礎詞彙

- `Scope freeze`: 功能範圍凍結。
- `PR narrative`: 交付敘事（需求、方案、風險、驗證）。
- `Handover`: 交接文件。
- `Rollback plan`: 回滾方案。

## 專案整合圖（ASCII）

```text
UI (RSC + Client islands)
  -> Next.js BFF routes
  -> Backend APIs
Auth
  -> Auth.js + Keycloak
Quality
  -> ESLint + Jest + review checklist
Ops
  -> runbook + rollback plan
```

Mermaid source: [week-16-capstone-delivery.mmd](../assets/diagrams/week-16-capstone-delivery.mmd)

## 核心知識（像書一樣讀）

### 1. 交付不是功能堆疊

最終評估是：
1. 功能是否可用。
2. 錯誤是否可處理。
3. 團隊是否可接手。

### 2. 時間有限時的策略

1. 先做主流程（happy path）。
2. 再補高風險錯誤路徑。
3. 最後補體驗與文件。

### 3. Cline 在 Capstone 的角色

Cline 用來加速拆解、除錯、審查；最終技術判斷仍由你負責。

## Code-Along（逐步照做）

### Step 0 - Scope Freeze

建立 `notes/week-16-scope.md`，列出：
1. Must-have（最多 5 項）。
2. Nice-to-have（可放棄）。
3. 每項驗收條件。

### Step 1 - 架構定稿

建立 `notes/week-16-architecture.md`，至少包含：
1. route tree。
2. RSC/client 邊界。
3. BFF endpoints。
4. auth flow。

### Step 2 - 實作核心流程

必達清單：
1. 登入/登出。
2. 一頁受保護 dashboard。
3. 至少 2 支 BFF endpoint。
4. 一組關鍵測試。

### Step 3 - 品質閘與風險修復

```bash
npm run lint
npm run test
```

修復所有 blocker，再更新 `notes/week-16-risk-log.md`。

### Step 4 - Demo 與交接包

建立 `notes/week-16-demo-script.md`：
1. 5 分鐘架構說明。
2. 10 分鐘功能演示。
3. 5 分鐘故障排查演示。

建立 `notes/week-16-handover.md`：
- 已知限制
- 回滾條件與步驟
- 下一步技術債清單

## Demo 評估圖（ASCII）

```text
Demo score = Functionality + Security + Test evidence + Operability
```

## 常見錯誤與排查

1. Scope 失控：
- 現象：做很多但都不完整。
- 修正：每天回到 must-have 驗收。

2. 文件最後才補：
- 現象：交接品質差。
- 修正：每天更新一點交付文件。

3. 只靠 Cline 不做人工驗證：
- 現象：隱性 bug 留下。
- 修正：關鍵路徑必手動驗證 + 證據。

## 本週 5 天節奏（章節閱讀 + 實作）

- Day 1: Scope freeze + 架構定稿。
- Day 2: 主流程功能完成。
- Day 3: Auth/BFF 錯誤路徑補齊。
- Day 4: lint/test/修復 + 文件收斂。
- Day 5: demo + retro + handover。

## Cline 協作模板

```text
請你幫我做 Capstone 交付前審查，
我需要三段輸出：
1) Blocking risks（必修）
2) Non-blocking improvements（可後續）
3) Demo 時最容易被問的 5 個技術問題
```

## 本週實作

- Workshop: [week-16](../workshops/week-16/README.md)
- Assignment: [week-16](../assignments/week-16/README.md)
- Rubric: [week-16](../rubrics/week-16.md)

## 完成定義

- 通過所有 rubric 門檻。
- 能進行 20 分鐘技術 demo + 10 分鐘問答。
- 能交付完整 handover 文件，讓團隊可接手。


## 常見錯誤示例（Wrong vs Right）

- Wrong: scope 持續擴大，交付不完整。
- Right: 先 freeze must-have，再逐日驗收。

```md
# Wrong
- Add feature A
- Add feature B
- Add feature C
(沒有驗收條件)

# Right
- Must-have A: 已可演示 + 有測試
- Must-have B: 已可演示 + 有回滾方案
- Nice-to-have C: 延後
```

## 章節練習（不看答案先做）

1. 請列出 capstone must-have 與對應驗收條件（範圍凍結）。
2. 請完成 demo script（架構、功能、故障處理、測試證據）。
3. 請完成 handover 文件（限制、風險、回滾、下一步）。

## 提示（卡住再看）

1. 每天先對齊 must-have，再做優化項。
2. 功能與文件同步前進，不要最後才補。
3. Cline 建議需人工驗證關鍵風險。

## 交付證據清單（提交前自查）

建議模板：[chapter-evidence-template](../templates/learner-ops/chapter-evidence-template.md)

- `notes/week-16-scope.md` 與 `notes/week-16-architecture.md`。
- lint/test 與風險修復紀錄。
- demo 與 handover 可直接交付的文件。

## 延伸閱讀（遇到進階需求再看）

- Next.js docs: <https://nextjs.org/docs/app>
- Auth.js docs: <https://authjs.dev/>
- Keycloak docs: <https://www.keycloak.org/documentation>
