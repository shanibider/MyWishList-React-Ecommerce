// Creating and providing context for managing a shopping cart (adding, removing, updating, calculating, clearing)
// save the cart's state and functionality, allowing other components to access and manipulate the cart's contents. (Common approach in e-commerce applications where a shopping cart needs to be shared across multiple parts of the app).

import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";

// Context Initialization:
// This context will be used to manage the shopping cart state and provide cart-related functions to components that consume this context.
export const ShopContext = createContext(null);

// Default Cart Creation:
// initializes a default shopping cart object. all products initially set to 0 quantity. (also used to reset the cart to its default state later)
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

// Context Provider Component:
// Create a component that acts as the context provider for the shopping cart
export const ShopContextProvider = (props) => {
  // Shopping Cart State:
  // Manage the shopping cart state using the useState hook
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Total Cart Amount Calculation::
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {   //item represents item ID
      if (cartItems[item] > 0) {
        // the find method search for an item in the PRODUCTS array, where the id matches the item (which is converted to a number). This allows to retrieve the information about the item from product data.
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        // calculates the cost of the item by multiplying the quantity of the item in the cart (cartItems[item]) by the price of the item (itemInfo.price). The result is added to the totalAmount variable
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };


    // Add to Cart Function:
    // arrow function to add a product to the cart by increasing its quantity
  const addToCart = (itemId) => {   //Function Declaration
    // Updating Cart Items with setCartItems. The setCartItems function is a state updater function, often used with the useState hook in React. It's responsible for updating the state of the shopping cart.
    // get prev as an argument and return a new object with the same content as the previous state, but with the quantity of the item with the given ID increased by 1. 
    //  creates a shallow copy of the previous state (prev). It's using the spread operator (...) to copy all properties of the previous state into a new object.
    // [itemId]: prev[itemId] + 1: This part of the code updates the quantity of the item specified by itemId. It increases the quantity by 1. The itemId is used as the key, and its value in the updated state is prev[itemId] + 1.
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };


//Remove from Cart Function:
    // Function to decrease the quantity of a product in the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // Update Cart Item Count Function:
    // Function to update the quantity of a specific product in the cart
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  // Checkout Function:
    // Function to clear the cart by setting it back to the default state
  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  // Context Value Object:
    // Create a context value object with cart data and functions
  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  // Context Provider:
  // Return the ShopContext.Provider component, passing the context value and child components
  // <ShopContext.Provider> is a React component that comes from the context created with createContext.
  //This component is a part of React's context API and is used to provide the context's value to its child components. The value prop is set to contextValue, and props.children are included to render the child components wrapped by the ShopContextProvider.
    return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
