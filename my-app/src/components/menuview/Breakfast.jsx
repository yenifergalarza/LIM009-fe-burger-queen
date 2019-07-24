import React, { useState } from "react";
import Button from "../generic_components/button";
import SubButton from "../generic_components/subButtons";
import dataProducts from "../../data";

const Breakfast = () => {
  const [stateProducts] = useState(dataProducts);
  const state = stateProducts;
  const [product, setProduct] = useState(state);

  const filterSandwich = products => {
    setProduct(state);
    let newArray = [];
    products.filter(element => {
      if (element.type === "sandwich") {
        newArray.push(element);
      }
      return newArray;
    });
    console.log(newArray);
    return setProduct(newArray);
  };

  const filterDrinks = products => {
    setProduct(state);
    let newArray = [];
    products.filter(element => {
      if (element.type === "morningdrinks") {
        newArray.push(element);
      }
      return newArray;
    });
    console.log(newArray);
    return setProduct(newArray);
  };

  return (
    <>
      <Button
        onclick={() => {
          filterSandwich(state);
        }}
        text={"SANDWICHS"}
      />

      <Button
        onclick={() => {
          filterDrinks(state);
        }}
        text={"BEBIDAS"}
      />

      <SubButton productElement={product} />
    </>
  );
};

export default Breakfast;
