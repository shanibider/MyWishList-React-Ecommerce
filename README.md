# My WishList React E-commerce  Application 🛒

An E-commerce application built with React and JavaScript, with a focus on **React Context API**, and other React-based architecture, such as `Hooks, Router, and component-based architecture`

## Technologies Used 🛠️

[![My Skills](https://skillicons.dev/icons?i=react,js,html,CSS)](https://skillicons.dev)

### Front-End Development Technologies
- [x] **JavaScript**
- [x] **React**
  - [ ] Components
  - [ ] Props
  - [ ] Events
  - [ ] Hooks (useState, useEffect)
  - [ ] Router (react-router-dom)
  - [ ] Context API
- [x] **React-Bootstrap**
- [x] **CSS**
- [x] **HTML**

---

## Project Architecture and Key Concepts 🏗️

### Single Page Application (SPA) 🖥️
Utilizes `react-router-dom` to enable client-side routing, allowing for a smooth and fast user experience by `dynamically updating` the single HTML page `without reloading`.

### Context API for State Management 🌐
Implements React's `Context API` to `manage the shopping cart state globally`. This avoids prop drilling and ensures efficient state management across the application.

### Component-Based Design 🧩
Built with reusable and modular components/ pages, facilitating maintainability and scalability. Each feature and page is covered within its own component, such as `<Shop />`, `<Product />`, `<Cart />`, `<CartItem />, and `<Checkout />.

### Functional Components and Hooks 🔄
Employs functional components and React Hooks (`useState`, `useEffect`) for managing state and lifecycle methods, providing a clean and modern approach to building React applications.
```javascript
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  ...
};
```
### Data Handling 📦
Product data is imported from an external source and dynamically rendered within the application, demonstrating effective data management and rendering techniques.

### CSS Modules for Styling 🎨
Utilizes CSS Modules to ensure modular styles, preventing style conflicts and promoting component-specific styling.

---

## Detailed Implementation: Using React's Context API ⚛️
### Purpose and Use of the `Context Provider`

The Context API in React is used to `manage and share state across components` without prop drilling, which can make the code cleaner and easier to maintain. In this application, the `ShopContextProvider` is implemented to `handle the state and functionality related to the shopping cart`.

### Context Initialization
```javascript
import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

// Create the ShopContext
export const ShopContext = createContext(null);

// Initialize the default cart state
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};
```
- [x] **`createContext`**: Creates a context object. Here, `ShopContext` is created to manage the `shopping cart state` and provide `cart-related functions` to components that consume this context.

---

### Context Provider Component:
```javascript
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
```

- [x] **State Management with `useState`**: The `useState` hook is used to manage the state of the cart items. This hook provides a `state variable` (`cartItems`) and a `function to update it` (`setCartItems`).

- [x] **Cart Functions**:
  - **`addToCart`**: Increases the quantity of a specific item in the cart by 1.
  - **`removeFromCart`**: Decreases the quantity of a specific item in the cart by 1.
  - **`updateCartItemCount`**: Sets the quantity of a specific item in the cart to a new value.
  - **`checkout`**: Resets the cart to its default state.
  - **`getTotalCartAmount`**: Calculates the total cost of items in the cart.

- [x] **Context Value Object**: The `contextValue object` contains the `cart state and functions` to manipulate it. This object is provided to all components within the `ShopContext.Provider`.
```javascript
return (
  <ShopContext.Provider value={contextValue}>
    {props.children}
  </ShopContext.Provider>
);
```

- [x] **`ShopContext.Provider`**: This component `wraps around any components that need access to the cart context`.
- By passing the `contextValue` as its `value`, any nested component can `access and manipulate the cart's contents` through the context API.

---
<br>

## Difference between `contextValue` and `ShopContext`:

**`ShopContext`** is the context object created using `createContext()`. Acts as a container for the context value and provides the mechanism for React to pass data through the component tree without having to pass props down manually at every level;
```javascript
import { createContext } from "react";
export const ShopContext = createContext(null);
```
- **Purpose**: To create a context object that can be used to provide and consume context data.
- **Usage**: It is used with the `Provider` component to make the context value available to all nested components.
<br>

**`contextValue`** is the actual value (data and functions) that you share across components via the context. Provided to the `Provider` component of `ShopContext`;

```javascript
const contextValue = {
  cartItems,
  addToCart,
  updateCartItemCount,
  removeFromCart,
  getTotalCartAmount,
  checkout,
};

return (
  <ShopContext.Provider value={contextValue}>
    {props.children}
  </ShopContext.Provider>
);
```
- **Purpose**: To hold the state and functions that need to be accessible to all components that consume this context.
- **Usage**: It is passed to the `value` prop of the `Provider` component to make these `state and functions available` to any component that consumes the context.



---

## Routing and Navigation 🚦
### Using `Link` for Navigation 🔗
```javascript
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'react-icons/fa';

<Link to="/cart">
  <ShoppingCart size={32} />
</Link>
```
-  [x] **`Link`**: A component provided by `react-router-dom` to enable client-side navigation. It allows users to navigate between routes without refreshing the page.

### Using `useNavigate` for Programmatic Navigation 🚀
```javascript
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

<button
  onClick={() => {
    checkout();
    navigate("/checkout");
  }}
>
  Checkout
</button>
```
-  [x] **`useNavigate`**: A hook provided by `react-router-dom` for programmatically navigating between routes. It enables navigation based on events or conditions in your application logic.

---

## Key Features ✨
-  [x] **Home Page**: Lists products with details and options to add to the cart.
-  [x] **Shopping Cart**: Displays and manages items in the cart, allowing users to update quantities and proceed to checkout.
-  [x] **Contact Page**: A simple contact form for user inquiries.

---

## Website Preview 🛍️
### Demo Website
👉 Demo: 

[screen-capture.webm](https://github.com/shanibider/Readme-tests/assets/72359805/08f4879f-d548-4a0f-8a66-48cfc99fdf64)

### The Pages

#### Home 🏠
![whishlist-React-App](https://github.com/shanibider/MyWishList-Ecommerce-React-Website/assets/72359805/aa3f7224-d981-4d79-9802-6fb5239276cd)

#### Cart 🛒
![2](https://github.com/shanibider/Readme-tests/assets/72359805/c7167b18-1cad-4745-b33a-7368ef609f09)

#### Contact 📞
![3](https://github.com/shanibider/Readme-tests/assets/72359805/8628b38e-fae3-4f1a-87c1-5833c1f06660)

---

## Running the Application Locally 🏃‍♂️

```bash
open new terminal
$ npm i
$ npm start
```

> [!TIP] 
> Feel free to dive into the code to understand the implementation details. Happy coding! 🚀😊👩‍💻

## 📫 Connect with me 😊
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shani-bider/)
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://shanibider.onrender.com/)
[![gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:shanibider@gmail.com)

<footer>
<p style="float:left; width: 20%;">
Copyright © Shani Bider
</p>
</footer>
