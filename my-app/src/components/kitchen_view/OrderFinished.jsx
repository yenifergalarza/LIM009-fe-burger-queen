import React, { useEffect, useState } from "react";

const OrderFinished = ({ keyPENDING, id, time, name, status, cart }) => {
  const [hourState, setHourState] = useState(0);
  const [minuteState, setMinuteState] = useState(0);
  const [secondState, setSecondState] = useState(0);
  const hour = time.toDate().getHours();
  const minute = time.toDate().getMinutes();
  const second = time.toDate().getSeconds();
  let stop = true;

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
      if (hourNow <= -1 && hourNow >= -23) {
        hourNow = hourNow + 24;
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
  });

  useEffect(() => {
    const startTime = () => {
      let dateNow = new Date();
      let hourNow = dateNow.getHours();
      let minuteNow = dateNow.getMinutes();
      let secondNow = dateNow.getSeconds();

      minuteNow = minuteNow - minute;
      secondNow = secondNow - second;
      hourNow = hourNow - hour;

      if (secondNow <= -1 && secondNow >= -29) {
        secondNow = secondNow + 60;
      }

      if (minuteNow <= -1 && minuteNow >= -30) {
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
  return (
    <>
      <article
        className="message is-dark  tile is-child is-6 is-12-mobile"
        key={keyPENDING}
        style={{ overflow: "scroll" }}
      >
        <div className="message-header ">
          <p>Pedido de {name} </p>
          <p>{`${hourState} :${minuteState} : ${secondState}`}</p>
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
