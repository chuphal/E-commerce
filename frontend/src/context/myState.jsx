import { createContext, useContext, useState } from "react";

const stateContext = createContext(false);

export const useLoading = () => useContext(stateContext);

export const MyStateProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  return (
    <stateContext.Provider value={{ loading, setLoading }}>
      {children}
    </stateContext.Provider>
  );
};
