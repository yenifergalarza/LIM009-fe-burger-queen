import React, { useState } from "react";

const OrderFinished = ({ key, id, time, name, status, cart }) => {
 const hour = time.toDate().getHours();
 const minute= time.toDate().getMinutes();
 const second= time.toDate().getSeconds();

  return (
    <>
      <article
        className="message is-danger tile is-child is-5 is-12-mobile"
        key={key}
      >
        <div className="message-header">
          <p>Orden de {name} </p>
          <button className="delete" aria-label="delete"></button>
        </div>

        <div className="message-body">
          <h5 class="subtitle is-5">{hour}:{minute}:{second}</h5>
          <h4 class="title is-4"> {JSON.stringify(id)}</h4>
          <table>
            <tr className=" table is-striped ">
              <th className="subtitle is-5">Producto</th>
              <th ><h4 className="subtitle is-4">N</h4></th>
            </tr>
            {cart.map(product => (
              <tr>
                <td>{product.title}</td>
                <td>{product.counter }</td>
              </tr>
            ))}
          </table>
        </div>
      </article>
    </>
  );
};

export default OrderFinished;
