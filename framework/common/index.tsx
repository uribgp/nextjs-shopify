import { ReactNode, createContext, useContext } from "react";
import { getConfig } from "@framework/api/config";

interface ApiProviderProps {
  children: ReactNode | ReactNode[];
}

const config = getConfig();

export const ApiContext = createContext({});

export const ApiProvider = ({ children }: ApiProviderProps) => {
  return <ApiContext.Provider value={config}>{children}</ApiContext.Provider>;
};

export const useApiProvider = () => {
  return useContext(ApiContext);
};
