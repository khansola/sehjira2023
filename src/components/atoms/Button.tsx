import React from "react";

type Props = {
  action?: (e: React.MouseEvent) => void;
  title: string;
  style?: string;
};

const Button = (props: Props) => {
  return (
    <button
      className={`${props.style}`}
      onClick={(e) => {
        props.action;
      }}
    >
      {props.title}
    </button>
  );
};

export default Button;
