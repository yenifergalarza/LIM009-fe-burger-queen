import React from "react";

const Total = ({ total }) => {
  return (
    <div>
      <p className="control">
        <a href="/#" className="button is-primary">
          <span className="icon">
            <i className="fas fa-clock"></i>
          </span>
          <span>${total}</span>
        </a>
      </p>
    </div>
  );
};

export default Total;
