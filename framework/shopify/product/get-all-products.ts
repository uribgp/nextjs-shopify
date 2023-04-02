import {  normalizeProduct, getAllProductsQuery } from "../utils"
import { ProductConnection } from "../schema"
import { Product } from "@common/types/product"
import { ApiConfig } from "@framework/api/api"

type ReturnType = {
    products: ProductConnection
}

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
    const { data } = await config.fetch<ReturnType>({ url: config.apiUrl, query: getAllProductsQuery})
    
    const products = data.products.edges.map(({node: product}) => {
        const normalizedProduct = normalizeProduct(product)
        return normalizedProduct
    }) ?? []
    
    return products
}

export default getAllProducts