import * as React from "react";

interface IButtonProps {
  href?: string;
  rounded: boolean
}

declare var Button: React.SFC<IButtonProps>;
export default Button;
