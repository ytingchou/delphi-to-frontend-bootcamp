# Assignment Start Here

這份文件讓你在 assignment 不會卡在「不知道怎麼起手」，並且在遇到問題時有固定的處理流程。

如果你只想看最短版本，先看：`../LEARNER_ONE_PAGE_SOP.md`

## Start Checklist

每次開始 assignment 先做這 7 步：

1. 讀 `Task`，寫一句「本次要交付什麼」。
2. 讀 `Required Output`，先建立要交付的檔案清單。
3. 讀 `Expected Solution Shape`，提煉 3-5 個品質標準。
4. 先設計驗證方式（如何證明你做到了）。
5. 拆成里程碑：M1 基礎、M2 完整、M3 品質強化。
6. 用 Cline 做計畫審查，不要直接要完整答案。
7. 先做 M1，確保「可跑 + 可驗證」。

## 建議執行順序

1. 需求理解與交付規格（20% 時間）
2. 核心實作（50% 時間）
3. 測試與修正（20% 時間）
4. 文件與提交包裝（10% 時間）

## Troubleshooting Flow（卡關處理流程）

### Step 1: 確認你卡在哪一層

- 題意層：看不懂作業目標
- 設計層：不知道怎麼切模組/資料流
- 實作層：程式錯誤或行為不對
- 驗證層：不知道怎麼證明完成

### Step 2: 問題縮小（10-15 分鐘）

1. 用一句話描述問題。
2. 提供最小可重現片段。
3. 指出你已嘗試過的 2-3 種做法。
4. 說明哪個 acceptance 條件還沒過。

### Step 3: 用 Cline 當教練，不是代寫

把以下模板貼給 Cline：

```text
Act as a strict tech lead.
Do not give full final solution first.

Assignment:
<week + name>

What I already implemented:
<summary>

What is failing:
<issue>

Acceptance criteria not yet met:
<criteria>

Please give:
1) diagnosis questions (max 3)
2) next smallest milestone
3) targeted hint (not full answer)
4) validation steps
```

### Step 4: 驗證與提交

- 每修一個問題就重跑一次驗證。
- 完成後再讓 Cline 做 reviewer 視角檢查。
- 最後由你人工決定保留哪些建議。

## 常見卡點與對策

1. 題目很大，不知道怎麼拆
- 先拆到「30-60 分鐘可完成」的小里程碑。

2. Cline 回答看起來很厲害但不適用
- 強制它基於你的檔案與限制重答。

3. 功能完成但不知道算不算達標
- 對照 `Expected Solution Shape` 和 rubric 逐條驗證。

4. 害怕交出去品質不夠
- 先跑 `delivery-readiness` checklist，再提交。

## 提交前自檢

- [ ] Required Output 全部齊全
- [ ] Expected Solution Shape 逐條達成
- [ ] 至少一輪 Cline review + 人工審核完成
- [ ] 風險與限制有在文件中說明

## 你可以直接用的入口

- Prompt 模板：`../templates/cline-prompts/assignment-coach.md`
- PR 審查模板：`../templates/cline-prompts/pr-review.md`
- 交付檢查清單：`../templates/review-checklists/delivery-readiness.md`
- 每日站會：`../templates/learner-ops/daily-standup-template.md`
- 卡關升級：`../templates/learner-ops/blocker-escalation-template.md`
- 每週回顧：`../templates/learner-ops/weekly-review-template.md`
