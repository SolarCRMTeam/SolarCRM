import { useEffect } from "react";
import { Redirect } from "react-router";
import { userStore } from "../../stores/UserStore";
import { notify } from "../../wrappers/Noti";

export const Logout = () => {
  useEffect(() => {
    userStore.representative = undefined;
    userStore.login = undefined;
    userStore.password = undefined;
    localStorage.removeItem("user");
    notify("Poprawnie wylogowano z systemu.");
  }, []);

  return <Redirect to="/clients" />;
};
