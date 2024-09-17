import styles from "../TaskArea/TaskArea.module.css";
import { TaskAreaType } from "../../../types/types";

/**
 * タスクを入力するためのコンポーネント
 * @param {TaskAreaType} param0.task タスクの名称(onChangeで検知)
 * @returns TaskAreaのhtml要素
 */
function TaskArea({ task, onChange }: TaskAreaType): React.ReactElement {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className={styles.inputSize}
        value={task}
        onChange={handleChange}
      />
    </div>
  );
}
export default TaskArea;
