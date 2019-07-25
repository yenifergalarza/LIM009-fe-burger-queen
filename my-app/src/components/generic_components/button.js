import React from 'react';
import './button.css'

const Button = ({onclick, text}) => {

  return (
    <div displayFlex>
      <button  className="tile is-child button is-warning is-12 w100" onClick={onclick}>{text}</button>
    </div>
  )
}

export default Button; 
