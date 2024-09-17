import { TaskType } from "../../../../types/types";
import { createPortal } from "react-dom";
import styles from "./Task.module.css";
import Button from "../../../commons/Button/Button";
import { taskDB } from "../../../../types/taskDB";
import React, { useState, PropsWithChildren } from "react";
import Modal from "../../../Modal/Modal";
import ReactDOM from "react-dom";

/**
 * createPortalを使用してモーダルを階層に関係なく作成する関数
 * @param {PropsWithChildren} children createPortalで使用する要素
 * @returns
 */
const ModalPortal = ({ children }: PropsWithChildren) => {
  const target = document.querySelector(".container");
  if (!target) {
    console.error("modalAreaが存在しません");
    return null;
  }

  return ReactDOM.createPortal(children, target);
};

/**
 * Indexedから取得したデータを表示するためのコンポーネント
 * @param param0.taskId タスクのid(一意)
 * @param param0.taskName タスクの名前
 * @param param0.taskSummary タスクの概要
 * @param param0.taskDetail タスクの詳細
 * @param param0
 * @param param0
 * @param param0
 * @param param0
 * @param param0
 *
 * @returns
 */
function Task({
  taskId,
  taskName,
  taskSummary,
  taskDetail,
  taskGoal,
  taskCategory,
  taskDeadline,
}: TaskType): React.ReactElement {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  /**
   * 渡されたidのタスクをIndexedDBから削除する関数
   * @param id タスクのid
   */
  const deleteTask = async (id: number) => {
    try {
      await taskDB.tasks.delete(id);
    } catch (e) {
      console.log(`エラーメッセージ${e}`);
    }
  };

  return (
    <div>
      <div className={`${"container"} ${styles.container}`}></div>
      <li className={styles.lidesign} onClick={() => setModalOpen(true)}>
        {taskName}
        <div className={styles.lineInterval}>
          <Button taskId={taskId} deleteTask={deleteTask} />
        </div>
      </li>
      {modalOpen && (
        <ModalPortal>
          <Modal
            taskId={taskId}
            taskName={taskName}
            taskSummary={taskSummary}
            taskDetail={taskDetail}
            taskGoal={taskGoal}
            taskCategory={taskCategory}
            taskDeadline={taskDeadline}
            handleCloseClick={() => setModalOpen(false)}
          />
        </ModalPortal>
      )}
    </div>
  );
}

export default Task;
