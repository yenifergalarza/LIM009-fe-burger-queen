import React, { useState } from "react";
import ProductList from "./productList.jsx";
import ContainerMenu from "./containerMenu.jsx";
import Total from "./total";

import dataProducts from "../../data";
const MenuView = () => {
  const [products, setProducts] = useState([]);
  const [addedIds, setAddedIds] = useState([]);
  const [quantityById, setQuantityById] = useState({});

  //Añadir productos a la lista
  const addProduct = (id, title, price) => {
    const newProducts = [...products1, { id, title, price }];
    setProducts(newProducts);
  };
  //Aumentar contidad de productos de la lista
  const addToCart = id => {
    const product = products.find(prod => prod.id === id);

    const newAddedIDs = addedIds.find(prodId => prodId === id)
      ? addedIds
      : addedIds.concat(product.id);
    const newQuantityByID = {
      ...quantityById,
      [id]: (quantityById[id] || 0) + 1
    };
    setQuantityById(newQuantityByID);
    setAddedIds(newAddedIDs);
    return [addedIds, quantityById];
  };

  //Disminuir cantidad de productos de la lista
  const removeFromCart = id => {
    if (quantityById[id]) {
      const newQuantityByID = {
        ...quantityById,
        [id]: quantityById[id] > 1 ? quantityById[id] - 1 : undefined
      };
      const newAddedIDs = newQuantityByID[id]
        ? addedIds
        : addedIds.filter(prodId => prodId !== id);
      setAddedIds(newAddedIDs);
      setQuantityById(newQuantityByID);
    }
    return [addedIds, quantityById];
  };

  //Eliminar producto de la lista
  const deleteFromCart = id => {
    if (quantityById[id]) {
      const newQuantityByID = {
        ...quantityById,
        [id]: undefined
      };
      const newAddedIDs = addedIds.filter(prodId => prodId !== id);
      setAddedIds(newAddedIDs);
      setQuantityById(newQuantityByID);
    }
    return [addedIds, quantityById];
  };

  //Suma de todos los elementos de la matriz
  const getTotal = (products, addedIds, quantityById) => {
    return addedIds.reduce(
      (res, productId) =>
        res +
        products.find(prod => prod.id === productId).price *
          (quantityById[productId] || 0),
      0
    );
  };

  const total = getTotal(products, addedIds, quantityById);

  return (
    <>
      <h1>Hello from MenuView</h1>
      <div className="columns container is-fluid">
      <ContainerMenu addProduct={addProduct} />
      <ProductList
        products={products}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        deleteFromCart={deleteFromCart}
      />
      <Total total={total} />
      </div>
    </>
  );
};

export default MenuView;
