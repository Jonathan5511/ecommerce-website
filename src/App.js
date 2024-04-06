import { Fragment } from "react";
import Header from "./Components/Header";
import AvailableProducts from "./Components/Products/AvailableProducts";

function App() {
  return (
    <Fragment>
      <Header/>
      <AvailableProducts/>
    </Fragment>
  );
}

export default App;
