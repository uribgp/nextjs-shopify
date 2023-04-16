import { FC, ReactNode } from "react";
import style from "./Layout.module.css";
import { Footer, Navbar } from "@components/common";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={style.root}>
      <Navbar />
      <main className='fit'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
