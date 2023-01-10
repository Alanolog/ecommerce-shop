import React from "react";

const useValue = () => {
  const [cartItemsCount, setCartItemsCount] = React.useState(0);

  return {
    cartItemsCount,
    setCartItemsCount,
  };
};

const Context = React.createContext({} as ReturnType<typeof useValue>);

export const ContextProvider: React.FC<any> = ({ children }) => {
  return <Context.Provider value={useValue()}>{children}</Context.Provider>;
};

export const useContext = () => {
  return React.useContext(Context);
};
