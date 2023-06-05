import { Layout } from "@components/common";
import { useRouter } from "next/router";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import {
  getProductsByCollection,
  getAllCollectionsPaths,
} from "@framework/product";
import { getConfig } from "@framework/api/config";

export default function CollectionPage({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const { collectionName } = router.query;
  console.log(products);

  return (
    <>
      <>{collectionName} Page</>
    </>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
export const getStaticPaths: any = async () => {
  const config = getConfig();
  const { collections } = await getAllCollectionsPaths(config);

  const paths = collections.map(({ node }) => ({
    params: { collectionName: node.handle },
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
  return {
    props: { products },

    // Revalidate searches for new products every 4 hours
    revalidate: 4 * 60 * 60,
  };
};

CollectionPage.Layout = Layout;
