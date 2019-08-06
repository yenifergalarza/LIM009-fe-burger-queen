import React, { useState } from "react";
import Meals from "./meals";
import Breakfast from "./breakfast";
import dataProducts from "../../data";

const ContainerMenu = ({ addProduct }) => {
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
            <Breakfast allProducts={dataProducts} addProduct={addProduct} />
          </div>
        )}

        {state === "AllMeals" && (
          <div>
            <Meals allProducts={dataProducts} addProduct={addProduct} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContainerMenu;
