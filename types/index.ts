import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export interface CustomBtnProps {
  title: string;
  styledClasses?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface searchProps {
  search: string;
  setSearch: (search: string) => void;
}
