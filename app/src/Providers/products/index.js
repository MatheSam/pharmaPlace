import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getproducts = async () => {
    const response = await api.get("/products");

    return response.data;
  };

  useEffect(() => {
    getproducts().then((resp) => setProducts(resp));
  }, []);
  return (
    <ProductsContext.Provider value={{ products, getproducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
