import React from "react";
import { ThemeProvider } from "styled-components";
import Card from "..";

const TourCard = (props) => (
  <ThemeProvider
    theme={{
      fullBleed: false,
    }}
  >
    <Card
      {...props}
    />
  </ThemeProvider>
);


export default TourCard;
