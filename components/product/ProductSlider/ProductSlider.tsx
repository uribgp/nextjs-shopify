import React, { FC, Children, isValidElement, useState } from "react";
import style from "./ProductSlider.module.css";
import { useKeenSlider } from "keen-slider/react";
import cn from "classnames";

interface ProductSliderProps {
  children: React.ReactNode;
}

const ProductSlider: FC<ProductSliderProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className={style.root}>
      <div ref={sliderRef} className='keen-slider h-full transition-opacity'>
        <button
          className={cn(style.leftControl, style.control)}
          onClick={(e) => instanceRef.current?.prev()}
        />
        <button
          onClick={(e) => instanceRef.current?.next()}
          className={cn(style.rightControl, style.control)}
        />
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
