import React from "react";
import { ThemeProvider } from "styled-components";
import Card from "../card";

const CardPrice = (props) => (
  <ThemeProvider
    theme={{
      minHeight: "535px",
    }}
  >
    <Card
      {...props}
    />
  </ThemeProvider>
);

export default CardPrice;
