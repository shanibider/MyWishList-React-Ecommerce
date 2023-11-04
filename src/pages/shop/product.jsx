import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

// functional component. Accepts a single prop, props, object containing data about the product.
export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;    //destructures the props.data object
  const { addToCart, cartItems } = useContext(ShopContext);     // uses the useContext hook to access the shopping cart context, specifically the addToCart function and cartItems state (allows the component to interact with the shopping cart).

  const cartItemCount = cartItems[id];

  // The component returns JSX to render the product image, name, and price. It also renders a button that calls the addToCart function when clicked. The addToCart function is passed the product ID as an argument. The addToCart function is defined in the shopping cart context and is responsible for updating the cartItems state.
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> {price}₪ </p>
      </div>
      {/*when the button clicked, it calls the addToCart function with the product's id as an argument. This adds the product to the shopping cart*/}
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 &&  <> ({cartItemCount}) </>} {/*displays the number of items in the cart for the specific product. if the cartItemCount is greater than 0, it renders the quantity in parentheses (e.g., "(2)" if there are two of this item in the cart).*/}
      </button>
    </div>
  );
};
