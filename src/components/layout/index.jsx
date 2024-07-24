import React from "react";
import { StyledLayout } from "./layout.styled";
import Header from "../header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <StyledLayout>{children}</StyledLayout>
    </>
  );
};
export default Layout;
