import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import MealsList from "./components/Meals/MealsList";
import Modal from "./components/UI/Modal";
import CartContextProvider from "./context/CartContextProvider";
const App = () => {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  };

  const hideCartHandler = () => {
    setIsCartShown(false);
  };

  return (
    <CartContextProvider>
      <Header  onShowCart={showCartHandler} />
      <main className="container">
        <MealsList />
      </main>
      {isCartShown && (
        <Cart
          onShowCart={showCartHandler}
          onHideCart={hideCartHandler}
        />
      )}
    </CartContextProvider>
  );
};

export default App;
