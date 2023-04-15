import { ReactNode, FC } from "react";
import { motion } from "framer-motion";
import style from "./Marquee.module.css";
import classNames from "classnames";

interface Props {
  children: ReactNode[];
  variant?: "primary" | "secondary";
}

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

const Marquee: FC<Props> = ({ children, variant = "primary" }) => {
  const rootClassName = classNames(style.root, {
    [style.secondary]: variant === "secondary",
  });
  return (
    <div className={rootClassName}>
      <motion.div
        className='track'
        variants={marqueeVariants}
        animate='animate'
      >
        <div className={style.container}>{children}</div>
      </motion.div>
    </div>
  );
};

export default Marquee;
