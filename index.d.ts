import * as React from "react";

type Theme =
  "base" |
  "light" |
  "dark" |
  "float" |
  "inputGroup";

interface EventWithTarget extends Event {
  target: Element;
}

interface InputProps {
  customStyles?: string[] | object[];
  fill?: boolean;
  id?: string;
  label?: string;
  name?: string;
  onChange?: (event: EventWithTarget) => void;
  size?: "tiny" | "small" | "medium" | "large" | "huge";
  theme?: Theme;
}

export var Input: React.SFC<InputProps>;
