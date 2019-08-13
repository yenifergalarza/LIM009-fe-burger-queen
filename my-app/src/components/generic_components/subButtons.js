import React from "react";
import Button from "./button";

const SubButton = ({ productElement, addProduct }) => {
  if (productElement.length === 18) {
    return <></>;
  }
  return (
    <div
      data-testid="subbuttontag"
      className="tile is-child buttons is-12 is-centered columns is-mobile"
    >
      {productElement.map(individualProduct => {
        return (
          <Button
            key={individualProduct}
            classOfComponent={"button is-outlined "}
            onclick={() => {
              addProduct(
                individualProduct.id,
                individualProduct.title,
                individualProduct.price,
                (individualProduct.counter = 1)
              );
            }}
            text={individualProduct.title}
          />
        );
      })}
    </div>
  );
};

export default SubButton;
