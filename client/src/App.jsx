import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoute from "./allRoute/AllRoute";
import { Provider } from "react-redux";
import store from "./redux/store";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./components/CartContext";
import AddToCartButton from "./components/AddToCartButton";
import ScrollToTop from "./components/ScrollToTop";

// ✅ Prevent browser from restoring previous scroll position
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <HelmetProvider>
          <CartProvider>
            <Toaster position="top-center" reverseOrder={false} />
            <ScrollToTop /> {/* Scroll to top on every route change */}
            <AllRoute />
            <AddToCartButton />
          </CartProvider>
        </HelmetProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
