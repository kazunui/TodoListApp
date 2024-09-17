import Dexie, { Table } from "dexie";

/**
 * Dexies(IndexedDBのラッパークラス)の型宣言を行うためのファイル
 */
export interface tasks {
  id?: number;
  taskName: string;
  taskSummary: string;
  taskDetail: string;
  taskGoal: string;
  taskCategory: string;
  taskDeadline: Date;
}

export class MySubClassedDexie extends Dexie {
  tasks!: Table<tasks>;

  constructor() {
    super("myDatabase");
    this.version(1).stores({
      tasks:
        "++id, taskName,taskSummary,taskDetail,taskGoal,priorityNum,taskCategory,taskDeadline",
    });
  }
}

export const taskDB = new MySubClassedDexie();
