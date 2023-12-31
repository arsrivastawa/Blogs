import React, { createContext, useState } from "react";

export const DataContext = createContext();

function DataProvider({ children }) {
  const [userData, setUserData] = useState({});

  function setUser(Data) {
    setUserData({
      username: Data ? Data.username : null,
      userID: Data ? Data.uid : null,
      useremail: Data ? Data.useremail : null,
    });
  }

  return (
    <>
      <DataContext.Provider value={{ userData, setUser }}>
        {children}
      </DataContext.Provider>
    </>
  );
}

export default DataProvider;
