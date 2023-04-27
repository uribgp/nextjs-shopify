import React, { FC, Children, isValidElement } from "react";
import style from "./ProductSlider.module.css";
import { useKeenSlider } from "keen-slider/react";

interface ProductSliderProps {
  children: React.ReactNode;
}

const ProductSlider: FC<ProductSliderProps> = ({ children }) => {
  const [sliderRef, _] = useKeenSlider({
    initial: 0,
    loop: true,
  });

  return (
    <div className={style.root}>
      <div ref={sliderRef} className='keen-slider h-full transition-opacity'>
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...(child.props as object),
                className: `${
                  child.props.className ? `${child.props.className}` : ""
                } keen-slider__slide`,
              },
            };
          }

          return child;
        })}
      </div>
    </div>
  );
};

export default ProductSlider;
