import React from "react";
import { StyledTableContainer, StyledTableHeader } from "./table.styled";
import TableRow from "../tableRow";
import Select from "react-select";

const options = [
  { value: "pass", label: "PASS" },
  { value: "fail", label: "FAIL" },
];

const Table = () => {
  return (
    <StyledTableContainer>
      <tbody>
        <StyledTableHeader>
          <td>Test Case Name</td>
          <td>Estimate Time</td>
          <td>Module</td>
          <td>Priority</td>
          <td>Status</td>
        </StyledTableHeader>
        <tr>
          <td>Test Case One</td>
          <td>5 minutes</td>
          <td>Onboarding</td>
          <td>Low</td>
          <td>
            <Select options={options} />
          </td>
        </tr>
      </tbody>
    </StyledTableContainer>
  );
};

export default Table;
