import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterSection from "./sections/Footer";
import CopyRight from "./sections/CopyRight";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import About from "./pages/about";
import Price from "./pages/Service";
import Header from "./sections/Navbar";
import Contact from "./pages/contact";
import Signup from "./sections/Signup"





function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/Social-ignite-Studio",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/pricing",
      element: <Price />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return (
    <div className="App">
      
       <Header/>
      <RouterProvider router={router}></RouterProvider>
      <Signup />
      <FooterSection />
      <CopyRight />
    </div>
  );
}

export default App;
