"use client";
import React, { createContext, useState, ReactNode } from "react";

export const DataContext = createContext<any>({
  account: null,
  setAccount: () => {},
});

interface DataProviderProps {
  children: ReactNode; // Define children prop type
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [account, setAccount] = useState(null);
  return (
    <DataContext.Provider
      value={{
        account,
        setAccount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
