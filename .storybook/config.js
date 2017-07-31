import { configure } from "@storybook/react";
import "./common.css";

function loadStories() {
  require("../stories");
}

configure(loadStories, module);
