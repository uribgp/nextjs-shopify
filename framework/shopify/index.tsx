import { ReactNode } from "react";
import { getConfig } from "./api/config";
import {
  ApiProvider as CommonApiProvider,
  useApiProvider as CommonUseApiProvider,
} from "@common";
const config = getConfig();

interface ShopifyApiProviderProps {
  children: ReactNode | ReactNode[];
}

export const ApiProvider = ({ children }: ShopifyApiProviderProps) => {
  return (
    <CommonApiProvider config={{ ...config }}>{children}</CommonApiProvider>
  );
};

export const useApiProvider = () => CommonUseApiProvider();
