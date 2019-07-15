import React from "react";

const Product = ({
  title,
  price,
  inventory,
  addToCart,
  removeFromCart,
  deleteFromCart
}) => {
  return (
    <div style={{ marginBotton: "1.5rem" }}>
      <p>
        <strong>{title}</strong> ${price}
      </p>
      <div className="field is-grouped">
        <p className="control">
          <span className="tag is-warning is-medium">{inventory}</span>
        </p>
        <p className="control">
          <a href="/#" className="button is-link" onClick={addToCart}>
            <span className="icon is-small">
              <i className="fas fa-plus"></i>
            </span>
          </a>
        </p>
        <p className="control">
          <a href="/#" className="button" onClick={removeFromCart}>
            <span className="icon is-small">
              <i className="fas fa-minus"></i>
            </span>
          </a>
        </p>
        <p className="control">
          <a href="/#" className="button is-danger" onClick={deleteFromCart}>
            <span className="icon is-small">
              <i className="fas fa-trash"></i>
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Product;
