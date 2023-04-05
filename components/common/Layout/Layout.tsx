import { FC, ReactNode } from "react";
import style from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className={style.root}>{children}</main>
    </>
  );
};

export default Layout;
