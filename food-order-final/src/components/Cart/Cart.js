import { useContext } from "react";
import CartContext from "../../context/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css"
import CartItem from "./CartItem";
const Cart = props => {

  const ctx = useContext(CartContext)

  return (<Modal onClose={ props.onHideCart}>
    <ul className={styles["item-list"]}>
      {ctx.items.map((i, ind) => <CartItem
        key={i.id+ind}
        id={i.id}
        name={i.name}
        price={i.price}
        count={i.count}
      />)}
    </ul>
    <h2>{ctx.totalPrice }</h2>
    <div>
      <button onClick={props.onHideCart}>Close</button>
      {ctx.items.length>0&&<button>Order</button>}
    </div>
  </Modal> );
}
 
export default Cart;