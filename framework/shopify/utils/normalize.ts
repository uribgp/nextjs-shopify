import { ImageEdge, MoneyV2, Product as ShopifyProduct } from "../schema";
import { Product } from "@common/types/product";

function normalizeProductImages({edges}: {edges: Array<ImageEdge>}){
    return edges.map(({node: {originalSrc: url, ...rest}}) => {
        return {
            url: `${url}`,
            ...rest
        }
    })
}

function normalizeProductPrice({currencyCode, amount}: MoneyV2){
    return {
        value: +amount,
        currencyCode
    }
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
    const { 
        id, 
        title: name, 
        handle, 
        vendor, 
        description, 
        images: imageConnection,
        priceRange,
        ...rest 
    } = productNode

    const product = { 
        id: id ?? null, 
        name: name ?? null, 
        vendor: vendor ?? null, 
        description: description ?? null, 
        path: handle ? `/${handle}` : null, 
        slug: handle ? handle.replace(/^\/+|\/+$/g, "") : null, 
        images: normalizeProductImages(imageConnection),
        price: normalizeProductPrice(priceRange.minVariantPrice),
        ...rest
    }

    return product
}