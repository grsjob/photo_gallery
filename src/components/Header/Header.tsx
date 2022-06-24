import React from "react";
import { StyledHeader, StyledMainTitle } from "./stylesHeader";

const Header = () => {
  return (
    <StyledHeader>
      <StyledMainTitle className="app-title">
        <span>P</span>hoto <span>G</span>allery
      </StyledMainTitle>
    </StyledHeader>
  );
};

export default Header;
