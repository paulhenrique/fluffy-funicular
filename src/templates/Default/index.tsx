import { Container } from "@mui/material";
import React, { FC, ReactNode } from "react";
import AppBar from "../../components/AppBar";

const DefaultTemplate: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Container>{children}</Container>
    </div>
  );
};

export default DefaultTemplate;
