import { makeAutoObservable } from "mobx";

export class TableStore {
  refreshClients: boolean = false;
  refreshRepresentatives: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }
}

export const tableStore = new TableStore();