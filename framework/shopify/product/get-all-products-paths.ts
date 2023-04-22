import { ApiConfig } from "@common/types/api"
import { Product } from "@common/types/product"

type ReturnType = {
    products: Pick<Product, "slug">[]
}

const getAllProductsPaths = async (config: ApiConfig): Promise<ReturnType> => {
    return   {  products: [
        {  slug: "notebook-1" } ,
        {  slug: "notebook-2" } ,
        {  slug: "notebook-3" } ,
      ],
}}

export default getAllProductsPaths