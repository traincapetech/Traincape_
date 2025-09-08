import React from "react";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import AllRoute from "./allRoute/AllRoute";
import AddToCartButton from "./components/AddToCartButton";
import store from "./store/store";
import { CartProvider } from "./components/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import WebsiteCounter from "./components/WebsiteCounter";

const App = () => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <CartProvider>
          <LanguageProvider>
            <Toaster position="top-center" reverseOrder={false} />
            <Navbar />
            <AllRoute />
            <Footer />
            <AddToCartButton />
            <WebsiteCounter />
          </LanguageProvider>
        </CartProvider>
      </HelmetProvider>
    </Provider>
  );
};

export default App;
