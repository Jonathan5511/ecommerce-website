import { Fragment } from "react";
import Header from "./Components/Header/Header";
import AvailableProducts from "./Components/Products/AvailableProducts";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";

function App() {
  const [showCart,setShowCart] = useState(false);

  const onShowCartHandler=()=>{
    setShowCart(true);
  }

  const onHideCartHandler=props=>{
    setShowCart(false);
  }
  
  return (
    <Fragment>
      {showCart && <Cart onClose={onHideCartHandler} />}
      <Header onShow={onShowCartHandler}/>
      <AvailableProducts />
    </Fragment>
  );
}

export default App;
