import { ReactNode, FC } from "react";
import { motion } from "framer-motion";
import style from "./Marquee.module.css";

interface Props {
  children: ReactNode[];
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

const Marquee: FC<Props> = ({ children }) => {
  return (
    <div className={style.root}>
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
