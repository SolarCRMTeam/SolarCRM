import { observer } from "mobx-react-lite";
import React from "react";
import { userStore } from "../../stores/UserStore";
import { Login } from "./Login";

const Authorize = ({ children }: any) => {
  return userStore.isAuthorized() ? <>{children}</> : <Login />;
};

export default observer(Authorize);
