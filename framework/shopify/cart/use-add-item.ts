import { useAddItem } from "@common/cart"

export default useAddItem

export const handler = {
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