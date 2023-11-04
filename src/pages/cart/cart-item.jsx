import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

// Displaying and managing items in a shopping cart

export const CartItem = (props) => {
  // Destructure data from props
  const { id, productName, price, productImage } = props.data;
  // Access shopping cart context using useContext
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  // render the details of a product in the cart, allowing users to adjust the quantity of that product
  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: {price}₪ </p>
        <div className="countHandler">
        {/*This button, represented by "-", allows users to decrease the quantity of the product in the cart. When clicked, it calls the removeFromCart function with the product's id*/}
          <button onClick={() => removeFromCart(id)}> - </button>
          {/*This input field displays the current quantity of the product in the cart. It's bound to the cartItems[id] value. Users can change the quantity by typing in the input field. When the value of the input changes, the updateCartItemCount function is called with the new quantity and the product's id*/}
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          {/*This button, represented by "+," allows users to increase the quantity of the product in the cart. When clicked, it calls the addToCart function with the product's id*/}
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
