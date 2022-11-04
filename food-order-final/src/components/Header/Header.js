import CartButton from "../CartButton/CartButton";
import styles from "./Header.module.css";

const Header = props => {
  return (
    <div className={styles.header}>
      <h2>Food order</h2>
      <CartButton onShowCart={props.onShowCart} />
    </div>
  );
};

export default Header;
