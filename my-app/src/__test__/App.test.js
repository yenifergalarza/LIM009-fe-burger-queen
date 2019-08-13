import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
// import ReactDOM from "react-dom";
import App from "../App";

afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
