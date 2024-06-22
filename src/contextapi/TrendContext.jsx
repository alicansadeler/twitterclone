import { createContext, useState } from "react";
import dataTrend from "../dataTrend.js";
import dataFollow from "../dataFollow.js";
export const TrendContext = createContext();

const TrendContextProvider = ({ children }) => {
  const [dataTrendList, setDataTrendList] = useState(dataTrend);
  const [dataFollowList, setDataFollowList] = useState(dataFollow);
  const [loggedIn, setloggedIn] = useState(false);
  return (
    <TrendContext.Provider
      value={{ dataTrendList, dataFollowList, loggedIn, setloggedIn }}
    >
      {children}
    </TrendContext.Provider>
  );
};

export default TrendContextProvider;
