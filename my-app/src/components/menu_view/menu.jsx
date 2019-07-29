import React, { useState } from "react";
import ProductList from "./productList.jsx";
import ContainerMenu from "./containerMenu.jsx";

const MenuView = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (id, title, price) => {
    const newProducts = [...products, { id, title, price }];
    setProducts(newProducts);
  };

  return (
    <>
      <h1>Hello from MenuView</h1>
      <div className="columns container is-fluid">
      <ContainerMenu addProduct={addProduct} />
      <ProductList products={products} /></div>
    </>
  );
};

export default MenuView;
