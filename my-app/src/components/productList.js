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
    <div className="container">
      <div clasname="column is-centered">
        <div clasname="column is-narrow">
          {products.map(prod => (
            <Product
              key={prod.id}
              title={prod.title}
              inventory={available[prod.id]}
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
