import { useEffect, useState } from 'react';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterSection from "./sections/Footer";
import CopyRight from "./sections/CopyRight";
import { Route, Routes, useLoc, useLocation } from 'react-router-dom';
import HomePage from "./pages/Home";
import About from "./pages/about";
import Price from "./pages/Price";
import Header from "./sections/Navbar";
import Contact from "./pages/contact";
import Signup from "./sections/Signup"



function App() {
 
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/pricing" element={<Price />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          {/* <Route
            exact
            path="/blog/:slug"
            element={<BlogPage setIsBlogPage={setIsBlogPage} />}
          ></Route> */}
          {/* <Route exact path="*" element={<ErrorPage />}></Route> */}
          {/* <Route
            exact
            path="/become-an-investor"
            element={<BecomeInvestor />}
          ></Route> */}
          {/* <Route
            exact
            path="/investor-relations"
            element={<ProtectedInvestorPage />}
          ></Route> */}
          {/* <Route
            exact
            path="/terms-and-conditions"
            element={<TermsAndConitionsPage />}
          ></Route> */}
        </Routes>
        <Signup />
      <FooterSection />
      <CopyRight />
    </div>
  );
}

export default App;

// function App() {
  
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <HomePage />,
//     },
//     {
//       path: "/Social-ignite-Studio",
//       element: <HomePage />,
//     },
//     {
//       path: "/about",
//       element: <About />,
//     },
//     {
//       path: "/pricing",
//       element: <Price />,
//     },
//     {
//       path: "/contact",
//       element: <Contact />,
//     },
//   ]);
//   return (
//     <div className="App">
      
//        <Header/>
//       <RouterProvider router={router}></RouterProvider>
     
//       <FooterSection />
     
//     </div>
//   );
// }

// export default App;
