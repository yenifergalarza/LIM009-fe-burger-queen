import React, { useState } from "react";
import Button from "../generic_components/button";
import SubButton from "../generic_components/subButtons.js";

const Meals = ({ allProducts, addProduct }) => {
  const [product, setProduct] = useState([...allProducts]);

  const filterBurguer = products => {
    setProduct(allProducts);
    let newArray = [];
    products.filter(element => {
      if (element.type === "burguer") {
        newArray.push(element);
      }
      return newArray;
    });
    console.log(newArray);
    return setProduct(newArray);
  };

  const filterAdditionals = products => {
    setProduct(allProducts);
    let newArray = [];
    products.filter(element => {
      if (element.type === "additional") {
        newArray.push(element);
      }
      return newArray;
    });
    console.log(newArray);
    return setProduct(newArray);
  };

  const filterDrinks = products => {
    setProduct(allProducts);
    let newArray = [];
    products.filter(element => {
      if (element.type === "drinks") {
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
          filterBurguer(allProducts);
        }}
        text={"HAMBURGUESAS"}
      />

      <Button
        onclick={() => {
          filterAdditionals(allProducts);
        }}
        text={"ACOMPAÑAMIENTOS"}
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
export default Meals;
