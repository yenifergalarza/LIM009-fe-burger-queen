import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import Button from "../components/generic_components/button";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Button text="Testing" />);
  const firstRender = asFragment();
  expect(firstRender).toMatchSnapshot();
});

const testClick = jest.fn(() => {
  return <p>You Clicked</p>;
});

it("insert text in button", () => {
  const { getByTestId, getByText } = render(
    <Button text="Testing" onclick={testClick} className={"none"} />
  );
  expect(getByTestId("buttontag")).toHaveTextContent(/Testing/i);
  expect(getByText("Testing")).not.toHaveClass("none");

  fireEvent.click(getByTestId("buttontag"));
});
