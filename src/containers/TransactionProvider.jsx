import React from "react";
import { ReactReduxContext } from "react-redux";

let globalValue = {};

const getDefault = () => {
  return {
    contextStore: {},
  };
};

export const TransactionContext =
  React.createContext <
  {
    contextStore: {},
  } >
  getDefault();

const TransactionProvider = ({ children }) => {
  const ctx = React.useContext(ReactReduxContext);

  React.useEffect(() => {
    const unsubscribe = ctx.store.subscribe(() => {
      globalValue = ctx.store;
    });
    return () => {
      unsubscribe();
    };
  }, [ctx.store]);

  const value = React.useMemo(
    () => ({
      contextStore: globalValue,
    }),
    []
  );
  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
