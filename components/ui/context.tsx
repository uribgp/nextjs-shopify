import { FC, createContext, useContext } from "react";

const UIContext = createContext<object>({
  uiState: "defaultState",
});

interface UIProviderProps {
  children: React.ReactNode;
}

export const UIProvider: FC<UIProviderProps> = ({ children }) => {
  return (
    <UIContext.Provider value={{ uiState: "someState" }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};
