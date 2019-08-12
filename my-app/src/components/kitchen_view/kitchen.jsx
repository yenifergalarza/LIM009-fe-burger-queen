import React, { useEffect, useState } from "react";
import {
  useCollection
} from "react-firebase-hooks/firestore";

import { DB } from "../../config/firebase";
import OrderPending from "../kitchen_view/OrderPending.jsx";
import OrderCooking from "../kitchen_view/OrderCooking";
import OrderFinished from "../kitchen_view/OrderFinished";
const KitchenView = () => {

  const [timeState, setTimeState] = useState([]);
  useEffect(() => {
    DB.onSnapshot(snap => {
      let newValueTotal = [];
      snap.forEach(doc => {
        newValueTotal.push(doc.data());
      });

      return setTimeState(newValueTotal);
    });
    const newTime = [...timeState, { minute: 0, second: 0, hour: 0 }];


    return setTimeState(newTime);
    // You can await here
  }, [timeState]);

  /*   const [timeState, setTimeState] = useState([]);
  let newValueTotal = valueTotal; 
  if (loadingTotal == !true) {
    setTimeState(newValueTotal);
    let newTime = [...timeState, { minute: 0, second: 0, hour: 0 }];
  setTimeState(newTime); } */
  const handlerStoppedLoop = stopParam => {
    stopParam = true;
  };

  const startTime = (hour, minute, second, booleanStop, timeState, id) => {
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

    let hourNew = [...timeState];
    hourNew.forEach(count => {
      if (count.id === id) {
        return (count.hour = hourNow);
      }
      setTimeState(hourNew);
    });

    let secondNew = [...timeState];
    secondNew.forEach(count => {
      if (count.id === id) {
        return (count.second = secondNow);
      }
      setTimeState(secondNew);
    });

    let minuteNew = [...timeState];
    minuteNew.forEach(count => {
      if (count.id === id) {
        return (count.minute = minuteNow);
      }
      setTimeState(minuteNew);
    });

    const loop = setTimeout(startTime, 500);

    if (booleanStop) {
      clearTimeout(loop);
    }
  };

  //crear un estadoo con toda la data de pedidos (donde seteo ese reloj y el),luego crear una funcion que
  //recorra cada elemento de ese stado y lo indentifique en da archivo .jsx

  const [value, loading, error] = useCollection(
    DB.where("status", "==", "pendiente"),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  );

  const [valueFinished] = useCollection(DB.where("status", "==", "entregado"), {
    snapshotListenOptions: { includeMetadataChanges: true }
  });

  const [valueCooking] = useCollection(DB.where("status", "==", "cocinando"), {
    snapshotListenOptions: { includeMetadataChanges: true }
  });
  return (
    <>
      <section class="hero is-white">
        <div class="hero-body ">
          <div class="container ">
            <h1 class="title has-text-centered">Primary title</h1>
            <h2 class="subtitle has-text-centered">Primary subtitle</h2>
          </div>
        </div>
      </section>
      <div className="box tile is-ancestor  " style={{ height: 100 + "vh" }}>
        <div className="box tile is-vertical" style={{ height: 150 + "vh" }}>
          {error && <strong>Error: {JSON.stringify(error)}</strong>}
          {loading && <span>Collection: Loading...</span>}
          {value && (
            <div className="tile is-parent is-12-desktop  is-12-mobile table-container">
              {value.docs.map(doc => (
                <OrderPending
                  key={doc.id}
                  name={doc.data().name}
                  time={doc.data().time}
                  id={doc.id}
                  cart={doc.data().cart}
                  status={doc.data().status}
                ></OrderPending>
              ))}
            </div>
          )}

          {valueCooking && (
            <div className="tile is-parent is-12-desktop  is-12-mobile table-container">
              {valueCooking.docs.map(doc => (
                <OrderCooking
                  timeState={timeState}
                  handlerStoppedLoop={handlerStoppedLoop}
                  startTime={startTime}
                  key={doc.id}
                  name={doc.data().name}
                  time={doc.data().time}
                  id={doc.id}
                  cart={doc.data().cart}
                  status={doc.data().status}
                ></OrderCooking>
              ))}
            </div>
          )}

          {valueFinished && (
            <div className="tile is-parent is-12-desktop  is-12-mobile table-container">
              {valueFinished.docs.map(doc => (
                <OrderFinished
                  key={doc.id}
                  name={doc.data().name}
                  time={doc.data().time}
                  id={doc.id}
                  cart={doc.data().cart}
                  status={doc.data().status}
                ></OrderFinished>
              ))}
            </div>
          )}
        </div>
      </div>{" "}
    </>
  );
};

export default KitchenView;
