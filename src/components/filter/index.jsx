import React from "react";
import { StyledFilterContainer, StyledFilterIcon } from "./filter.styled";

const Filter = () => {
  return (
    <StyledFilterContainer>
      <span>Filter</span>
      <StyledFilterIcon
        src="https://img.icons8.com/?size=100&id=10751&format=png&color=000000"
        alt="filter-icon"
      />
    </StyledFilterContainer>
  );
};

export default Filter;
