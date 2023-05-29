import type { InferGetStaticPropsType } from "next";
import { getAllProducts } from "@framework/product";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid, Hero, Marquee } from "@components/ui";

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className='root'>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero headline='Hello' description='description' />
      <Marquee>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} variant='slim' product={product} />
        ))}
      </Marquee>
      <Grid layout='B'>
        {products.slice(3, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Marquee variant='secondary'>
        {products.slice(3, 6).map((product) => (
          <ProductCard key={product.id} variant='slim' product={product} />
        ))}
      </Marquee>
    </div>
  );
}

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);
  return {
    props: { products },

    // Revalidate searches for new products every 4 hours
    revalidate: 4 * 60 * 60,
  };
}

Home.Layout = Layout;
