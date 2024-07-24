import React from "react";
import SearchBar from "../../components/searchBar";
import {
  StyledHomeLayout,
} from "./home.styled";
import Filter from "../../components/filter";
import Table from "../../components/table";

const HomeContainer = () => {
  return (
    <StyledHomeLayout>
      <SearchBar />
      <Filter />
      <Table />
    </StyledHomeLayout>
  );
};

export default HomeContainer;
