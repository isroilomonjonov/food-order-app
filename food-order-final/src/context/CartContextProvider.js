import { useReducer } from "react";
import CartContext from "./cart-context";
import cartReducer, { a, b, c, d } from "./cart-reducer";

const defaultCartState = {
  totalPrice: 0,
  items: [],
};

const CartContextProvider = props => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = item => {
    dispatchCart({ type: "ADD", item });
  };

  const removeItemHandler = id => {
    dispatchCart({ type: "REMOVE", id });
  };

  const context = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    onAddItem: addItemHandler,
    onRemoveItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
