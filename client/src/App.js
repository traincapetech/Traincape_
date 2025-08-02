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

import React, { useEffect, Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { setUserFromLocalStorage } from "./slices/userSlice"; // Import the action
import { CartProvider } from "./components/CartContext";

// Lazy load components to improve initial loading time
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const AllRoute = lazy(() => import("./allRoute/AllRoute"));
const WebsiteCounter = lazy(() => import("./components/WebsiteCounter"));
const AddToCartButton = lazy(() => import("./components/AddToCartButton"));

// Loading component to show while lazy loaded components are loading
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    fontSize: '20px',
    color: '#333'
  }}>
    <p>Loading Traincape Technology...</p>
  </div>
);

function App() {
  const dispatch = useDispatch();
  const location = useLocation(); // Get the current location

  useEffect(() => {
    dispatch(setUserFromLocalStorage()); // Dispatch action to set user from localStorage
    AOS.init({ // Initialize AOS
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, [dispatch]);

  // List of pages where you want to hide the AddToCartButton
  const hideOnPages = ['/', '/contact-us', '/about-us', '/review-page', '/our-services'];

  return (
    <CartProvider> {/* Wrap the entire app with CartProvider */}
      <div>
        <Suspense fallback={<LoadingFallback />}>
          {/* Conditionally render Navbar and Footer based on the current route */}
          {location.pathname !== '/test' && <Navbar />}
          <AllRoute />
          {location.pathname !== '/test' && <Footer />}
          <WebsiteCounter />
          
          {/* Conditionally render AddToCartButton based on the current route */}
          {!hideOnPages.includes(location.pathname) && <AddToCartButton />}
        </Suspense>
      </div>
    </CartProvider>
  );
}

export default App;