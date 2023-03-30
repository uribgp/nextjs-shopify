import getAllProductsQuery from "../utils/queries/get-all-products"

const storeName = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN 
const apiKey = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN

type FetchParams = { 
    query: string
}

const fetchApi = async ({ query }: FetchParams) => {
    const url = storeName

   const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": apiKey
        },
        body: JSON.stringify({query})
    })

    const data = await res.json()
    return { data }
}

const getAllProducts = async (): Promise<any[]> => {
    const products = await fetchApi({ query: getAllProductsQuery})
    return products.data
}

export default getAllProducts