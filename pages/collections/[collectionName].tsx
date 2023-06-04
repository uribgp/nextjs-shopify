import { ProductCard } from "@components/product";
import { Grid } from "@components/ui";
import { getConfig } from "@framework/api/config";
import { getAllProducts } from "@framework/product";
import { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

export default function CollectionPage() {
  const router = useRouter();
  const { collectionName } = router.query;
  return <>{collectionName} Page</>;
}
