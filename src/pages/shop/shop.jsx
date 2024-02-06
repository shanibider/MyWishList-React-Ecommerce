import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";


// Component that represents a shop page. It imports a PRODUCTS array and a Product component.
// Inside the component, it maps osaver the PRODUCTS array and renders a Product component for each product, include product data.


export const Shop = () => {

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Home Products</h1>
      </div>

      <div className="description">
      <h3>Feel your best at home</h3>
      </div>

    {/*maps over the PRODUCTS array and renders the Product component for each product.
    The data prop is passed to the Product component, providing the product data*/}
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      
    </div>
  );
};
