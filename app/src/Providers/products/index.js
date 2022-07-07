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

  const inputFilterFunction = () => {
    const filterInput = products.filter(
      ({ name, category }) =>
        name.toLowerCase().includes(inputValue.toLowerCase()) ||
        category.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredProducts(filterInput);
  };

  const filterWithCategory = (category) => {
    const filterCategory = products.filter(
      (product) => product.category === category
    );
    return setFilteredProducts(filterCategory);
  };

  useEffect(() => {
    getproducts().then((resp) => {
      setProducts(resp);
      setFilteredProducts(resp);
    });
  }, []);

  useEffect(() => {
    if (inputValue.length === 0) {
      setFilteredProducts([...products]);
    }
  }, [inputValue]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        getproducts,
        setInputValue,
        filteredProducts,
        inputFilterFunction,
        filterWithCategory,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
