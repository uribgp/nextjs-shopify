import { ApiConfig } from "@common/types/api";
import { ProductConnection } from "@framework/schema";
import { Collection, CollectionResponse } from "@common/types/collection";
import { getAllCollectionsPathsQuery } from "@framework/utils/queries";

type ReturnType = {
  collections: Collection[];
};

const getAllCollectionsPaths = async (
  config: ApiConfig
): Promise<ReturnType> => {
//   const { data } = await config.fetch<CollectionResponse>({
    const { data } = await config.fetch<any>({
    query: getAllCollectionsPathsQuery,
  });

  if (!data || !data.collections || !data.collections.edges) {
    throw new Error("Invalid response data");
  }

  const collections = data.collections.edges.map(({ node }) => ({
    node,
  }));

  return { collections };
};

export default getAllCollectionsPaths;
