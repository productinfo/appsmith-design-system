import React from "react";
import { useCheckbox } from "@react-aria/checkbox";
import { useToggleState } from "react-stately";
import { useFocusRing } from "@react-aria/focus";

import { CheckboxProps } from "./Checkbox.types";
import { StyledCheckbox } from "./Checkbox.styles";

function Checkbox(props: CheckboxProps) {
  const { children, isDisabled, isIndeterminate } = props;
  const state = useToggleState(props);
  const ref = React.useRef(null);
  const { inputProps } = useCheckbox(props, state, ref);
  const { focusProps, isFocusVisible } = useFocusRing();
  const id = `ads-checkbox-${props.value}`;

  return (
    <StyledCheckbox
      isChecked={state.isSelected}
      isDisabled={isDisabled}
      isFocusVisible={isFocusVisible}
      isIndeterminate={isIndeterminate || false}
    >
      <input {...inputProps} {...focusProps} id={id} ref={ref} />
      <label htmlFor={id}>{children}</label>
    </StyledCheckbox>
  );
}

Checkbox.displayName = "Checkbox";

Checkbox.defaultProps = {};

export { Checkbox };
