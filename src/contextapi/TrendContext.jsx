import { createContext, useState } from "react";
import dataTrend from "../dataTrend.js";

export const TrendContext = createContext();

const TrendContextProvider = ({ children }) => {
  const [data, setData] = useState(dataTrend);
  return (
    <TrendContext.Provider value={{ data }}>{children}</TrendContext.Provider>
  );
};

export default TrendContextProvider;
