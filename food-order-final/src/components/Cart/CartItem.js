import { useContext } from "react";
import CartContext from "../../context/cart-context";
import styles from "./CartItem.module.css";
const CartItem = props => {

  const ctx = useContext(CartContext)

  const removeHandler = () => {
    ctx.onRemoveItem(props.id)
  }

  const addHandler = () => {
    ctx.onAddItem({
      id: props.id,
      name: props.name,
      price: props.price,
      count: 1
    })
  }

  return (
    <li className={styles.item}>
      
      <div>
        <span className={styles.name}>{props.name}</span>
       
        <p className={styles.price}>{props.price}</p>
      </div>
      <div>
        <div className={styles.btns}>
          <button onClick={removeHandler}>-</button>
          <span className={styles.count}>x{props.count}</span>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
