import {
  ButtonHTMLAttributes,
  ComponentType,
  FC,
  HTMLAttributes,
  ReactNode,
} from "react";
import style from "./Button.module.css";
import cn from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
  Component?: string | ComponentType<HTMLAttributes<HTMLElement>>;
  href?: string;
}

const Button: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button className={cn(style.root, className)} type='button' {...rest}>
      {children}
    </button>
  );
};

export default Button;
