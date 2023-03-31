import { Product as ShopifyProduct } from "../schema";

export function normalizeProduct(productNode: ShopifyProduct): any {
    const { 
        id, 
        title: name, 
        handle, 
        vendor, 
        description, 
        ...rest 
    } = productNode

    const product = { 
        id: id ?? null, 
        name: name ?? null, 
        vendor: vendor ?? null, 
        description: description ?? null, 
        path: handle ? `/${handle}` : null, 
        slug: handle ? handle.replace(/^\/+|\/+$/g, "") : null, 
        ...rest
    }

    return product
}