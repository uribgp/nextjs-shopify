import useCart from "@common/cart/use-cart"
import { createCheckout } from "@framework/utils";

export default useCart

export const handler = {
  fetchOptions: {
    query: ""
  },
  async fetcher({fetch, options, input: checkoutId}) {
    let checkout;

    if (checkoutId){
      const { data } = await fetch({...options})
      checkout = data.node
    } else {
      checkout = await createCheckout()
    }

    return checkout
  },
  useHook: ({useData}: any) => {
    const data = useData()
    return {
      data
    }
  }
}