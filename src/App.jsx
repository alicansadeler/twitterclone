import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { ErrorPage } from "./Pages/ErrorPage";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>

        <Route exact path="/error">
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
