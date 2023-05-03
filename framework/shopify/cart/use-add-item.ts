import { useAddItem } from "@common/cart"
import { MutationHook } from "@common/types/hooks"

export default useAddItem

export const handler: MutationHook = {
    fetcher: async ({fetch, input}) => {
        const response = await fetch(input)
        return response
    },
    useHook: ({fetch}: any) => {
        return async (input: any) =>  {
            const response = await fetch(input)
            return {
                output: response
            }
        }
    }
}