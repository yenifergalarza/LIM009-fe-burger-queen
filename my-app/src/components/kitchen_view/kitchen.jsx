import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";

import { DB } from "../../config/firebase";
import OrderPending from "../kitchen_view/OrderPending.jsx";

const KitchenView = () => {
  const [value, loading, error] = useCollection(DB, {
    snapshotListenOptions: { includeMetadataChanges: true }
  });
  return (
    <>
      <>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value && (
          <div className="tile is-parent is-6-desktop  is-12-mobile table-container">
            {value.docs.map(doc => (
              <OrderPending
                key={doc.id}
                id={doc.id}
                time={doc.data().time}
                name={doc.data().name}
                status={doc.data().status}
              ></OrderPending>
            ))}
          </div>
        )}
      </>
      <div className="box tile is-ancestor"></div>

      <div className="tile is-parent is-6-desktop  is-full-mobile table-container  ">
        <article className="message is-danger tile is-child is-5 is-12-mobile">
          <div className="message-header">
            <p>Orden de juana ramirez</p>

            <button className="delete" aria-label="delete"></button>
          </div>

          <div className="message-body">
            <h5 class="subtitle is-5">23ghvhgvkmj</h5>
            <h4 class="title is-4">hora p</h4>
            <table className="table is-striped">
              <thead>
                <tr className="  ">
                  <th className="subtitle">Hoy</th>
                  <th className="subtitle">Mañana</th>
                </tr>
              </thead>
              <tr className=" ">
                <td>Soleado</td>
                <td>Mayormente soleado</td>
              </tr>
              <tr>
                <td>19°C</td>
                <td>17°C</td>
              </tr>
              <tr>
                <td>E 13 km/h</td>
                <td>E 11 km/h</td>
              </tr>
            </table>
            mascita fffffffffffffffffffffffff
          </div>
        </article>
        <article className="message is-danger tile is-child is-5 is-12-mobile">
          <div className="message-header">
            <p>Orden de juana ramirez</p>

            <button className="delete" aria-label="delete"></button>
          </div>

          <div className="message-body">
            <h5 class="subtitle is-5">23ghvhgvkmj</h5>
            <h4 class="title is-4">hora p</h4>
            <table className="table is-striped">
              <thead>
                <tr className="  ">
                  <th className="subtitle">Hoy</th>
                  <th className="subtitle">Mañana</th>
                </tr>
              </thead>
              <tr className=" ">
                <td>Soleado</td>
                <td>Mayormente soleado</td>
              </tr>
              <tr>
                <td>19°C</td>
                <td>17°C</td>
              </tr>
              <tr>
                <td>E 13 km/h</td>
                <td>E 11 km/h</td>
              </tr>
            </table>
            mascita fffffffffffffffffffffffff
          </div>
        </article>
      </div>
    </>
  );
};

export default KitchenView;
