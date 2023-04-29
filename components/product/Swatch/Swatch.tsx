import { FC } from "react";
import style from "./Swatch.module.css";

interface Props {
  color?: string;
  label?: string;
  variant?: string;
  onClick: () => void;
}

const Swatch: FC<Props> = ({ color, label, variant, ...rest }) => {
  label = label?.toLowerCase();
  variant = variant?.toLowerCase();
  return (
    <button
      style={color ? { backgroundColor: color } : {}}
      className={style.root}
      {...rest}
    >
      {variant !== "color" ? label : null}
    </button>
  );
};

export default Swatch;
