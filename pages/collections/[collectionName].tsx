import { Layout } from "@components/common";
import { useRouter } from "next/router";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import {
  getProductsByCollection,
  getAllCollectionsPaths,
} from "@framework/product";
import { getConfig } from "@framework/api/config";
import { Grid, Hero } from "@components/ui";
import { ProductCard } from "@components/product";

export default function CollectionPage({
  products,
  collectionName,
  description,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  return (
    <>
      <>
        <Hero headline={collectionName} description={description}></Hero>
        <Grid>
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      </>
    </>
  );
}

export const getStaticPaths: any = async () => {
  const config = getConfig();
  const { collections } = await getAllCollectionsPaths(config);

  const paths = collections.map(({ node }) => ({
    params: {
      collectionName: node.handle,
      description: node.description,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ collectionName: string }>) => {
  const config = getConfig();
  const products = await getProductsByCollection({
    config,
    variables: { collectionName: params?.collectionName },
  });

  const { collections } = await getAllCollectionsPaths(config);
  const { node } =
    collections.find((col) => col.node.handle === params?.collectionName) || {};

  return {
    props: {
      products,
      collectionName: node?.handle || "",
      description: node?.description || "",
    },
    revalidate: 4 * 60 * 60,
  };
};

CollectionPage.Layout = Layout;
