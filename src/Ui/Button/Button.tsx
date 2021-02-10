import React from "react";
import classNames from "classnames";
import "./Button.sass";
interface ButtonProps {
  title?: string;
  color: "light" | "dark";
  icon?: any;
  onClick?: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  title,
  onClick,
  color,
  icon,
}) => {
  const btnClass = classNames("button", `button-${color}`);
  return (
    <button className={btnClass} onClick={onClick}>
      {icon}
      {title}
    </button>
  );
};

export default Button;
