// import AllRoute from "./allRoute/AllRoute";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import WebsiteCounter from "./components/WebsiteCounter";

// function App() {
//   return (
//     <div>
//       {/* <h1>Traincape Technology</h1> */}
//       <Navbar />
//       <AllRoute />
//       <Footer />
//       <WebsiteCounter />
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import AllRoute from "./allRoute/AllRoute";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { setUserFromLocalStorage } from "./slices/userSlice"; // Import the action
import WebsiteCounter from "./components/WebsiteCounter";
import { CartProvider } from "./components/CartContext";
import AddToCartButton from "./components/AddToCartButton";

function App() {
  const dispatch = useDispatch();
  const location = useLocation(); // Get the current location

  useEffect(() => {
    dispatch(setUserFromLocalStorage()); // Dispatch action to set user from localStorage
  }, [dispatch]);

  // List of pages where you want to hide the AddToCartButton
  const hideOnPages = ['/', '/contact-us', '/about-us', '/review-page', '/our-services'];

  return (
    <CartProvider> {/* Wrap the entire app with CartProvider */}
      <div>
        {/* Conditionally render Navbar and Footer based on the current route */}
        {location.pathname !== '/test' && <Navbar />}
        <AllRoute />
        {location.pathname !== '/test' && <Footer />}
        <WebsiteCounter />
        
        {/* Conditionally render AddToCartButton based on the current route */}
        {!hideOnPages.includes(location.pathname) && <AddToCartButton />}
      </div>
    </CartProvider>
  );
}

export default App;
