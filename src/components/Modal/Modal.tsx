import { taskDB } from "../../types/taskDB";
import { ModalType } from "../../types/types";
import styles from "./Modal.module.css";
import { useState } from "react";

/**
 * モーダルウィンドウのコンポーネント
 * @param param0
 * @returns
 */
function Modal({
  taskId,
  taskName,
  taskSummary,
  taskDetail,
  taskGoal,
  taskCategory,
  taskDeadline,
  handleCloseClick,
}: ModalType): React.ReactElement {
  // 日付データを表示用の文字列型に変更
  const dateToString = taskDeadline.toISOString().slice(0, 16);

  const [id, setId] = useState<number | undefined>(taskId);
  console.log(dateToString);
  const [name, setName] = useState<string>(taskName);
  const [summary, setSummary] = useState<string>(taskSummary);
  const [detail, setDetail] = useState<string>(taskDetail);
  const [goal, setGoal] = useState<string>(taskGoal);
  const [category, setCategory] = useState<string>(taskCategory);
  const [deadline, setDeadline] = useState<string>(dateToString);

  /**
   * テキストエリアの値(name)が変更された際に実行される関数
   */
  const handleName = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setName(e.target.value);
  };

  /**
   * テキストエリアの値(summary)が変更された際に実行される関数
   */
  const handleSummary = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSummary(e.target.value);
  };

  /**
   * テキストエリアの値(detail)が変更された際に実行される関数
   */
  const handleDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetail(e.target.value);
  };

  const handleGoal = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setGoal(e.target.value);
  };

  const handleCategory = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCategory(e.target.value);
  };

  const handleDeadline = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeadline(e.target.value);
  };

  /**
   * idに紐づいたIndexedDBの情報を更新する関数
   */
  const updateTasks = async (): Promise<void> => {
    // DB登録前に日付型に変更
    const stringToDate = new Date(deadline);
    await taskDB.tasks.put({
      id: id,
      taskName: name,
      taskSummary: summary,
      taskDetail: detail,
      taskGoal: goal,
      taskCategory: category,
      taskDeadline: stringToDate,
    });
    handleCloseClick();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div>
          <p>タスク名</p>
          <textarea
            value={name}
            className={styles.textAreaDesign}
            onChange={handleName}
          ></textarea>
        </div>
        <div>
          <p>タスク概要</p>
          <textarea
            value={summary}
            className={styles.textAreaDesign}
            onChange={handleSummary}
          ></textarea>
        </div>
        <div>
          <p>タスクの詳細</p>
          <textarea
            value={detail}
            className={styles.textAreaDesign}
            onChange={handleDetail}
          ></textarea>
        </div>
        <div>
          <p>タスクの目標</p>
          <textarea
            value={goal}
            className={styles.textAreaDesign}
            onChange={handleGoal}
          ></textarea>
        </div>
        <div>
          <p>カテゴリー</p>
          <textarea
            value={category}
            className={styles.textAreaDesign}
            onChange={handleCategory}
          ></textarea>
        </div>
        <div>
          <p>締め切り</p>
          <input
            type="datetime-local"
            value={deadline}
            onChange={handleDeadline}
          ></input>
        </div>
        <div className={styles.buttonArea}>
          <div>
            <button type="button" onClick={handleCloseClick}>
              閉じる
            </button>
          </div>
          <div>
            <button type="button" onClick={updateTasks}>
              更新
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
