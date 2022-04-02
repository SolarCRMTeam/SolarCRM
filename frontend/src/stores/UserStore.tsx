import { makeAutoObservable } from "mobx";
import { RepresentativeDto } from "../services/SolarCRM/models";

export class UserStore {
  constructor() {
    makeAutoObservable(this);
  }

  login?: string = undefined;
  password?: string = undefined;
  representative?: RepresentativeDto = undefined;

  isAuthorized = () => {
    return this.representative !== undefined;
  };
}

export const userStore = new UserStore();
