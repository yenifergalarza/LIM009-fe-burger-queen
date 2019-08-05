import React from "react";

const ButtonOfTotal = ({ total }) => {
    const formatNumber = (number) => new Intl.NumberFormat('en-US',{mininumFractionDigits:2,maximunFractionDigits:2}).format(number);
  return (
    <div className="control">
    <a href="/#" className="button is-primary">
      <span className="icon">
        <i className="fas fa-clock"></i>
      </span>
      <span>${ formatNumber(total)}</span>
    </a>
    
    <a href="/#" className="button is-primary">
      <span className="icon">
        <i className="fas fa-clock"></i>
      </span>
      <span>enviar orden </span>
    </a>
    
    </div>


  );
};

export default  ButtonOfTotal;