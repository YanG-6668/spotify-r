import React from 'react';
import './Button.sass';

type Props = {
  title?: string,
  buttonClass: string,
  icon?: any,
  onClick?: () => void,
}

const Button: React.FunctionComponent<Props> = ({ title, onClick, buttonClass, icon }) => {
  return (
    <button
      className={`button ${buttonClass}`}
      onClick={onClick}>
      {icon}{title}
    </button>
  );
}

export default Button;
