import React, { useState, useEffect } from "react";
import Meals from "./meals";
import Breakfast from "./breakfast";
import { useCollection } from "react-firebase-hooks/firestore";
import { productsData } from "../../services/firebase";

const ContainerMenu = ({ addProduct }) => {
  const [productsDb, setProductsDb] = useState([]);

  useEffect(() => {
    productsData.onSnapshot(snap => {
      let products = [];
      snap.forEach(doc => {
        products.push(doc.data());
      });
      console.log(products);
      setProductsDb(products);
    });
  }, []);
  /* const comn = value.docs.map(doc => (doc)); */
  /* const [com,setCom] =useState(value); */
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
            <Breakfast allProducts={productsDb} addProduct={addProduct} />
          </div>
        )}

        {state === "AllMeals" && (
          <div>
            <Meals allProducts={productsDb} addProduct={addProduct} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContainerMenu;
