import { Fragment} from "react";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import About from "./Pages/About";
import Store from "./Pages/Store";
import RootLayout from "./Pages/root";

const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {path:'/',element:<Store/>},
      {path:'/about',element:<About/>}
    ] 
  }
])

function App() {
  return (
    <Fragment>
      <RouterProvider router={router}/>
    </Fragment>
  );
}

export default App;
