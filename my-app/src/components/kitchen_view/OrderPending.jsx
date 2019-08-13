import React, { useEffect, useState } from "react";
import { firebaseInit } from "../../config/firebase";

const OrderPending = ({ keyPENDING, id, time, name, status, cart }) => {
  const [hourState, setHourState] = useState(0);
  const [minuteState, setMinuteState] = useState(0);
  const [secondState, setSecondState] = useState(0);
  const hour = time.toDate().getHours();
  const minute = time.toDate().getMinutes();
  const second = time.toDate().getSeconds();
  let stop = false;

  const handlerStoppedLoop = () => {
    stop = true;
  };

  useEffect(() => {
    const startTime = () => {
      let dateNow = new Date();
      let hourNow = dateNow.getHours();
      let minuteNow = dateNow.getMinutes();
      let secondNow = dateNow.getSeconds();

      minuteNow = minuteNow - minute;
      secondNow = secondNow - second;
      hourNow = hourNow - hour;

      if (secondNow <= -1 && secondNow >= -54) {
        secondNow = secondNow + 60;
      }

      if (minuteNow <= -1 && minuteNow >= -54) {
        minuteNow = minuteNow + 60;
      }

      const loop = setTimeout(startTime, 500);

      if (stop) {
        clearTimeout(loop);
      }

      setMinuteState(minuteNow);
      setSecondState(secondNow);
      setHourState(hourNow);
      console.log(`${hourNow}`);
    };

    startTime();
  }, [hour, minute, second, stop]);
  const updateOrder = text => {
    const docOrder = firebaseInit.firestore().doc(`pedidos/${id}`);
    docOrder.update({
      status: text
    });
  };

  return (
    <>
      <article
        style={{ overflow: "scroll" }}
        className="message is-dark tile is-child  is-6 is-12-mobile"
        key={keyPENDING}
      >
        <div className="message-header">
          <p>Orden de {name} </p>
          <p>{`${hourState} :${minuteState} : ${secondState}`}</p>
          <div class="control">
            <div class="tags has-addons has-centered">
              <span class="tag is-light">Pedido</span>
              <span class="tag is-danger">Pendiente</span>
            </div>
          </div>
        </div>

        <div className=" message-body">
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
                <th className="subtitle ">Order</th>
              </tr>
            </thead>{" "}
            <tbody>
              {cart.map(product => (
                <tr>
                  <td>{product.counter}</td>
                  <td>{product.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div class="is-grouped">
            <button
              class="button is-warning"
              onClick={() => {
                updateOrder("cocinando");
              }}
            >
              Cocinando
            </button>
            <button
              class="button is-danger"
              onClick={() => {
                updateOrder("cancelado");
              }}
            >
              Cancelado
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default OrderPending;
