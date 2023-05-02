import { useHook } from "@common/utils/use-hook"

const useAddItem = (input: any) => {
    const hook = useHook((hooks) => hooks.cart.useAddItem)
    return hook.useHook()
}

export default useAddItem