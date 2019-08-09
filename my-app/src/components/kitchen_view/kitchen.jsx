import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";

import { DB } from "../../config/firebase";
import OrderPending from "../kitchen_view/OrderPending.jsx";
import OrderFinished from "../kitchen_view/OrderFinished.jsx";
const KitchenView = () => {
  const [value, loading, error] = useCollection(DB.where("status", "==", "pendiente"), {
    snapshotListenOptions: { includeMetadataChanges: true }
  });

  const [valueFinished, loadingFinished, errorFinished] = useCollection(DB.where("status", "==", "entregado"), {
    snapshotListenOptions: { includeMetadataChanges: true }
  });
  return (
    <div className="box tile is-ancestor">
      <>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value && (
          <div className="tile is-parent is-6-desktop  is-12-mobile table-container">
            {value.docs.map(doc => (
              <OrderPending
                key={doc.id}
                name={doc.data().name}
                time={doc.data().time}
                id={doc.id}
                cart={doc.data().cart}
              ></OrderPending>
            ))}
          </div>
        )}
      </>


      <>
        {errorFinished && <strong>Error: {JSON.stringify(error)}</strong>}
        {loadingFinished && <span>Collection: Loading...</span>}
        {valueFinished && (
          <div className="tile is-parent is-6-desktop  is-12-mobile table-container">
            {valueFinished.docs.map(doc => (
              <OrderFinished
                key={doc.id}
                name={doc.data().name}
                time={doc.data().time}
                id={doc.id}
                cart={doc.data().cart}
              ></OrderFinished>
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default KitchenView;
