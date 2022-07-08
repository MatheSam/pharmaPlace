import CardsDashboard from "../../Components/Dashboard/Cards-dashboard";

import Header from "../../Components/Header";
import { SectionBox } from "./style";

import ModalAdd from "../../Components/Dashboard/Modals/Add";
import SearchInput from "../../Components/Filters/Input";
import Footer from "../../Components/Footer";

import { ProductsContext } from "../../Providers/products";
import { useContext } from "react";

const Dashboard = () => {
  const {
      products,
      inputFilterFunction, 
      setInputValue, 
      setFilteredProductsDash 
    } = useContext(ProductsContext);

  const id = JSON.parse(localStorage.getItem("@userData")).id;
  const pharmaProducts = products.filter((prod) => prod.userId === id);

  return (
    <>
      <Header />

      <SearchInput
        set={setInputValue}
        func={() => inputFilterFunction(pharmaProducts, setFilteredProductsDash)}
      />
      <SectionBox>
        <ModalAdd />
      </SectionBox>
      <CardsDashboard />
      <Footer />
    </>
  );
};

export default Dashboard;
