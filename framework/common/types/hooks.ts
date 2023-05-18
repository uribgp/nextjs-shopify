import { ApiFetcher, ApiFetcherOptions } from "./api"
import { SWRResponse } from "swr"

export type HookFetcherContext<Input, Output> = {
    input: Input
    fetch: ApiFetcher<Output>
    options: ApiFetcherOptions
  }
  
export type MutationHookContext<Input, Output> = {
    fetch: (input: Input) => Promise<Output>
}

export type SWRHookContext<Input, Output> = {
    useData: (input: Input) => Promise<Output>
}

export type HookDescriptor = {
    fetcherInput: any
    fetcherOutput: any
    data: any
}

export type MutationHook<H extends HookDescriptor = any> = {
    fetcherOptions: HookFetcherOptions
    fetcher: HookFetcherFn<
    H["fetcherInput"],
    H["fetcherOutput"],
    H["data"]
  >
    useHook(
        context: MutationHookContext<H["fetcherInput"], H["data"]>
    ): () => (input: H["fetcherInput"]) => Promise<H["data"]>
}

export type HookFetcherOptions = {
    query: string
  }
  
  export type HookFetcherFn<Input, Output, Data> =
  (context: HookFetcherContext<Input, Output>) => Promise<Data>
export interface ApiHooks {
    cart: {
        useAddItem: any
        useCart: SWRHook
        useRemoveItem: MutationHook
        useUpdateItem: MutationHook
    }
}

export type UseDataContext = {
    swrOptions: any
  }

export type UseData<Data> = (context: UseDataContext) => Data

export type SWRHookResponse<Data> =
  SWRResponse<Data, any> & { isEmpty: boolean }

export type SWRHook<H extends HookDescriptor = any> = {
    fetcherOptions: HookFetcherOptions
    fetcher: HookFetcherFn<
      H["fetcherInput"],
      H["fetcherOutput"],
      H["data"]
    >
    useHook(
        context: {
            useData: UseData<SWRHookResponse<H["data"]>>
          }
          ): () => SWRHookResponse<H["data"]>
  }

  export type Hook = MutationHook | SWRHook
