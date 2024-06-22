import { Redirect } from "react-router-dom";
import { useContext } from "react";
import { TrendContext } from "./contextapi/TrendContext";

export const PrivateRoute = ({ children }) => {
  const { loggedIn } = useContext(TrendContext);

  if (!loggedIn) {
    return (
      <Redirect
        to={{
          pathname: "/",
          state: { referrer: "/" },
        }}
      />
    );
  } else {
    return children;
  }
};
