import Header from "./Components/Header/Header";
import AvailableProducts from "./Components/Products/AvailableProducts";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart,setShowCart] = useState(false);

  const onShowCartHandler=()=>{
    setShowCart(true);
  }

  const onHideCartHandler=props=>{
    setShowCart(false);
  }

  return (
    <CartProvider>
      {showCart && <Cart onClose={onHideCartHandler} />}
      <Header onShow={onShowCartHandler}/>
      <AvailableProducts />
    </CartProvider>
  );
}

export default App;
