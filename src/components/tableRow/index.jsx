import React from "react";
import { StyledTableRowContainer } from "./tableRow.styled";
import Select from "react-select";

const options = [
  { value: "pass", label: "PASS" },
  { value: "fail", label: "FAIL" },
];

const TableRow = () => {
  return (
    <StyledTableRowContainer>
      <span>Test Case One</span>
      <span>5 Minutes</span>
      <span>Onboarding</span>
      <span>Low</span>
      <span>
        <Select options={options} />
      </span>
    </StyledTableRowContainer>
  );
};

export default TableRow;
