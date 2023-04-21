import { FC, ReactNode } from "react";
import style from "./Layout.module.css";
import { Footer, Navbar } from "@components/common";
import { Sidebar } from "@components/ui";
import { CartSidebar } from "@components/cart";
import { useUI } from "@components/ui/context";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const { isSidebarOpen, closeSidebar } = useUI();

  return (
    <div className={style.root}>
      <Navbar />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
        <CartSidebar />
      </Sidebar>
      <main className='fit'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
