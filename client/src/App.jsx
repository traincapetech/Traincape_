import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoute from "./allRoute/AllRoute";
import { Provider } from "react-redux";
import store from "./redux/store";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <HelmetProvider>
          <Toaster position="top-center" reverseOrder={false} />
          <AllRoute />
        </HelmetProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App; 