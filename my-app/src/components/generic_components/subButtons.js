import React from "react";
import Button from "./button";

const SubButton = ({ productElement, fun }) => {
  if (productElement.length === 18) {
    return <></>;
  }
  return (
    <div className="tile is-child buttons is-12 is-centered columns is-mobile">
      {productElement.map(function(individualProduct) {
        return (
          <Button
            className="button is-outlined column"
            onclick={() => {
              console.log("chikiout");
            }}
            text={individualProduct.title}
          />
        );
      })}
    </div>
  );
};

export default SubButton;
