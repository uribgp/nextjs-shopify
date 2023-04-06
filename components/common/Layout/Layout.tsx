import { FC, ReactNode } from "react";
import style from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={style.root}>
      <main className='fit'>{children}</main>
    </div>
  );
};

export default Layout;
