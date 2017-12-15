import * as React from "react";

interface IAdProps {
  id?: string;
  framed?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export var Ad: React.SFC<IAdProps>;

interface IAdLazyLoaderProps {
  id: string;
  framed: boolean;
  lazyLoadOffset: string | number;
  className: string;
  style: React.CSSProperties;
}

export var AdLazyLoader: React.SFC<IAdLazyLoaderProps>;

interface IAmenitiesProps {
  items?: {
    title: string,
  }[];
  columns?: 1 | 2 | 3 | 4;
  listType?: "single" | "grouped";
}

export var Amenities: React.SFC<IAmenitiesProps>;

interface IArticleAuthorProps {
  name?: string;
  title?: string;
  href?: string;
  avatarSrc?: string;
  orientation?: string;
  style?: React.CSSProperties;
}

export var ArticleAuthor: React.SFC<IArticleAuthorProps>;

interface IButtonProps {
  href?: string;
  children?: any;
  onClick?: (e?) => void;
  color?: "blue" | "white" | "gray" | "transparent";
  size?: "tiny" | "small" | "medium" | "large" | "huge";
  rounded?: boolean;
  full?: boolean;
  customStyles?: React.CSSProperties;
  border?: boolean;
  disabled?: boolean;
}

export var Button: React.SFC<IButtonProps>;

interface IHeadingProps {
  children?: any,
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "huge" | "large" | "medium" | "small" | "tiny";
  weight?: "thick" | "normal" | "thin" | "extraThin";
  importance?: "alert" | "high" | "normal" | "low";
  tracking?: "tight" | "normal" | "loose";
  truncate?: boolean;
  caps?: boolean;
  override?: React.CSSProperties;
}

export var Heading: React.SFC<IHeadingProps>;

interface ICalloutLinkProps {
  children?: string;
  href?: string;
  overlay?: boolean;
  style?: React.CSSProperties;
}

export var CalloutLink: React.SFC<ICalloutLinkProps>;

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


interface IContainerProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

export var Container: React.SFC<IContainerProps>;
