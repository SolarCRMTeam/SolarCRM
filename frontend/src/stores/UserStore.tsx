import { makeAutoObservable } from "mobx";
import { IStorageUser } from "../components/account/IStorageUser";
import { RepresentativeDto } from "../services/SolarCRM/models";

export class UserStore {
  constructor() {
    makeAutoObservable(this);
  }

  login?: string = undefined;
  password?: string = undefined;
  representative?: RepresentativeDto = undefined;

  private tryGetUserFromStorage = (): IStorageUser | undefined => {
    const userFromStorage = localStorage.getItem("user");

    if (userFromStorage) {
      const user = JSON.parse(userFromStorage);

      return user;
    }

    return undefined;
  };

  isAuthorized = () => {
    if (this.representative) {
      return true;
    } else {
      const userFromStorage = this.tryGetUserFromStorage();

      if (userFromStorage) {
        this.representative = userFromStorage.representative;
        this.login = userFromStorage.login;
        this.password = userFromStorage.password;
        return true;
      } else {
        return false;
      }
    }
  };
}

export const userStore = new UserStore();
