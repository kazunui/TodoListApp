import styles from "../TodoListHeader/TodoListHeader.module.css";

/**
 * ヘッダーを表示するためのコンポーネント
 * @returns TodoListHeaderのHTML要素
 */
function TodoListHeader(): React.ReactElement {
  return (
    <header className={styles.headerArea}>
      <h2 className={styles.label}>Todo List Application</h2>
    </header>
  );
}

export default TodoListHeader;
