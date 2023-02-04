import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [msg, setMsg] = useState("Bom dia");

  const handleChangeMsg = () => {
    if (msg === "Bom dia") {
      setMsg("Para onde deseja ir?");
    } else {
      setMsg("Boa tarde");
    }
  };
  return (
    <AppContext.Provider value={{ msg, handleChangeMsg }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
