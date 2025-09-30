import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IProductCapacityContext {
  capacity: number | undefined;
  setCapacity: Dispatch<SetStateAction<number | undefined>>;
}

const ProductCapacityContext = createContext<IProductCapacityContext>(
  {} as IProductCapacityContext,
);

export const ProductCapacityProvider = ({ children }: PropsWithChildren) => {
  const [capacity, setCapacity] = useState<number>();

  return (
    <ProductCapacityContext.Provider value={{ capacity, setCapacity }}>
      {children}
    </ProductCapacityContext.Provider>
  );
};

export const useProductCapacityContext = () => {
  const context = useContext(ProductCapacityContext);

  if (!context) {
    throw new Error(
      "useProductCapacityContext must be used within a ProductCapacityProvider",
    );
  }

  return context;
};
