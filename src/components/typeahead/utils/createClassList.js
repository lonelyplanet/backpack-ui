import cn from "classnames";
import defaultClassNames from "./classNames";

export default function createClassList(className, key, disabled) {
  const classNameKey = defaultClassNames[key];

  const classList = {
    [classNameKey]: !disabled,
  };

  classList[className] = !!className;

  return cn(classList);
}
