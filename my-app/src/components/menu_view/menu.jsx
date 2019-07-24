import React, { useState } from "react";
import ProductList from "./productList.jsx";
import ContainerMenu from "./containerMenu.jsx";

const MenuView = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (id) => {
    const newProducts = [...products, { id }]
    setProducts(newProducts);
  };

  return (
    <>
      <h1>Hello from MenuView</h1>
      <ContainerMenu addProduct={addProduct} />
      <ProductList products={products} />
    </>
  );
};

export default MenuView;
