import { FC, createContext, useContext, useState } from "react";

const UIContext = createContext<{ [key: string]: any }>({
  uiState: "defaultState",
});

interface UIProviderProps {
  children: React.ReactNode;
}

export const UIProvider: FC<UIProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const uiState = {
    isSidebarOpen,
    setIsSidebarOpen,
  };
  return <UIContext.Provider value={uiState}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};
