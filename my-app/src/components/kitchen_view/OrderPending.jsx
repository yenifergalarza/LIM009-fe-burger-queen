import React, { useState } from "react";

const OrderPending = ({ key, id, time, name, status, cart }) => {
  const hour = time.toDate().getHours();
 const minute= time.toDate().getMinutes();
 const second= time.toDate().getSeconds();


 
  return (
    <>
      <article
        className="message is-warning  tile is-child  is-5 is-12-mobile"
        key={key}
      >
        <div className="message-header">
          <p>Orden de {name} </p>
          <button className="delete" aria-label="delete"></button>
        </div>

        <div className="message-body">
        <h5 class="subtitle is-5">{hour}:{minute}:{second}</h5>
          <h4 class="title is-4"> {id}</h4>
          <table>
            <tr className=" table is-striped ">
              <th className="subtitle ">Order</th>
              <th>
                <h4 className="subtitle is-4">N</h4>
              </th>
            </tr>
            {cart.map(product => (
              <tr>
                <td>{product.title}</td>
                <td>{product.counter }</td>
              </tr>
            ))}
          </table>
          <a class="button is-primary">terminado</a>
          <a class="button is-primary">pendiente</a>
        </div>
      </article>
    </>
  );
};

export default OrderPending;
