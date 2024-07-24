import styled from "styled-components";

export const StyledSearchContainer = styled.div`
  height: 42px;
  width: 50%;
  display: flex;
  align-items: center;
  background-color: #dfecec;
  position: relative;
  cursor: text;
  border-radius: 12px;
`;

export const StyledSearchButton = styled.div`
  height: 100%;
  width: 64px;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  cursor: pointer;
  border-radius: 12px;

`;

export const StyledSearchIcon = styled.img`
  height: 80%;
`;

export const StyledPlaceholder = styled.text`
  font-size: 14px;
  color: grey;
  margin-left: 1rem;
`;