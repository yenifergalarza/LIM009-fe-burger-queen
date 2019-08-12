import React from "react";

export const Client = ({ client, setClient }) => {
  const onChange = e => {
    let string = e.target.value;
    setClient(string);
    string = "";
  };

  return (
    <div className="box tile is-parent is-12 has-addons displayBlock container">
      
      <div className="field is-horizontal">
<div className="field-label is-normal">
<h2 class="label">Nombre del cliente</h2>
  </div>
  <p class="field-body control has-icons-left has-icons-right">
    <input className="input" onChange={onChange} value={client} />
    <span className="icon is-small is-left">
      <i className="fas fa-user"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>
  </p>
</div>
    </div>
  );
};

