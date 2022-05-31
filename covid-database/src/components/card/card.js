import React from "react";
import { CardContainer } from "./cardStyle";

const Card = (props) => {
  return (
    <CardContainer>
      <h2>{props.name}</h2>
      <h2>{props.info}</h2>
    </CardContainer>
  );
};

export default Card;