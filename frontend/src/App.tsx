import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import { Clients } from "./components/clients/Clients";
import { Representatives } from "./components/representatives/Representatives";
import { PrimaryView } from "./components/shared/PrimaryView";
import { MyAccount } from "./components/account/MyAccount";
import { Logout } from "./components/account/Logout";
import { Process } from "./components/handling/Process";
import Events from "./components/events/Events";

function App() {
  return (
    <Switch>
      <Route
        path="/"
        exact={true}
        render={(props) => <Redirect to="/clients" />}
      />

      <Route
        path="/clients"
        exact={true}
        render={(props) => (
          <PrimaryView>
            <Clients />
          </PrimaryView>
        )}
      />

      <Route
        path="/representatives"
        exact={true}
        render={(props) => (
          <PrimaryView>
            <Representatives />
          </PrimaryView>
        )}
      />
      <Route
        path="/handling"
        exact={true}
        render={(props) => (
          <PrimaryView>
            <Process />
          </PrimaryView>
        )}
      />
      <Route
        path="/events/:processId"
        exact={true}
        render={(props) => (
          <PrimaryView>
            <Events processId={props.match.params.processId} />
          </PrimaryView>
        )}
      />
      <Route
        path="/account"
        exact={true}
        render={(props) => (
          <PrimaryView>
            <MyAccount />
          </PrimaryView>
        )}
      />
      <Route path="/logout" exact={true} render={(props) => <Logout />} />
    </Switch>
  );
}

export default App;
