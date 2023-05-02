import { useAddItem } from "@common/cart"
import { MutationHook } from "@common/types/hooks"

export default useAddItem

export const handler: MutationHook = {
    fetcher: (input: any) => {
        console.log("fetching")
        return  JSON.stringify(input) + "modified" 
    },
    useHook: ({fetch}: any) => {
        return (input: any) =>  {
            const response = fetch(input)
            return {
                output: response
            }
        }
    }
}