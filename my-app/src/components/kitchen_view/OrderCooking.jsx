import React, { useEffect, useState, useRef } from "react";

import { firebaseInit } from "../../config/firebase";
const OrderCooking = ({
  timeState,
  keyPENDING,
  id,
  time,
  name,
  status,
  cart,
  handlerStoppedLoop,
  startTime
}) => {
  const hour = time.toDate().getHours();
  const minute = time.toDate().getMinutes();
  const second = time.toDate().getSeconds();

  let stop = false;
  const [secondState, setSecondState] = useState(0);
  const [minuteState, setMinuteState] = useState(0);
  const [hourState, setHourState] = useState(0);
  let individualHour = useRef(0);
  let individualSecond = useRef(0);
  let individualMinute = useRef(0);

  useEffect(() => {
    let timeReference = [...timeState];
    timeReference.forEach(doc => {
      if (doc.id === id) {
        return (individualHour.current = doc.hour);
      }
      return individualHour;
    });

    timeReference.forEach(doc => {
      if (doc.id === id) {
        return (individualMinute.current = doc.minute);
      }
      return individualMinute;
    });

    timeReference.forEach(doc => {
      if (doc.id === id) {
        return (individualSecond.current = doc.hour);
      }
      return individualSecond;
    });
    startTime(hour, minute, second, stop, timeState, id);

    setHourState(individualHour);
    setMinuteState(individualMinute);
    setSecondState(individualSecond);
  }, [startTime, hour, minute, second, stop, timeState, id, setMinuteState]);

  const updateOrder = (text, handlerStoppedLoop, id) => {
    const docOrder = firebaseInit.firestore().doc(`pedidos/${id}`);
    docOrder.update({
      status: text
    });

    if (text === "cancelado") {
      handlerStoppedLoop(false);
    }
  };

  return (
    <>
      <article
        style={{ overflow: "scroll" }}
        className="message is-dark tile is-child  is-5 is-12-mobile"
        key={keyPENDING}
      >
        <div className="message-header">
          <p>Pedido de {name} </p>

          <p>{`${hourState} :${minuteState} : ${secondState}`}</p>

          <div class="control">
            <div class="tags has-addons has-centered">
              <span class="tag is-light">Pedido</span>
              <span class="tag is-warning">Cocinado</span>
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

          <button
            class="button is-success"
            onClick={() => {
              updateOrder("entregado", handlerStoppedLoop(stop), id);
            }}
          >
            Entregado
          </button>
          <button
            class="button is-danger"
            onClick={() => {
              updateOrder("cancelado", handlerStoppedLoop(stop), id);
            }}
          >
            Cancelado
          </button>
        </div>
      </article>
    </>
  );
};
export default OrderCooking;
