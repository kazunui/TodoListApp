import styles from "../TaskInputArea/TaskInputArea.module.css";
import TaskList from "./TaskList/TaskList";
import { TaskListAreaType } from "../../types/types";

/**
 * IndexedDBから取得したデータを表示する領域のコンポーネント
 * @param {tasks[]} param0.tasks  IndexedDBから取得したデータ
 * @returns TaskLinstAreaのコンポーネント要素
 */
function TaskListArea({ tasks }: TaskListAreaType): React.ReactElement {
  return (
    <div className={styles.taskListArea}>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default TaskListArea;
