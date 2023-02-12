import styled, { css } from "styled-components";
import {
  TextInputEndIconClassName,
  TextInputIconClassName,
  TextInputStartIconClassName,
} from "./TextInput.constants";
import { TextInputSizes } from "./TextInput.types";

const Variables = css`
  --text-input-color-border: var(--ads-v2-color-border);
  --text-input-padding: var(--ads-v2-spaces-4);
  --text-input-color: var(--ads-v2-color-fg);
  --text-input-font-size: 14px;
`;

const Sizes = {
  md: css`
    --text-input-padding: var(--ads-v2-spaces-2) var(--ads-v2-spaces-3);
    --text-input-font-size: 12px;
  `,
  lg: css`
    --text-input-padding: var(--ads-v2-spaces-3);
    --text-input-font-size: 14px;
  `,
};

export const MainContainer = styled.div<{
  labelPosition?: "top" | "left";
  size?: TextInputSizes;
}>`
  ${Variables}

  display: flex;
  flex-direction: ${({ labelPosition }) =>
    labelPosition === "left" ? "row" : "column"};
  gap: ${({ labelPosition }) =>
    labelPosition === "left"
      ? "var(--ads-v2-spaces-4)"
      : "var(--ads-v2-spaces-2)"};
  align-items: baseline;
  font-family: var(--ads-v2-font-family);
  font-size: var(--text-input-font-size);

  /* Size style */
  ${({ size }) => size && Sizes[size]}
`;

export const Label = styled.label`
  color: var(--ads-v2-color-fg);

  & > span {
    color: var(--ads-v2-color-fg-error);
    margin-left: var(--ads-v2-spaces-1);
  }
`;

export const TextInputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--ads-v2-spaces-2);
`;

export const TextInputContainer = styled.div<{
  disabled?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  color: var(--text-input-color);

  & .${TextInputIconClassName} {
    position: absolute;
    padding: var(--text-input-padding);

    & > svg {
      color: inherit;
    }
  }

  & .${TextInputIconClassName}.${TextInputStartIconClassName} {
    left: 0;
  }

  & .${TextInputIconClassName}.${TextInputEndIconClassName} {
    right: 0;
  }

  ${({ disabled }) =>
    disabled &&
    `opacity: var(--ads-v2-opacity-disabled);
    cursor: not-allowed;`};
`;

export const StyledInput = styled.input<{
  isFocusVisible?: boolean;
  UNSAFE_width?: string;
  UNSAFE_height?: string;
  hasStartIcon?: boolean;
  hasEndIcon?: boolean;
  renderer?: "input" | "textarea";
  hasError?: boolean;
}>`
  background-color: var(--ads-v2-color-background);
  border: 1px solid var(--text-input-color-border);
  border-radius: var(--ads-v2-border-radius);
  font-family: var(--ads-v2-font-family);
  font-size: var(--text-input-font-size);
  color: var(--text-input-color);
  padding: var(--text-input-padding);
  box-sizing: border-box;
  width: ${({ UNSAFE_width }) => UNSAFE_width || "300px"};
  ${({ UNSAFE_height }) => UNSAFE_height && `height: ${UNSAFE_height};`}
  resize: none;

  /* adjust padding start according to icon present or not */
  ${({ hasStartIcon, renderer }) =>
    hasStartIcon &&
    renderer === "input" &&
    css`
      padding-left: calc(
        var(--text-input-padding) + var(--ads-v2-spaces-5) +
          var(--text-input-padding)
      );
    `};

  /* adjust padding end according to icon present or not */
  ${({ hasEndIcon, renderer }) =>
    hasEndIcon &&
    renderer === "input" &&
    css`
      padding-right: calc(
        var(--text-input-padding) + var(--ads-v2-spaces-5) +
          var(--text-input-padding)
      );
    `};

  &:focus:enabled {
    outline: var(--ads-v2-border-width-outline) solid
      var(--ads-v2-color-outline);
    outline-offset: var(--ads-v2-offset-outline);
  }

  &:hover:enabled {
    --text-input-color-border: var(--ads-v2-color-border-emphasis);
  }

  &:active:enabled,
  &:focus:enabled {
    --text-input-color-border: var(--ads-v2-color-border-emphasis-plus);
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({ hasError }) =>
    hasError &&
    css`
      --text-input-color-border: var(--ads-v2-color-border-error);
    `}
`;
