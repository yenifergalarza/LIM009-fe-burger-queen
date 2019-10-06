import React, { useState } from "react";
import Meals from "./meals";
import Breakfast from "./breakfast";
import { useCollection } from "react-firebase-hooks/firestore";
import { productsData } from "../../services/firebase";

const ContainerMenu = ({ addProduct }) => {
  const [value, loading, error] = useCollection(productsData, {
    snapshotListenOptions: { includeMetadataChanges: true }
  });
  const [state, setState] = useState("breakfast");
  return (
    <div className="box tile is-parent is-6 has-addons displayBlock container">
      <div>
        <div className="tabs is-fullwidth is-centered is-boxed">
          <ul>
            <li>
              <a
                href="/#"
                onClick={() => {
                  setState("breakfast");
                }}
              >
                Desayuno
              </a>
            </li>
            <li>
              <a
                href="/#"
                onClick={() => {
                  setState("AllMeals");
                }}
              >
                Todo el día
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="displayFlex">
        {state === "breakfast" && (
          <div>
            <Breakfast allProducts={value} addProduct={addProduct} />
          </div>
        )}

        {state === "AllMeals" && (
          <div>
            <Meals allProducts={value} addProduct={addProduct} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContainerMenu;
