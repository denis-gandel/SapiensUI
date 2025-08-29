import React, { MouseEventHandler } from "react";
import styled from "styled-components";

export type ButtonProps = {
  text?: string;
  variant?: "primary" | "secondary" | "link";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  border: ${(props) =>
    props.variant === "secondary" ? "1px solid #ff6900" : "none"};
  line-height: 1;
  font-size: 18px;
  cursor: pointer;
  border-radius: 2rem;
  display: inline-block;
  color: ${(props) =>
    props.variant === "secondary"
      ? "#ff6900"
      : props.variant === "link"
        ? "#2b7fff"
        : "#fff"};
  background-color: ${(props) =>
    props.variant === "primary" ? "#2b7fff" : "transparent"};
  text-decoration: ${(props) => props.variant === "link" && "underline"};

  &:hover {
    color: ${(props) => props.variant === "secondary" && "#fff"};
    background-color: ${(props) =>
      props.variant === "primary"
        ? "#155dfc"
        : props.variant === "secondary"
          ? "#f54a00"
          : "transparent"};
  }
`;

const Button: React.FC<ButtonProps> = ({
  text,
  variant,
  disabled,
  onClick,
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      variant={variant}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
