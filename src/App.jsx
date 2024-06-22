import { Route, Switch } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { ErrorPage } from "./Pages/ErrorPage";
import "./App.css";

import { PrivateRoute } from "./PrivateRoote";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>

        <Route exact path="/error">
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
