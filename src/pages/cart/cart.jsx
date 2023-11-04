import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
      {/*The component maps over the PRODUCTS array, which presumably contains the available products. It checks if the quantity of each product in the cart (cartItems[product.id]) is not equal to 0. If the quantity is greater than 0, it renders a CartItem component with the product's data.*/}
        {PRODUCTS.map((product) => {   
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

{/* Conditional Rendering Based on Cart Content: 
if totalAmount is greater than 0, it renders the following elements inside a div with a CSS class "checkout"
*/}
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: {totalAmount}₪ </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
        
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
