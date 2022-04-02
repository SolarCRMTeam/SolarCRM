import { useEffect } from "react";
import { Redirect } from "react-router";
import { userStore } from "../../stores/UserStore";

export const Logout = () => {
  useEffect(() => {
    userStore.representative = undefined;
    userStore.login = undefined;
    userStore.password = undefined;
  }, []);

  return <Redirect to="/clients" />;
};
