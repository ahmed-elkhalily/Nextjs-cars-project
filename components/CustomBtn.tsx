import React from "react";
import { CustomBtnProps } from "@/types";

const CustomBtn = ({
  title,
  styledClasses,
  handleClick,
  btnType,
}: CustomBtnProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${styledClasses}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomBtn;
