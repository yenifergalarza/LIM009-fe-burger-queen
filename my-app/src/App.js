import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
// import dataProducts from "./data";
import NavBar from "./components/navBar";
import MenuView from "./components/menu_view/menu";
import KitchenView from "./components/kitchen_view/kitchen";
import HistoryView from "./components/history_view/orders_history";
import Default from "./components/default";

// const formatNumber = number =>
//   new Intl.NumberFormat("en-US", {
//     mininumFractionDigits: 2,
//     maximunFractionDigits: 2
//   }).format(number);

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={MenuView} />
        <Route path="/cocina" component={KitchenView} />
        <Route path="/historial" component={HistoryView} />
        <Route component={Default} />
      </Switch>
    </>
  );
};

// class App extends Component {
//   state = {
//     addedIds: [],
//     quantityById: {},
//     products: dataProducts,
//     show: []
//   };

//   addToCart = id => {
//     const { addedIds, quantityById, products } = this.state;
//     const product = products.find(prod => prod.id === id);
//     const available = 1;
//     if (available > 0) {
//       const newAddedIds = addedIds.find(prodId => prodId === id)
//         ? addedIds
//         : addedIds.concat(product.id);
//       const newQuantityById = {
//         ...quantityById,
//         [id]: (quantityById[id] || 0) + 1
//       };
//       this.setState({ addedIds: newAddedIds, quantityById: newQuantityById });
//     }
//   };

//   show;
//   removeFromCart = id => {
//     const { addedIds, quantityById } = this.state;
//     if (quantityById[id]) {
//       const newQuantityById = {
//         ...quantityById,
//         [id]: quantityById[id] > 1 ? quantityById[id] - 1 : undefined
//       };
//       const newAddedIds = newQuantityById[id]
//         ? addedIds
//         : addedIds.filter(prodId => prodId !== id);
//       this.setState({ addedIds: newAddedIds, quantityById: newQuantityById });
//     }
//   };
//   deleteFromCart = id => {
//     const { addedIds, quantityById } = this.state;
//     if (quantityById[id]) {
//       const newQuantityById = {
//         ...quantityById,
//         [id]: undefined
//       };
//       const newAddedIds = addedIds.filter(prodId => prodId !== id);
//       this.setState({ addedIds: newAddedIds, quantityById: newQuantityById });
//     }
//   };
//   getAvailable = (products, quantityById) => {
//     return products.reduce(
//       (res, product) => ({
//         ...res,
//         [product.id]: quantityById[product.id] || 0
//       }),
//       {}
//     );
//   };
//   getTotal = (products, addedIds, quantityById) => {
//     return addedIds.reduce(
//       (res, productId) =>
//         res +
//         products.find(prod => prod.id === productId).price *
//           (quantityById[productId] || 0),
//       0
//     );
//   };

//   render() {
//     const { products, quantityById, addedIds } = this.state;
//     const available = this.getAvailable(products, quantityById);
//     const total = this.getTotal(products, addedIds, quantityById);
//     return (
//       <Fragment>
//         <NavBar total={formatNumber(total)} />
//         <section className="tile is-ancestor  pd-prodlist is-12 spaceEvenly">
//           <ContainerMenu />
//           <ProductList
//             available={available}
//             products={dataProducts}
//             addToCart={this.addToCart}
//             removeFromCart={this.removeFromCart}
//             deleteFromCart={this.deleteFromCart}
//           />
//         </section>
//       </Fragment>
//     );
//   }
// }

export default App;
