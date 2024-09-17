import styles from "../Button/Button.module.css";
import { ButtonType } from "../../../types/types";

function Button({
  taskId,
  task,
  deleteTask,
  addTask,
  deleteAllTask,
  isAllDelete,
}: ButtonType): React.ReactElement {
  /**
   * 条件によって、ボタンのデザインを返却するCSS
   * @returns
   */
  const getButtonStyle = (): string => {
    if (taskId !== undefined) {
      return styles.deleteButtonDesign;
    } else if (isAllDelete) {
      return styles.deleteAllButtonDesign;
    }
    return styles.addButtonDesign;
  };

  // 状態によってどのcssを適用するかを管理する変数
  const buttonStyle = getButtonStyle();

  // 条件によってIndexedDBに対して実行する関数を分岐
  const handleClick = () => {
    try {
      if (isAllDelete && deleteAllTask) {
        deleteAllTask();
      } else if (taskId !== undefined && deleteTask) {
        deleteTask(taskId);
      } else if (addTask) {
        addTask(task);
      }
    } catch (error) {
      console.error("Error executing button action:", error);
    }
  };

  return (
    <div className={styles.buttonArea}>
      <button className={buttonStyle} onClick={handleClick}>
        {isAllDelete && `全削除`}
        {taskId && `削除`}
        {addTask && `追加`}
      </button>
    </div>
  );
}
export default Button;
