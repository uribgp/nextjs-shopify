import { ApiFetcherOptions, ApiFetcherResults } from "@framework/api/api"

const apiKey = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN

type FetcherParams = { 
    query: string
}

type FetcherResult<T> = {data: T}

const fetchApi = async <T>({ url, query, variables 
}: ApiFetcherOptions): Promise<ApiFetcherResults<T>> => {

   const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": apiKey
        },
        body: JSON.stringify({query, variables})
    })

    const {data, errors} = await res.json()

    if (errors){
        throw new Error(errors[0].message ?? errors.message)
    }

    return { data }
}

export default fetchApi