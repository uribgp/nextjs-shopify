import { AppProps } from "next/app";
import { FC, ReactNode } from "react";
import "@assets/main.css";
import "keen-slider/keen-slider.min.css";
import { UIProvider } from "@components/ui/context";

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
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MyApp;
