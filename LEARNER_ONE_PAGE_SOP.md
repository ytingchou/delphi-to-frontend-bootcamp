# Learner One-Page SOP（開工與卡關速查卡）

目標：每次開始 workshop/assignment，不再卡在「現在要做什麼」。

## 1. 開工前 10 分鐘（必做）

1. 寫一句話：這次要交付什麼。
2. 寫 3-5 個里程碑（每個 30-60 分鐘內可完成）。
3. 列出 constraints（不能做什麼）。
4. 把 acceptance criteria 轉成勾選清單。
5. 先做最小版本（能跑、可驗證）。

## 2. 標準執行節奏（90 分鐘）

- 15m：釐清需求與驗收
- 30m：最小可行實作
- 20m：補錯誤/邊界情境
- 15m：自測與修正
- 10m：Cline reviewer 檢查

## 3. 卡關升級流程（15-30 分鐘）

```text
卡住 -> 問題分類 -> 最小重現 -> 單點修正驗證
     -> 仍失敗 -> 給 Cline 結構化問題
     -> 人工審查建議 -> 套用最小修復 -> 回歸驗證
```

問題分類：
- 題意不清
- 設計不清
- 實作錯誤
- 驗證不清

## 4. 貼給 Cline 的最短模板

### Workshop 卡關模板

```text
I am stuck in workshop <week/name>.
Expected: <...>
Actual: <...>
Error: <exact message>
Code: <smallest snippet>
Give me: root causes(top3), fastest checks, minimal fix, regression checks.
```

### Assignment 卡關模板

```text
Act as strict tech lead. No full solution first.
Assignment: <week/name>
Current progress: <...>
Blocked on: <...>
Unmet criteria: <...>
Give: 3 diagnosis questions, next milestone, targeted hint, validation steps.
```

## 5. 人工審查紅線（不要盲從 Cline）

- 建議是否符合本週 constraints？
- 是否要求過度重構？
- 是否忽略錯誤路徑與測試？
- 是否碰到 auth/token/security 風險？

## 6. 完成定義（提交前）

- [ ] Required output 齊全
- [ ] Acceptance criteria 全部可驗證
- [ ] 至少一次 Cline review + 人工審核
- [ ] 記錄 1 個風險與對策

## 7. 入口連結

- Workshop 詳版：`workshops/START_HERE.md`
- Assignment 詳版：`assignments/START_HERE.md`
- Cline 操作：`CLINE_PLAYBOOK.md`
- 日常模板：`templates/learner-ops/`
