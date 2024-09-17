import TaskArea from "../../commons/TaskArea/TaskArea";
import Button from "../../commons/Button/Button";
import styles from "../InputRegistTaskArea/InputRegistTaskArea.module.css";
import { InputRegistAreaType } from "../../../types/types";
import { useState } from "react";

function InputRegistTaskArea({
  task,
  setTask,
  deleteAllTask,
  addTask,
}: InputRegistAreaType): React.ReactElement {
  const [isAllDelete, setIsAllDelete] = useState(true);

  const handleInputChange = (value: string) => {
    setTask(value);
  };

  return (
    <div className={styles.registTaskArea}>
      <TaskArea task={task} onChange={handleInputChange} />
      <Button addTask={() => addTask(task)} task={task} />
      <Button deleteAllTask={() => deleteAllTask()} isAllDelete={isAllDelete} />
    </div>
  );
}

export default InputRegistTaskArea;
