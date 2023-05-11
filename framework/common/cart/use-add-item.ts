import { useHook, useMutationHook } from "@common/utils/use-hook"
import { MutationHook } from "@common/types/hooks"

export type UseAddItem<
  H extends MutationHook = MutationHook<any>
> = ReturnType<H["useHook"]>


const useAddItem: UseAddItem = () => {
    const hook = useHook((hooks) => hooks.cart.useAddItem)
    return useMutationHook({...hook})()
}

export default useAddItem