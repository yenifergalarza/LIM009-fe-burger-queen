import React, { useState } from "react";
import ProductList from "./productList.jsx";
import ContainerMenu from "./containerMenu.jsx";


const MenuView = () => {
  const [products, setProducts] = useState([]);


  //Añadir productos a la lista
  const addProduct = (id, title, price, counter) => {
  
    const newProducts = [...products, { id, title, price, counter }];
    setProducts(newProducts);
  };
  //Aumentar contidad de productos de la lista
  const addToCart = id => {
    products.forEach(prod => {
      if (prod.id === id) {
        return (prod.counter = prod.counter + 1);
      }
    });

    console.log(products);

    setProducts(products);
    return products;
  };

  //Disminuir cantidad de productos de la lista
  const removeFromCart = id => {
    products.forEach(prod => {
      if (prod.id === id && prod.counter > 0) {
        return (prod.counter = prod.counter - 1);
      }
    });

    console.log(products);

    setProducts(products);
    return products;
  };

  //Eliminar producto de la lista
  const deleteFromCart = id => {
    products.forEach((prod, index) => {
      if (prod.id === id) {
        return products.splice(products[index], 1);
      }

    });
    console.log(products);
    setProducts(products)
    return products;
  };

  //Suma de todos los elementos de la matriz
  const getTotal = (products) => {
    let emptyArray = [];
    let emptyArrayContent = 0;
    products.forEach(prod => {

      return (emptyArray.push(prod.counter * prod.price));
    });

    emptyArray.forEach(prod => {
      return emptyArrayContent += prod
    })
    return emptyArrayContent;
  };


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
          getTotal={getTotal}
        />
      </div>
    </>
  );
};

export default MenuView;
