import { createContext, useState } from "react";
import React from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open, event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const addToCart = (cartItem) => {
    const isThere = cart.findIndex((item) => item.id === cartItem.id);
    if (isThere >= 0) {
      cart[isThere].quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, cartItem]);
    }
  };

  const removeFromCart = (id, event) => {
    const newCart = cart.filter((item) => item.id !== id);

    const amountTotal = newCart.reduce((acc, item) => acc + item.quantity, 0);
    if (amountTotal < 1) {
      toggleDrawer("right", false, event);
    }

    setCart(newCart);
  };

  const increaseInCart = (id) => {
    const positionItem = cart.findIndex((item) => item.id === id);
    cart[positionItem].quantity++;
    setCart([...cart]);
  };

  const decreaseInCart = (id, event) => {
    const positionItem = cart.findIndex((item) => item.id === id);
    cart[positionItem].quantity--;

    if (cart[positionItem].quantity < 1) {
      removeFromCart(id, event);
    } else {
      setCart([...cart]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        state,
        toggleDrawer,
        addToCart,
        removeFromCart,
        increaseInCart,
        decreaseInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
