import React,{ Fragment, Suspense} from "react";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
//import About from "./Pages/About";
import Store from "./Pages/Store";
import RootLayout from "./Pages/root";
//import Home from "./Pages/Home";
//import Contact from "./Pages/Contact";
//import ProductDetails from "./Pages/ProductDetails";
//import Login from "./Pages/Login";

const About = React.lazy(()=>import('./Pages/About'))
const Home = React.lazy(()=>import('./Pages/Home'))
const Contact = React.lazy(()=>import('./Pages/Contact'))
const ProductDetails = React.lazy(()=>import('./Pages/ProductDetails'))
const Login = React.lazy(()=>import('./Pages/Login'))

const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {path:'/',element:<Store/>},
      {path:'/about',element:<Suspense fallback={<p>Loading...</p>}><About/></Suspense>},
      {path:'/home',element:<Suspense fallback={<p>Loading...</p>}><Home/></Suspense>},
      {path:'/contact',element:<Suspense fallback={<p>Loading...</p>}><Contact/></Suspense>},
      {path:'/:productID',element:<Suspense fallback={<p>Loading...</p>}><ProductDetails/></Suspense>},
      {path:'/login',element:<Suspense fallback={<p>Loading...</p>}><Login/></Suspense>}
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
