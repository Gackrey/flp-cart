import { createContext, useContext, useReducer } from "react";
import { reducerFunc } from "./reducerFun";
import JSONData from "../data.json";
const CartContext = createContext();
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunc, {
    Products: JSONData,
    cartItems: [],
    saveForLater: []
  });
  return (
    <CartContext.Provider
      value={{
        Products: state.Products,
        cartItems: state.cartItems,
        saveForLater: state.saveForLater,
        dispatch
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
