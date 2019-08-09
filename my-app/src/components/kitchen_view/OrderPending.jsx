import React, { useState } from "react";

const OrderPending = ({ key, id, time, name, status }) => {
  if (status == "entregado" || status == "en preparacion" ||status=="en espera") {
    return <></>;
  }
  return (
    <>
      <article
        className="message is-warning  tile is-child  is-6 is-12-mobile"
        key={key}
      >
        <div className="message-header">
          <p>Orden de {name} </p>
          <button className="delete" aria-label="delete"></button>
        </div>

        <div className="message-body">
          <h5 class="subtitle is-5">{JSON.stringify(time)}</h5>
          <h4 class="title is-4"> {id}</h4>
          <table>
            <tr className=" table is-striped ">
              <th className="subtitle ">Order</th>
              <th className="subtitle">Price</th>
            </tr>
            <tr>
              <td>Soleado</td>
              <td>Mayormente soleado</td>
            </tr>
          </table>
          <a class="button is-primary">Cocinando</a>
          <a class="button is-primary">pendiente</a>
        </div>
      </article>
    </>
  );
};

export default OrderPending;
