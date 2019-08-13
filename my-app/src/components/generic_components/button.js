import React from "react";

const Button = ({ onclick, text, classOfComponent }) => {
  return (
    <div className="field is-grouped">
      <button
        data-testid="buttontag"
        className={classOfComponent}
        onClick={onclick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
