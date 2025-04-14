/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
// ✅ Create Context
export const AppContext = createContext();

// ✅ Create Provider Component
export const AppProvider = ({ children }) => {
  
  return (
    <AppContext.Provider
      value={{

      }}
    >
      {children}
    </AppContext.Provider>
  );
};
