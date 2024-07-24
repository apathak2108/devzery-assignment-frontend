import React from "react";
import {
  StyledPlaceholder,
  StyledSearchButton,
  StyledSearchContainer,
  StyledSearchIcon,
} from "./searchBar.styled";
import STRINGS from "../../constants/strings";

const SearchBar = () => {
  return (
    <StyledSearchContainer>
      <StyledPlaceholder>{STRINGS.SEARCH_PLACEHOLDER}</StyledPlaceholder>
      <StyledSearchButton>
        <StyledSearchIcon
          src={STRINGS.SEACRH_ICON_SRC}
          alt={STRINGS.SEARCH_ICON_ALT}
        />
      </StyledSearchButton>
    </StyledSearchContainer>
  );
};

export default SearchBar;
