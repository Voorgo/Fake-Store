import { createContext, useReducer } from "react";
import { reducer } from "../../utils/reducer";

export const ProductContext = createContext({});

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    item: [],
    items: [],
    isOpen: false,
    render: false,
  });
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default Provider;
