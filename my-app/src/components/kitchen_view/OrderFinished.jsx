import React from "react";
const OrderFinished = ({ keyPENDING, id, time, name, status, cart }) => {
  const hour = time.toDate().getHours();
  const minute = time.toDate().getMinutes();
  const second = time.toDate().getSeconds();

  return (
    <>
      <article
        className="message is-dark  tile is-child is-5 is-12-mobile"
        key={keyPENDING}
        style={{ overflow: "scroll" }}
      >
        <div className="message-header ">
          <p>Pedido de {name} </p>
          <div class="control ">
            <div class="tags has-addons has-centered">
              <span class="tag is-light">Pedido</span>
              <span class="tag is-success">Entregado</span>
            </div>
          </div>
        </div>

        <div className="message-body">
          <h5 class="subtitle is-5">
            {hour}:{minute}:{second}
          </h5>
          <h4 class="title is-4"> </h4>
          <table>
            <thead>
              <tr className=" table is-striped ">
                <th>
                  <h4 className="subtitle is-4">N</h4>
                </th>
                <th className="subtitle is-5">Producto</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(product => (
                <tr>
                  <td>{product.counter}</td>
                  <td>{product.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </>
  );
};

export default OrderFinished;
