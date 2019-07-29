import React, { useState } from "react";
import Button from "../generic_components/button";
import SubButton from "../generic_components/subButtons";

const Breakfast = ({ allProducts, addProduct }) => {
  const [product, setProduct] = useState([...allProducts]);

  const filterSandwich = products => {
    setProduct(allProducts);
    let newArray = [];
    products.filter(element => {
      if (element.type === "sandwich") {
        newArray.push(element);
      }
      return newArray;
    });
    return setProduct(newArray);
  };

  const filterDrinks = products => {
    setProduct(allProducts);
    let newArray = [];
    products.filter(element => {
      if (element.type === "morningdrinks") {
        newArray.push(element);
      }
      return newArray;
    });
    return setProduct(newArray);
  };

  return (
    <>
      <Button
        onclick={() => {
          filterSandwich(allProducts);
        }}
        text={"SANDWICHS"}
      />

      <Button
        onclick={() => {
          filterDrinks(allProducts);
        }}
        text={"BEBIDAS"}
      />

      <SubButton productElement={product} addProduct={addProduct} />
    </>
  );
};
export default Breakfast;
