# Week 00 - 自學者開場（先把學習系統跑起來）

## 這一週要解決的問題

- 我不知道從哪開始。
- 我照著做但不知道是否做對。
- 我卡住時只會一直看文件，進度變慢。

## 2 小時完成開場（照順序做）

1. 建立工作分支：`git checkout -b study/week-00`
2. 建立學習資料夾：`mkdir -p notes evidence`
3. 建立日誌模板：`notes/day-template.md`
4. 打開兩份指引：
   - [../workshops/START_HERE.md](../workshops/START_HERE.md)
   - [../assignments/START_HERE.md](../assignments/START_HERE.md)
5. 開一份「卡關紀錄檔」：`notes/blockers.md`

## 你每天只做這個循環（固定 150 分鐘）

1. `20 分鐘`：讀當週 Day N Tutorial（只看本週，不跳其他週）
2. `90 分鐘`：按 `Step 1 -> Step 2 -> Step 3 -> Step 4` 實作
3. `20 分鐘`：把證據寫進 `notes/week-XX-day-N.md`
4. `20 分鐘`：回顧卡點，更新 `notes/blockers.md`

## 卡住決策樹（ASCII）

```text
卡住 > 10 分鐘?
  |-- 否 -> 繼續做當天 Step
  |
  |-- 是 -> 先寫重現三行(預期/實際/步驟)
           -> 問 Cline: 最小重現 + 第一個檢查點
           -> 還卡住? 查 START_HERE 的對應排查清單
           -> 仍卡住? 記錄 blocker 並先做可平行任務
```

## Cline 最小可用提問模板

1. `請先重述需求，列出 3 個可驗收條件，再給我最小實作步驟。`
2. `請只給第一步，並告訴我完成後應該看到什麼結果。`
3. `這個錯誤請先給最小重現，不要直接重寫整個檔案。`
4. `請列出你建議中最可能錯的 3 點，我要人工驗證。`

## 每天結束前的過關線

1. 今天 Day N 的 `Step 4（產出）` 已完成。
2. 至少有 1 份可驗收證據（截圖、測試結果、diff）。
3. 至少有 1 筆卡關紀錄（你如何解決、下次怎麼避免）。

## 開始 Week 01

- 進入 [week-01.md](week-01.md)，從 `Tutorial（一步一步照著做）` 開始。
