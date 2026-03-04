# Workshop Start Here

這份文件的目的是讓你每次打開 workshop 就能在 10 分鐘內開始動手，而不是卡在「不知道先做什麼」。

如果你只想看最短版本，先看：`../LEARNER_ONE_PAGE_SOP.md`

## Start Checklist

每次開始前先完成這 8 步：

1. 讀 `Problem`，用一句話寫下你要交付的結果。
2. 讀 `Scope`，把需求拆成 3-5 個小里程碑。
3. 讀 `Constraints`，把「不能做的事」列成清單貼在旁邊。
4. 讀 `Acceptance Criteria`，轉成可驗證 checklist。
5. 建立工作檔（`notes.md` / `todo.md`）。
6. 用 Cline 產出「最小可行方案」而非完整大改。
7. 先做最小版本（happy path），再補錯誤處理。
8. 每完成一個里程碑就立即驗證，不要一次做完再測。

## 90-Minute Execution Loop

當你不確定進度時，直接套用這個節奏：

- 15 分鐘：釐清需求 + 寫驗收清單
- 30 分鐘：做最小可行版本
- 20 分鐘：補錯誤與邊界情境
- 15 分鐘：自測 + 記錄問題
- 10 分鐘：用 Cline 做 reviewer 式檢查

## Troubleshooting Flow（卡關處理流程）

### Step 1: 先分類問題

- 類型 A：看不懂題目/不知道從哪裡開始
- 類型 B：程式可跑但行為不對
- 類型 C：出現錯誤訊息（編譯/執行/網路）
- 類型 D：不知道怎麼驗證是否完成

### Step 2: 15 分鐘自救規則

1. 寫下「預期行為 vs 實際行為」。
2. 最小重現（只保留會出錯的最小片段）。
3. 看 console/network/test output 的第一個錯誤。
4. 僅修改一個變數後再驗證（避免同時改太多）。

### Step 3: 用 Cline 求助（有格式）

把以下模板貼給 Cline：

```text
I am stuck in this workshop.

Workshop:
<week + name>

Expected behavior:
<what should happen>

Actual behavior:
<what happened>

Error message/log:
<exact error>

Relevant code:
<smallest reproducible snippet>

Please give:
1) most likely root cause (top 3)
2) quickest verification steps
3) minimal fix
4) regression checks
```

### Step 4: 人工審查 Cline 回覆

- 建議是否直接對應你的錯誤訊息？
- 有沒有要求你做過度重構？
- 有沒有忽略 `Constraints`？
- 有沒有破壞安全規範（特別是 auth/token）？

## 常見卡點與對策

1. 不知道先做哪個功能
- 先做最小 happy path，再逐步補錯誤與邊界。

2. 一次改太多導致更亂
- 回到最小可重現，單一變更單一驗證。

3. Cline 給了很大一包建議
- 要求它「只給最小修復版本」。

4. 驗收標準看不懂
- 把每條 acceptance 改寫成「可觀察行為」後再實作。

## 完成前最後檢查

- [ ] Scope 全部完成
- [ ] Constraints 沒有違反
- [ ] Acceptance Criteria 全部可驗證
- [ ] 已記錄至少 1 個風險與處理方式
- [ ] 已完成 Cline 回覆審查

## 你可以直接用的入口

- Prompt 模板：`../templates/cline-prompts/workshop-execution.md`
- 審查清單：`../templates/review-checklists/cline-response-review.md`
- 每日站會：`../templates/learner-ops/daily-standup-template.md`
- 卡關升級：`../templates/learner-ops/blocker-escalation-template.md`
- 工作紀錄：`../templates/learner-ops/work-session-log-template.md`
