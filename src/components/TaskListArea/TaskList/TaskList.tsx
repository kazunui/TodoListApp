import { TaskListType } from "../../../types/types";
import styles from "./TaskList.module.css";
import Task from "./Task/Task";

/**
 * IndexedDBから取得したデータをリストで表示するためのコンポーネント
 * @param {tasks[]} param0.tasks  IndexedDBから取得したデータ
 * @returns TaskListのHTML要素
 */
function TaskList({ tasks }: TaskListType): React.ReactElement {
  return (
    <div>
      <ul className={styles.uldesign}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            taskId={task.id}
            taskName={task.taskName}
            taskSummary={task.taskSummary}
            taskDetail={task.taskDetail}
            taskGoal={task.taskGoal}
            taskCategory={task.taskCategory}
            taskDeadline={task.taskDeadline}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
