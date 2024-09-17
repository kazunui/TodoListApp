import { useLiveQuery } from "dexie-react-hooks";
import { taskDB } from "../../types/taskDB";

import TodoListHeader from "../commons/TodoListHeader/TodoListHeader";
import TaskInputArea from "../TaskInputArea/TaskInputArea";
import TaskListArea from "../TaskListArea/TaskListArea";

/**
 * ヘッダー、タスクの入力エリア、タスクの一覧を表示するためのエリアを包括するコンポーネント
 * @returns ヘッダー、入力エリア、タスクリストのエリアのHTML要素
 */
function TodoListTopPage() {
  // IndexedDBにアクセスし、タスクの一覧情報を取得
  const tasks = useLiveQuery(() => taskDB.tasks.toArray()) || [];

  return (
    <div>
      <TodoListHeader />
      <TaskInputArea />
      <TaskListArea tasks={tasks} />
    </div>
  );
}

export default TodoListTopPage;
