import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const getproducts = async () => {
    const response = await api.get("/products");

    return response.data;
  };

  const inputFilterFunction = ()=> {
    const filterInput = products.filter(({name})=>
    name.toLowerCase().includes(inputValue.toLowerCase())
  );
  setFilteredProducts(filterInput);
}

  useEffect(() => {
    getproducts().then((resp) => setProducts(resp));
  }, []);
  return (
    <ProductsContext.Provider value={{ products, getproducts, setInputValue }}>
      {children}
    </ProductsContext.Provider>
  );
};
