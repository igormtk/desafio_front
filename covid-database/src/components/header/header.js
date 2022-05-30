import React from "react";
import { Headers, Text } from "./headerStyle";

const Header = ({ title }) => {
  return (
    <Headers>
      <Text>{title}</Text>
    </Headers>
  );
};

export default Header;