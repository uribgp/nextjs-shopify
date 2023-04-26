import { ImageEdge, MoneyV2, ProductOption, Product as ShopifyProduct } from "../schema";
import { Product } from "@common/types/product"

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

const normalizeProductOption = ({id, values, name: displayName}: ProductOption) => {
    const normalized = {
        id, displayName, values: values.map(value => {
            let output: any = {
                label: value
            }

            if (displayName.match(/colou?r/gi)) {
                output = {
                  ...output,
                  hexColor: value
                }
              }

            return output
        })
    }

    return normalized
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
        options,
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
        options: options ?
        options.filter(option => option.name !== "Title")
               .map(option => normalizeProductOption(option)) : [],
        ...rest
    }

    return product
}