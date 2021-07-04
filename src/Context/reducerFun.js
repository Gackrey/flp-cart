export function reducerFunc(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        Products: state.Products.map((prod) =>
          prod.id === action.payload.id ? { ...prod, isInCart: true } : prod
        ),
        cartItems: state.cartItems.concat(action.payload)
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        Products: state.Products.map((prod) =>
          prod.id === action.payload.id ? { ...prod, isInCart: false } : prod
        ),
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        )
      };
    case "REMOVE_FROM_SL":
      return {
        ...state,
        saveForLater: state.saveForLater.filter(
          (item) => item.id !== action.payload.id
        )
      };
    case "SAVE_FOR_LATER":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
        saveForLater: state.saveForLater.concat(action.payload)
      };
    case "MOVE_TO_CART_FROM_SL":
      return {
        ...state,
        cartItems: state.cartItems.concat(action.payload),
        saveForLater: state.saveForLater.filter(
          (item) => item.id !== action.payload.id
        )
      };
    case "INC_QTY":
      return {
        ...state,
        cartItems: state.cartItems.map((prod) =>
          prod.id === action.payload.id
            ? { ...prod, quantity: prod.quantity + 1 }
            : prod
        )
      };
    case "DEC_QTY":
      return action.payload.quantity > 1
        ? {
            ...state,
            cartItems: state.cartItems.map((prod) =>
              prod.id === action.payload.id
                ? { ...prod, quantity: prod.quantity - 1 }
                : prod
            )
          }
        : {
            ...state,
            cartItems: state.cartItems.filter(
              (item) => item.id !== action.payload.id
            )
          };
    default:
      return state;
  }
}
