import {  normalizeProduct, getProductsByCollectionQuery } from "../utils"
import { ProductConnection } from "../schema"
import { Product } from "@common/types/product"
import { ApiConfig } from "@common/types/api"

// type ReturnType = {
//     products: ProductConnection
// }

const getProductsByCollection = async (options: {
    config: ApiConfig, 
    variables: any
}): Promise<Product[]> => {
    const { config, variables } = options
    // const { data } = await config.fetch<ReturnType>({ query: getProductsByCollectionQuery, variables})
    const { data } = await config.fetch<any>({ query: getProductsByCollectionQuery, variables})
    const edges = data.collectionByHandle.products.edges;

    const products = edges.map(({ node: product }) => {
      const normalizedProduct = normalizeProduct(product);
      return normalizedProduct;
    }) ?? [];
  
    return products;
}

export default getProductsByCollection