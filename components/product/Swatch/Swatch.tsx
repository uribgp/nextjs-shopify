import { FC } from "react";
import style from "./Swatch.module.css";
import cn from "classnames";
import { Check } from "@components/icons";

interface Props {
  color?: string;
  label?: string;
  variant?: string;
  active?: boolean;
  onClick: () => void;
}

const Swatch: FC<Props> = ({ color, label, variant, active, ...rest }) => {
  label = label?.toLowerCase();
  variant = variant?.toLowerCase();

  const rootClassName = cn(style.root, {
    [style.active]: active,
    [style.color]: color,
    [style.size]: variant === "size",
  });
  return (
    <button
      style={color ? { backgroundColor: color } : {}}
      className={rootClassName}
      {...rest}
    >
      {variant !== "color" ? label : null}
      {variant === "color" && active && (
        <span>
          <Check />
        </span>
      )}
    </button>
  );
};

export default Swatch;
