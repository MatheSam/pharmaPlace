import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [pharmaProductsList, setPharmaProductsList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const getProducts = async () => {
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
    getProducts().then((resp) => {
      setProducts(resp);
      setFilteredProducts(resp);
    });
  }, []);

  const removeProduct = (id) => {
    const newList = products.filter((product) => product.id !== id);
    setProducts(newList);
  };

  useEffect(() => {
    if (inputValue.length === 0) {
      setFilteredProducts([...products]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        getProducts,
        setInputValue,
        filteredProducts,
        inputFilterFunction,
        filterWithCategory,
        pharmaProductsList,
        setPharmaProductsList,
        removeProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
