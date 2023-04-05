import { AppProps } from "next/app";
import { FC, ReactNode } from "react";
import "@assets/main.css";

interface LayoutProps {
  children: ReactNode;
}

const Noop: FC<LayoutProps> = ({ children }) => <>{children}</>;

interface ComponentWithLayout extends React.FunctionComponent {
  Layout: FC<LayoutProps>;
}

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: ComponentWithLayout }) {
  const Layout = Component.Layout ?? Noop;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
