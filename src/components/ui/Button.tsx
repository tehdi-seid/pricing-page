import { clsx } from "clsx";
import React, { type JSX } from "react";

export type buttonProps = {
  text: string;
  isMonthly?: boolean;

  onClick?: () => void;
};

function Button({ text, onClick, isMonthly }: buttonProps): JSX.Element {
  return (
    <div>
      <button
        className={clsx(`cursor-pointer px-3 py-1.5 rounded-full
          
          ${isMonthly ? "bg-gray-500" : ""}
          `)}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
