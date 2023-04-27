import { Layout } from "@components/common";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { getConfig } from "@framework/api/config";
import { getAllProductsPaths, getProduct } from "@framework/product";
import { Container } from "@components/ui";

export default function ProductSlug({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(JSON.stringify(product, null, 2));
  return (
    <Container>
      <p>id: {product?.id}</p>
      <p>name: {product?.name}</p>
      <p>price value: {product?.price.value}</p>
      <p>price currency: {product?.price.currencyCode}</p>
      <p>description: {product?.description}</p>

      <h1 className='mb-4'>OPTIONS</h1>
      <div>
        {product?.options.map((option) => (
          <div key={option.id}>
            <p>Name: {option.displayName}</p>
            {option.values.map((value) => (
              <div key={value.hexColor}>
                <p>Label: {value.label}</p>
                <p>Hex Color: {value.hexColor}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <h1 className='mb-4'>VARIANTS</h1>
      <div>
        {product?.variants.map((variant) => (
          <div key={variant.id}>
            <p>Variant Name: {variant.name}</p>
            {variant.options.map((vo) => (
              <div key={variant.id}>
                <p>Name: {vo.displayName}</p>
                {vo.values.map((value) => (
                  <div key={value.hexColor}>
                    <p>Label: {value.label}</p>
                    <p>Hexcolot: {value.hexColor}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const config = getConfig();
  const { products } = await getAllProductsPaths(config);
  return {
    paths: products.map((product) => ({ params: { slug: product.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  const config = getConfig();
  const { product } = await getProduct({
    config,
    variables: { slug: params?.slug },
  });
  return {
    props: {
      product,
    },
  };
};

ProductSlug.Layout = Layout;
