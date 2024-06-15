import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
