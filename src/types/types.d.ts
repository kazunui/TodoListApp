import { tasks } from "./taskDB";

/**
 * InputRegisterAreaコンポーネントのpropsを定義する型
 * @property {string}task タスクの名称
 * @property {Function} setTask 入力されたタスクを管理するための関数
 * @property {Function} addTask タスクを追加するための関数(非同期)
 * @property {Function} deleteAllTask 全てのタスクを削除する関数(非同期)
 */
export type InputRegistAreaType = {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  addTask: (taskName: string) => Promise<void>;
  deleteAllTask: () => Promise<void>;
};

/**
 * Buttonコンポーネントのpropsを定義する型
 * ButtonTypeは追加用ボタン、削除ボタンでも使用するため
 * ?(オプショナル)を設定
 *
 * @property {string} task タスクの名称
 * @property {number} taskId タスクのid(一意)
 * @property {Function} addTask タスクを追加するための関数(非同期)
 * @property {Function} deleteTask 選択したタスクを削除するための関数(非同期)
 * @property {Function} deleteAllTask 全てのタスクを削除するための関数(非同期)
 * @property {boolean} isAllDelete 全てのタスクを削除するモードか否かのフラグ
 * @property {boolean} isDelete 特定のタスクを削除するモードか否かのフラグ
 */
export type ButtonType = {
  task?: string;
  taskId?: number;
  addTask?: (task) => Promise<void>;
  deleteTask?: (id: number) => Promise<void>;
  deleteAllTask?: () => Promise<void>;
  isAllDelete?: boolean;
  isDelete?: boolean;
};

/**
 * TaskAreaコンポーネントのpropsを定義する型
 * @property {string} task タスクの名称
 * @property {Function} onChange 入力されたタスクの変更を受け取るための関数
 */
export type TaskAreaType = {
  task?: string;
  onChange: (value: string) => void;
};

/**
 * TaskListAreaコンポーネントのpropsを定義する型
 * @property {tasks[]} tasks IndexedDBが持っているデータの型
 */
export type TaskListAreaType = {
  tasks: tasks[];
};

/**
 * TaskListコンポーネントのpropsを定義する型
 * @property {tasks[]} tasks IndexedDBが持っているデータの型
 */
export type TaskListType = {
  tasks: tasks[];
};

/** Taskコンポーネントのpropsを定義する型
 * @property {number} taskId タスクのid(一意)
 * @property {string} taskName タスクの名前
 * @property {string} taskSummary タスクの概要
 * @property {string} taskDetail タスクの詳細
 * @property {string} taskGoal タスクの目標
 * @property {string} taskCategory タスクのカテゴリー
 * @property {Date} taskDeadline タスクの期限
 */
export type TaskType = {
  taskId?: number;
  taskName: string;
  taskSummary: string;
  taskDetail: string;
  taskGoal: string;
  taskCategory: string;
  taskDeadline: Date;
};

/**
 * Modalコンポーネントのpropsを定義する型
 * @property {number} taskId タスクのid(一意)
 * @property {string} taskName タスクの名前
 * @property {string} taskSummary タスクの概要
 * @property {string} taskDetail タスクの詳細
 * @property {string} taskGoal タスクの目標
 * @property {string} taskCategory タスクのカテゴリー
 * @property {Date} taskDeadline タスクの期限
 * @property {Function} handleCloseClick モーダルを閉じるための関数
 */
export type ModalType = {
  taskId?: number;
  taskName: string;
  taskSummary: string;
  taskDetail: string;
  taskGoal: string;
  taskCategory: string;
  taskDeadline: Date;
  handleCloseClick: () => void;
};
