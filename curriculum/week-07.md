# Week 07 - React 核心：元件、狀態、事件、Effect（Chapter 7）

## 章節導讀

這一章會讓你把 UI 思維從「事件觸發元件」轉成「狀態驅動畫面」。

你會學到：
1. 元件拆分與 props 傳遞。
2. state 與事件更新。
3. effect 的正確使用時機。

## 0 基礎詞彙

- `Component`: 可重用 UI 單位。
- `Props`: 父傳子的輸入資料。
- `State`: 元件內可變資料。
- `Effect`: 與外部系統同步（例如 API、訂閱）。

## React 資料流圖（ASCII）

```text
State change
  -> React re-render
  -> UI updates
  -> User action
  -> setState
```

## 核心知識（像書一樣讀）

### 1. 先設計 state，再寫 JSX

你先回答：
1. 有哪些狀態？
2. 誰負責修改？
3. 哪些是 derived，不需要重複存？

### 2. props 是資料流，不是隨便傳

資料流不清楚，後續 debug 成本會非常高。

### 3. Effect 不是「任何邏輯都塞」

Effect 用於同步外部系統；純計算應該留在 render 或函式內。

## Code-Along（逐步照做）

### Step 0 - 建立 React 練習專案（Vite）

```bash
npm create vite@latest playground/week-07-react -- --template react-ts
cd playground/week-07-react
npm install
npm run dev
```

### Step 1 - 建立可控表單元件

把 `src/App.tsx` 改成：

```tsx
import { useState } from "react";

type Todo = { id: number; title: string; done: boolean };

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo() {
    if (!input.trim()) return;

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), title: input.trim(), done: false },
    ]);
    setInput("");
  }

  function toggleTodo(id: number) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  return (
    <main style={{ maxWidth: 560, margin: "24px auto", fontFamily: "sans-serif" }}>
      <h1>Week 07 React Todo</h1>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="輸入待辦"
        />
        <button onClick={addTodo}>新增</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
              />
              <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
                {todo.title}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </main>
  );
}
```

### Step 2 - 增加 Effect 同步（localStorage）

在 `App` 內增加：

```tsx
import { useEffect } from "react";

useEffect(() => {
  localStorage.setItem("week07_todos", JSON.stringify(todos));
}, [todos]);
```

並在初始 state 讀取：

```tsx
const [todos, setTodos] = useState<Todo[]>(() => {
  const raw = localStorage.getItem("week07_todos");
  return raw ? (JSON.parse(raw) as Todo[]) : [];
});
```

### Step 3 - 驗收

1. 能新增 todo。
2. 能切換 done。
3. 重整後資料仍在（effect 同步成功）。

### Step 4 - 寫 state 設計說明

建立 `notes/week-07-state-design.md`：
- 哪些是 state？
- 哪些可由 state 推導？
- 哪個 effect 是必要？

## 常見錯誤與排查

1. 直接改陣列元素：
- 問題：React 不一定重渲染。
- 修正：永遠回傳新陣列。

2. effect 缺依賴：
- 問題：資料不同步。
- 修正：依賴陣列完整列出。

3. state 重複儲存：
- 問題：資料不一致。
- 修正：單一真實來源。

## 本週 5 天節奏（章節閱讀 + 實作）

- Day 1: 讀核心知識 + 完成 Step 0。
- Day 2: 完成 Step 1（state/event）。
- Day 3: 完成 Step 2~4（effect + 設計說明）。
- Day 4: 完成 [Workshop week-07](../workshops/week-07/README.md)。
- Day 5: 完成 [Assignment week-07](../assignments/week-07/README.md)。

## Cline 協作模板

```text
請先 review 我的 React state 設計，不要先改 JSX。
請列出：
1) 哪些 state 可能重複
2) 哪些 effect 不必要
3) 最小重構建議（3 點）
```

## 本週實作

- Workshop: [week-07](../workshops/week-07/README.md)
- Assignment: [week-07](../assignments/week-07/README.md)
- Rubric: [week-07](../rubrics/week-07.md)

## 完成定義

- 能交付有 state/event/effect 的 React 功能頁。
- 能解釋每個 effect 的存在理由。


## 常見錯誤示例（Wrong vs Right）

- Wrong: 把可推導資料也存成 state，導致不一致。
- Right: 保持單一真實來源，effect 只做外部同步。

## 章節練習（不看答案先做）

1. 請畫出你的 state 表（欄位、修改者、觸發事件）。
2. 請找一個 state duplication 問題並重構。
3. 請評估目前 effect：哪些必要、哪些可移除。

## 提示（卡住再看）

1. 能由現有 state 推導的值，不要再存一次。
2. effect 只做外部同步，不做純運算。
3. 更新集合時優先用不可變更新。

## 交付證據清單（提交前自查）

建議模板：[chapter-evidence-template](../templates/learner-ops/chapter-evidence-template.md)

- `notes/week-07-state-design.md`。
- 一次重構前後對照（diff 或說明）。
- effect 審查結論（保留/刪除理由）。

## 延伸閱讀（遇到進階需求再看）

- React Learn: <https://react.dev/learn>
- React Managing State: <https://react.dev/learn/managing-state>
