import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredInputProducts, setFilteredInputProducts] = useState([]);
  const [filteredWhitCategory, setFilteredWhitCategory] = useState([]);
  const [pharmaProductsList, setPharmaProductsList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const getproducts = async () => {
    const response = await api.get("/products");

    return response.data;
  };

  const inputFilterFunction = () => {
    const filterInput = products.filter(({ name }) =>
      name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredInputProducts(filterInput);
  };

  const filterWithCategory = (category) => {
    const filterCategory = products.filter(
      (product) => product.category === category
    );
    return setFilteredWhitCategory(filterCategory);
  };

  const pharmaProducts = (pharmaId) => {
    const filter = products.filter((product) => product.userId === pharmaId);
    return setPharmaProductsList(filter);
  };

  useEffect(() => {
    getproducts().then((resp) => setProducts(resp));
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        getproducts,
        setInputValue,
        inputFilterFunction,
        filterWithCategory,
        pharmaProducts,
        pharmaProductsList,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
