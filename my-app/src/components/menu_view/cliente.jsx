import React from "react";

export const Client = ({ client, setClient }) => {
  const onChange = e => {
    let string = e.target.value;
    setClient(string);
    string = "";
  };

  return (
    <div className="box tile is-parent is-12 has-addons displayBlock container">
      <h2>Nombre del Cliente</h2>
      <input type="text" onChange={onChange} value={client} />
    </div>
  );
};
