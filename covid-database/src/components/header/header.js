import React from "react";
import { HeaderContainer, Text } from "./headerStyle";

const Header = (props) => {
  return (
    <HeaderContainer>
      <Text>{props.title}</Text>
    </HeaderContainer>
  );
}

export default Header;