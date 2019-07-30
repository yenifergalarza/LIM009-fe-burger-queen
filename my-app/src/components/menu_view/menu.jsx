import React, { useState } from "react";
import ProductList from "./productList.jsx";
import ContainerMenu from "./containerMenu.jsx";

import dataProducts from "../../data";
const MenuView = () => {
 
  const [products1, setProducts] = useState([]);

  const addProduct = (id, title, price) => {
    const newProducts = [...products1, { id, title, price }];
    setProducts(newProducts);
  };
  const [addedIds, setAddedIds] = useState([]);
    const [quantityById, setQuantityById] = useState({});
    const [products] = useState(dataProducts);

  const addToCart = id => {
    const product = products.find(prod => prod.id === id);

    const newAddedIds = addedIds.find(prodId => prodId === id)
      ? addedIds
      : addedIds.concat(product.id);
    const newQuantityById = {
      ...quantityById,
      [id]: (quantityById[id] || 0) + 1
    };
    setQuantityById(newQuantityById);
    setAddedIds(newAddedIds);

    return [addedIds, quantityById];

  };

  const removeFromCart = id => {
    if (quantityById[id]) {
      const newQuantityById = {
        ...quantityById,
        [id]: quantityById[id] > 1 ? quantityById[id] - 1 : undefined
      };
      const newAddedIds = newQuantityById[id]
        ? addedIds
        : addedIds.filter(prodId => prodId !== id);
      setAddedIds(newAddedIds);
      setQuantityById(newQuantityById);
    }
    return [addedIds, quantityById];
  };
  const deleteFromCart = id => {
    if (quantityById[id]) {
      const newQuantityById = {
        ...quantityById,
        [id]: undefined
      };
      const newAddedIds = addedIds.filter(prodId => prodId !== id);
      setAddedIds(newAddedIds);
      setQuantityById(newQuantityById);
    }
    return [addedIds, quantityById];
  };
    const getAvailable = (products, quantityById) => {
    return products.reduce(
      (res, product) => ({
        ...res,
        [product.id]: quantityById[product.id] || 0
      }),
      {}
    );
  };
  const getTotal = (products, addedIds, quantityById) => {
    return addedIds.reduce(
      (res, productId) =>
        res +
        products.find(prod => prod.id === productId).price *
          (quantityById[productId] || 0),
      0
    );
  };

  // const { products, quantityById, addedIds } = state;
  const available = getAvailable(products, quantityById);
  const total = getTotal(products, addedIds, quantityById);

  return (
    <>
      <h1>Hello from MenuView</h1>
      <div className="columns container is-fluid">
      <ContainerMenu addProduct={addProduct} />

      <ProductList products={products1} addToCart={addToCart} available={available}  removeFromCart ={removeFromCart} deleteFromCart={deleteFromCart}  total={total}/></div>
    </>
  );
};

export default MenuView;
