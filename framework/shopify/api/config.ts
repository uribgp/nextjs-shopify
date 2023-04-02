import { fetchApi } from "../utils"
import { ApiConfig } from "@common/types/api"

const storeName = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN 

class Config {
    private config: ApiConfig

    constructor(config: ApiConfig) {
        this.config = config
    }

    getConfig(): ApiConfig {
        return this.config
    }
}

const configWrapper = new Config(({
    apiUrl: storeName,
    fetch: fetchApi
}))

export function getConfig(){
    return configWrapper.getConfig()
}