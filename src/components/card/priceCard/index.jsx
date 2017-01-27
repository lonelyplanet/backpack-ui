import React from "react";
import { ThemeProvider } from "styled-components";
import Card from "..";

const PriceCard = (props) => (
  <ThemeProvider
    theme={{
      minHeight: "53.5rem",
    }}
  >
    <Card
      {...props}
    />
  </ThemeProvider>
);


export default PriceCard;
