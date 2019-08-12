import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";

import { DB } from "../../config/firebase";
import OrderPending from "../kitchen_view/OrderPending.jsx";
import OrderCooking from "../kitchen_view/OrderCooking";
import OrderFinished from "../kitchen_view/OrderFinished";
const KitchenView = () => {
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
            <h1 class="title has-text-centered">Revisa el estado de los pedidos</h1>
            <h2 class="subtitle has-text-centered">Y actualizalos</h2>

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
      </div>
    </>
  );
};

export default KitchenView;
