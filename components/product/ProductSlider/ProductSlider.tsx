import { FC } from "react";
import style from "./ProductSlider.module.css";

interface ProductSliderProps {
  children: React.ReactNode;
}

const ProductSlider: FC<ProductSliderProps> = ({ children }) => {
  return (
    <div className={style.root}>
      <div className='h-full transition-opacity'>{children}</div>
    </div>
  );
};

export default ProductSlider;
