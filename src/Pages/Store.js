import { useState,Fragment } from "react";
import Header from "../Components/Header/Header";
import AvailableProducts from "../Components/Products/AvailableProducts";
import CartProvider from "../store/CartProvider";
import Cart from "../Components/Cart/Cart";
const Store=(props)=>{
    const [showCart,setShowCart] = useState(false);

  const onShowCartHandler=()=>{
    setShowCart(true);
  }

  const onHideCartHandler=props=>{
    setShowCart(false);
  }

    return (<Fragment>
    <CartProvider>
      {showCart && <Cart onClose={onHideCartHandler} />}
      <Header onShow={onShowCartHandler}/>
      <AvailableProducts />
    </CartProvider>
    </Fragment>)
}

export default Store;