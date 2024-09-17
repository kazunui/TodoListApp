import { useState } from "react";
import styles from "../TaskInputArea/TaskInputArea.module.css";
import InputRegistTaskArea from "./InputRegistTaskArea/InputRegistTaskArea";
import { taskDB } from "../../types/taskDB";

/**
 * タスクの入力フォームを表示するためのコンポーネント
 * @returns TaskInputAreaのHTML要素
 */
function TaskInputArea(): React.ReactElement {
  const [task, setTask] = useState<string>("");

  /**
   * タスクをIndexedDBに登録するための関数
   * @param task 入力されたタスク名
   */
  const addTask = async (task: string): Promise<void> => {
    // 現在の日時を生成
    const deadline = new Date();
    try {
      const _id = await taskDB.tasks.add({
        // taskName以外は仮の値を代入
        taskName: task,
        taskDeadline: deadline,
        taskGoal: "タスクの目標",
        taskDetail: "タスク仮詳細",
        taskSummary: "タスク仮概要",
        taskCategory: "カテゴリー",
      });
      setTask("");
    } catch (e) {
      console.log(`タスクの追加に失敗しました${e}`);
    }
  };

  /**
   * IndexedDBに登録された全てのタスクを削除する関数
   */
  const deleteAllTask = async (): Promise<void> => {
    try {
      await taskDB.tasks.clear();
    } catch (e) {
      console.log("データベースの削除失敗");
    }
  };

  return (
    <div className={styles.inputArea}>
      <InputRegistTaskArea
        task={task}
        setTask={setTask}
        addTask={addTask}
        deleteAllTask={deleteAllTask}
      />
    </div>
  );
}

export default TaskInputArea;
