import React from "react";
import { Sizes } from "../__config__/types";

export type Size = Extract<Sizes, "sm" | "md">;

export type TagProps = {
  /** the size of the tag */
  size?: Size;

  /** (try not to) pass addition classes here */
  className?: string;

  /** the words you want to display */
  children: string | number;

  /** whether or not the tag can be dismissed*/
  isClosable?: boolean;
} & React.HTMLAttributes<HTMLSpanElement>;
