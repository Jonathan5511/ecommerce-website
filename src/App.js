import { Fragment} from "react";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import About from "./Pages/About";
import Store from "./Pages/Store";
import RootLayout from "./Pages/root";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {path:'/',element:<Store/>},
      {path:'/about',element:<About/>},
      {path:'/home',element:<Home/>},
      {path:'/contact',element:<Contact/>}
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
