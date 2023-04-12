import React, { ReactNode, FC, HTMLAttributes } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  element?: React.ComponentType<HTMLAttributes<HTMLElement>>;
}

const Container: FC<Props> = ({ children, element: Component = "div" }) => {
  return <Component className='px-6 mx-auto max-w-8xl'>{children}</Component>;
};

export default Container;
