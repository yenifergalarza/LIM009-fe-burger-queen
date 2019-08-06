import React from "react";
import Button from "../generic_components/button";

export const Client = () => {
  return (
    <div className="box tile is-parent is-12 has-addons displayBlock container">
      <h2>Nombre del Cliente</h2>
      <input type="text" />
      <Button text="Continuar" />
    </div>
  );
};
