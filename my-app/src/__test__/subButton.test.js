import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import SubButton from "../components/generic_components/subButtons";

afterEach(cleanup);

const products = [
  [
    { id: 1, title: "uno", price: 11, counter: 1 },
    { id: 2, title: "dos", price: 22, counter: 2 }
  ]
];

const addProd = jest.fn((id, title, price, counter) => {
  const newProducts = [{ id, title, price, counter }];
  return newProducts;
});

test("renders", () => {
  const { asFragment } = render(
    <SubButton productElement={products} addProduct={addProd} />
  );

  const firtsRender = asFragment();
  expect(firtsRender).toMatchSnapshot();
});

test("", () => {
  const { getByTestId } = render(
    <SubButton productElement={products} addProduct={addProd} />
  );

  const ancestor = getByTestId("subbuttontag");
  const descendant = getByTestId("buttontag");

  expect(ancestor).toContainElement(descendant);

});