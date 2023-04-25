import { ApiConfig } from "@common/types/api"

const getProduct = async (config: ApiConfig): Promise<any> => {
    return {
        product: {name: "notebook 1", slug: "notebook-1" }
    }
}

export default getProduct