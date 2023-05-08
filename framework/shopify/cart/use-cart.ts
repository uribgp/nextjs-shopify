import useCart from "@common/cart/use-cart"

export default useCart

export const handler = {
  fetchOptions: {
    query: ""
  },
  async fetcher({fetch, options, input: checkoutId}) {
    const data = await fetch(...options)
    return { data }
  },
  useHook: ({useData}: any) => {
    const data = useData()
    return {
      data
    }
  }
}