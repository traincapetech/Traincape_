import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage (persists after page refresh)
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Initialize subtotal from cart items on the first load or cart change
  const [subtotal, setSubtotal] = useState(() => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  });

  useEffect(() => {
    // Recalculate subtotal whenever the cart changes
    const newSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSubtotal(newSubtotal);

    // Persist updated cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]); // Effect runs whenever cart changes

  const addToCart = (product) => {
    // Ensure product has a quantity property, defaulting to 1 if not present
    const productWithQuantity = {
      ...product,
      quantity: product.quantity || 1
    };

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productWithQuantity.id);
      if (existingItem) {
        // If the product already exists in the cart, update the quantity
        return prevCart.map((item) =>
          item.id === productWithQuantity.id
            ? { ...item, quantity: item.quantity + productWithQuantity.quantity }  // Add the quantity
            : item
        );
      } else {
        // Otherwise, add the new product with all its details
        return [...prevCart, productWithQuantity];
      }
    });
  };

  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, updateQuantity, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};