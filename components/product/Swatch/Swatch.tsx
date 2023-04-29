import { FC } from "react";
import style from "./Swatch.module.css";

interface Props {
  color?: string;
  label?: string;
  variant?: string;
}

const Swatch: FC<Props> = ({ color, label, variant }) => {
  label = label?.toLowerCase();
  variant = variant?.toLowerCase();
  console.log(variant);
  console.log(color);
  return (
    <button
      style={color ? { backgroundColor: color } : {}}
      className={style.root}
    >
      {variant !== "color" ? label : null}
    </button>
  );
};

export default Swatch;
