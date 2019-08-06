import React, { useState } from "react";
import ProductList from "./productList.jsx";
import ContainerMenu from "./containerMenu.jsx";
import { useCollection } from "react-firebase-hooks/firestore";

import { app } from "../../config/firebase";
const MenuView = () => {
  const [products, setProducts] = useState([]);

  //Añadir productos a la lista
  const addProduct = (id, title, price, counter) => {
    const newProducts = [...products, { id, title, price, counter }];
    setProducts(newProducts);
  };
  //Aumentar contidad de productos de la lista
  const addToCart = id => {
    let productsNew = [...products];
    productsNew.forEach(prod => {
      if (prod.id === id) {
        return (prod.counter = prod.counter + 1);
      }
    });

    console.log(productsNew);

    setProducts(productsNew);
    return products;
  };

  //Disminuir cantidad de productos de la lista
  const removeFromCart = id => {
    let productsNew = [...products];
    productsNew.forEach(prod => {
      if (prod.id === id && prod.counter > 0) {
        return (prod.counter = prod.counter - 1);
      }
    });

    console.log(productsNew);

    setProducts(productsNew);
    return products;
  };

  //Eliminar producto de la lista
  const deleteFromCart = id => {
    let productsNew = [...products];
    productsNew.forEach((prod, index) => {
      if (prod.id === id) {
        return productsNew.splice(productsNew[index], 1);
      }
    });
    console.log(productsNew);
    setProducts(productsNew);
    return products;
  };

  //Suma de todos los elementos de la matriz
  const getTotal = products => {
    let emptyArray = [];
    let emptyArrayContent = 0;
    products.forEach(prod => {
      return emptyArray.push(prod.counter * prod.price);
    });

    emptyArray.forEach(prod => {
      return (emptyArrayContent += prod);
    });
    return emptyArrayContent;
  };
  let DB = app.firestore().collection("pedidos");

  const [value, loading, error] = useCollection(DB, {
    snapshotListenOptions: { includeMetadataChanges: true }
  });

  const sendOrders = products => {
    console.log("entre a firebase", products);
    DB.add({
      name: "juana",
      cart: products,
      status: "pending",
      time: ""
    });
  };

  return (
    <>
      <p>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Document: Loading...</span>}
        {value && (
          <span>
         
            {value.docs.map(doc => (
              <React.Fragment key={doc.id}>
                {JSON.stringify(doc.data())},{" "}
              </React.Fragment>
            ))}
          </span>
        )}
      </p>

      <div className="columns container is-fluid">
        <ContainerMenu addProduct={addProduct} />
        <ProductList
          products={products}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          deleteFromCart={deleteFromCart}
          getTotal={getTotal}
          sendOrders={sendOrders}
        ></ProductList>
      </div>
    </>
  );
};

export default MenuView;
