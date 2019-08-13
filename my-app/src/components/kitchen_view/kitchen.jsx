import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
//import Footer from "../footer";
import { ordersData } from "../../services/firebase";
import OrderPending from "../kitchen_view/OrderPending.jsx";
import OrderCooking from "../kitchen_view/OrderCooking";
import OrderFinished from "../kitchen_view/OrderFinished";
const KitchenView = () => {
  const [value, loading, error] = useCollection(
    ordersData.where("status", "==", "pendiente"),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  );

  const [valueFinished] = useCollection(
    ordersData.where("status", "==", "entregado"),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  );

  const [valueCooking] = useCollection(
    ordersData.where("status", "==", "cocinando"),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  );

  const [state, setState] = useState("pending");

  return (
    <>
      <section class="hero is-dark">
        <div class="hero-body ">
          <div class="container ">
            <h1 class="title has-text-centered">
              Revisa el estado de los pedidos
            </h1>
            <h2 class="subtitle has-text-centered">Y actualizalos</h2>
          </div>
        </div>
      </section>
      <div
        className="box tile is-ancestor  "
        style={{ height: 100 + "vh", padding: 0 }}
      >
        <div
          className="box tile is-vertical"
          style={{ height: 150 + "vh", padding: 0 }}
        >
          <div className="box tile is-parent is-6 has-addons displayBlock container">
            <div>
              <div className="tabs is-fullwidth is-centered is-boxed">
                <ul className="buttons has-addons">
                  <li className="control button  is-dark  ">
                    <span
                      className="has-text-centered"
                      onClick={() => {
                        setState("pending");
                      }}
                    >
                      Pendiente
                    </span>
                  </li>

                  <li className="control button is-dark">
                    <span
                      className="has-text-centered"
                      onClick={() => {
                        setState("cooking");
                      }}
                    >
                      Cocinando
                    </span>
                  </li>
                  <li className="control button is-dark">
                    <span
                      className="has-text-centered "
                      onClick={() => {
                        setState("finished");
                      }}
                    >
                      Entregado
                    </span>
                  </li>
                </ul>
              </div>
            </div>{" "}
          </div>

          <div className="displayFlex">
            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && (
              <progress class="progress is-medium is-dark" max="100">
                45%
              </progress>
            )}
            {state === "pending" && (
              <div style={{ padding: 2 + "em" }}>
                {value && (
                  <div
                    className="columns is-multiline is-parent is-12-desktop  is-12-mobile table-container"
                    style={{ padding: 2 + "em" }}
                  >
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
              </div>
            )}

            {state === "cooking" && (
              <div style={{ padding: 2 + "em" }}>
                {valueCooking && (
                  <div
                    className="columns is-multiline  is-parent is-12-desktop  is-12-mobile table-container"
                    style={{ padding: 2 + "em" }}
                  >
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
              </div>
            )}
          </div>

          {state === "finished" && (
            <div>
              {value && (
                <div
                  className="tile is-parent is-12-desktop  is-12-mobile table-container"
                  style={{ padding: 2 + "em" }}
                >
                  {valueFinished && (
                    <div
                      className="columns is-multiline  is-parent is-12-desktop  is-12-mobile table-container"
                      style={{ padding: 2 + "em" }}
                    >
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
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default KitchenView;
