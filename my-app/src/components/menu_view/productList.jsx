import React from "react";
import Product from "./product";

const ProductList = ({
  products,
  addToCart,
  removeFromCart,
  deleteFromCart,
  available
}) => {
  return (
    <div className="column is-centered box  is-4">
      <div clasname="column ">
        <div clasname="column ">
          {products.map(prod => (
            <Product
              key={prod.id}
              title={prod.title}
              price={prod.price}
              addToCart={() => addToCart(prod.id)}
              removeFromCart={() => removeFromCart(prod.id)}
              deleteFromCart={() => deleteFromCart(prod.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
