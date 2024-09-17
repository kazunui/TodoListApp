import React from "react";

import TodoListTopPage from "./components/TodoListTopPage/TodoListTopPage";
import "./App.css";

/**
 * アプリケーション全体を囲むコンポーネント
 * @returns HTML要素
 */
function App(): React.ReactElement {
  return (
    <div className="App">
      <TodoListTopPage />
    </div>
  );
}

export default App;
