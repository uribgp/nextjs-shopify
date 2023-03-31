const storeName = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN 
const apiKey = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN

type FetcherParams = { 
    query: string
}

type FetcherResult<T> = {data: T}

const fetchApi = async <T>({ query 
}: FetcherParams): Promise<FetcherResult<T>> => {
    const url = storeName

   const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": apiKey
        },
        body: JSON.stringify({query})
    })

    const {data, errors} = await res.json()

    if (errors){
        throw new Error(errors[0].message ?? errors.message)
    }

    return { data }
}

export default fetchApi