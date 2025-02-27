import React, {
  ReactNode,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import styled from "styled-components";
import { Dialog, Classes } from "@blueprintjs/core";
import Icon, { IconName, IconSize } from "Icon";
import { typography } from "Constants/typography";

type DialogProps = PropsWithChildren<{
  setMaxWidth?: boolean;
  width?: string;
  maxHeight?: string;
  maxWidth?: string;
  showHeaderUnderline?: boolean;
  noModalBodyMarginTop?: boolean;
}>;

const StyledDialog = styled(Dialog)<DialogProps>`
  && {
    border-radius: 0;
    padding: 24px;
    background: var(--ads-dialog-component-default-background-color);
    ${(props) => (props.maxHeight ? `max-height: ${props.maxHeight};` : "")}
    width: ${(props) => props.width || "640px"};
    ${(props) => props.setMaxWidth && `width: 100vh;`}
    ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}

    & .${Classes.DIALOG_HEADER} {
      position: relative;
      padding: 0;
      background: var(--ads-dialog-component-default-background-color);
      box-shadow: none;
      min-height: unset;
      svg {
        color: var(--ads-color-black-900);
      }

      .${Classes.BUTTON}.${Classes.MINIMAL}:hover {
        background-color: var(--ads-dialog-component-default-background-color);
      }
    }

    .${Classes.HEADING} {
      color: var(--ads-dialog-component-header-text-text-color);
      font-weight: ${typography.h1.fontWeight};
      font-size: ${typography.h1.fontSize}px;
      line-height: unset;
      letter-spacing: ${typography.h1.letterSpacing}px;
    }

    .${Classes.DIALOG_CLOSE_BUTTON} {
      color: var(--ads-color-black-700);
      min-width: 0;
      padding: 0;

      svg {
        fill: var(--ads-color-black-700);
        width: 24px;
        height: 24px;

        &:hover {
          fill:  var(--ads-color-black-900);;
        }
      }
    }

    ${(props) =>
      props.showHeaderUnderline
        ? `
        & .${Classes.DIALOG_HEADER}:after {
          content: "";
          width: calc(100% - 40px);
          height: 1px;
          position: absolute;
          background: white;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          background-color: var(--ads-dialog-component-dialog-header-underline-color);
        }

        .${Classes.HEADING} {
          margin-bottom: var(--ads-spaces-7);
        }
      `
        : ""}

    & .${Classes.DIALOG_BODY} {
      margin: 0;
      margin-top: ${(props) => (props.noModalBodyMarginTop ? "0px" : "16px")};
      overflow: auto;
    }

    & .${Classes.DIALOG_FOOTER_ACTIONS} {
      display: block;
    }
  }
`;

const HeaderIconWrapper = styled.div<{ bgColor?: string }>`
  padding: 5px;
  border-radius: 50%;
  margin-right: 10px;
  background: ${(props) =>
    props.bgColor || "var(--ads-dialog-component-icon-background-color)"};
  cursor: default;
  .cs-icon svg {
    cursor: default;
  }
`;

type DialogComponentProps = {
  isOpen?: boolean;
  canOutsideClickClose?: boolean;
  title?: string;
  headerIcon?: {
    clickable?: boolean;
    name: IconName;
    fillColor?: string;
    hoverColor?: string;
    bgColor?: string;
  };
  trigger?: ReactNode;
  setMaxWidth?: boolean;
  children: ReactNode;
  width?: string;
  maxHeight?: string;
  onOpening?: () => void;
  onClose?: () => void;
  setModalClose?: (close: boolean) => void;
  triggerZIndex?: number;
  showHeaderUnderline?: boolean;
  getHeader?: () => ReactNode;
  canEscapeKeyClose?: boolean;
  className?: string;
  maxWidth?: string;
  noModalBodyMarginTop?: boolean;
};

export function DialogComponent(props: DialogComponentProps) {
  const [isOpen, setIsOpen] = useState(!!props.isOpen);

  const { onClose: onCloseProp, onOpening, setModalClose } = props;
  const onClose = () => {
    setModalClose ? setModalClose(false) : null;
    setIsOpen(false);
    onCloseProp && onCloseProp();
  };

  useEffect(() => {
    setIsOpen(!!props.isOpen);
  }, [props.isOpen]);

  const getHeader = props.getHeader;
  const headerIcon = props.headerIcon ? (
    <HeaderIconWrapper bgColor={props.headerIcon.bgColor}>
      <Icon
        clickable={props.headerIcon?.clickable}
        fillColor={props.headerIcon.fillColor}
        hoverFillColor={props.headerIcon.hoverColor}
        name={props.headerIcon.name}
        size={IconSize.XL}
      />
    </HeaderIconWrapper>
  ) : null;

  return (
    <>
      {props.trigger && (
        <div
          className="ads-dialog-trigger"
          onClick={() => {
            setIsOpen(true);
          }}
          style={{ zIndex: props.triggerZIndex }}
        >
          {props.trigger}
        </div>
      )}
      <StyledDialog
        canEscapeKeyClose={!!props.canEscapeKeyClose}
        canOutsideClickClose={!!props.canOutsideClickClose}
        className={props.className}
        icon={headerIcon}
        isOpen={isOpen}
        maxHeight={props.maxHeight}
        maxWidth={props.maxWidth}
        noModalBodyMarginTop={props.noModalBodyMarginTop}
        onClose={onClose}
        onOpening={onOpening}
        setMaxWidth={props.setMaxWidth}
        showHeaderUnderline={props.showHeaderUnderline}
        title={props.title}
        width={props.width}
      >
        {getHeader && getHeader()}
        <div className={Classes.DIALOG_BODY} data-testid="t--dialog-component">
          {props.children}
        </div>
      </StyledDialog>
    </>
  );
}

export default DialogComponent;
