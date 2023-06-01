import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <title>
        A reusable online store application, currently using Shopify.
      </title>
      <Head>
        <meta
          name='description'
          content='Reusable online store that can implement many different clients. It currently has Shopify.'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
