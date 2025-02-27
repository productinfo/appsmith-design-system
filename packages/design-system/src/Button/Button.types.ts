import React from "react";
import { Sizes } from "__config__/types";

// Button types
export type Kind = "primary" | "secondary" | "tertiary" | "error";

// Button sizes
export type ButtonSizes = Extract<Sizes, "sm" | "md">;

// Button props
export type ButtonProps = {
  /** The HTML element to render the button as. */
  renderAs?: "button" | "a";
  /** The class name to apply to the button component. */
  className?: string;
  children?: React.ReactNode | string;
  /** Whether the button should display a loading spinner. */
  isLoading?: boolean;
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** Whether the button contains only an icon or not. If true, only pass the icon value to startIcon. */
  isIconButton?: boolean;
  /** The visual style to apply to the button. */
  kind?: Kind;
  /** The size of the button. */
  size?: ButtonSizes;
  /** The icon to display before the button text. Pass name of the icon from remix-icon library(eg: home-2-line) or an svg icon. */
  startIcon?: string;
  /** The icon to display after the button text. Pass name of the icon from remix-icon library(eg: home-2-line) or an svg icon. */
  endIcon?: string;
  /** The height of the button. Accepts all css units. */
  UNSAFE_height?: string;
  /** The width of the button. Accepts all css units. */
  UNSAFE_width?: string;
  /** The href attribute to apply to the button if it renders as an anchor. */
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
