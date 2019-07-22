import React from 'react';

const Button = ({onclick, text}) => {
  return (
    <>
      <button  className="tile is-child button is-warning is-12" onClick={onclick}>{text}</button>
    </>
  )
}

export default Button; 
