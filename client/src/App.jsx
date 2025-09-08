import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoute from "./allRoute/AllRoute";
import { Provider } from "react-redux";
import store from "./redux/store";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./components/CartContext";
import AddToCartButton from "./components/AddToCartButton";
import { LanguageProvider } from "./context/LanguageContext"; // 🆕 ADD THIS
import ChunkErrorBoundary from "./components/ChunkErrorBoundary";

const App = () => {
  return (
    <ChunkErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <HelmetProvider>
            <LanguageProvider> {/* 🆕 WRAP EVERYTHING INSIDE THIS */}
              <CartProvider>
                <Toaster position="top-center" reverseOrder={false} />
                <AllRoute />
                <AddToCartButton />
              </CartProvider>
            </LanguageProvider>
          </HelmetProvider>
        </Provider>
      </BrowserRouter>
    </ChunkErrorBoundary>
  );
};

export default App;
