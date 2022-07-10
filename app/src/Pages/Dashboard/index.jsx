import CardsDashboard from "../../Components/Dashboard/Cards-dashboard";

import Header from "../../Components/Header";
import { SectionBox, Identify } from "./style";

import ModalAdd from "../../Components/Dashboard/Modals/Add";
import SearchInput from "../../Components/Filters/Input";
import Footer from "../../Components/Footer";

import { ProductsContext } from "../../Providers/products";
import { useContext } from "react";
import { UsersContext } from "../../Providers/users";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const {
    products,
    inputFilterFunction,
    setInputValue,
    setFilteredProductsDash,
    filterAllWhiteCategory,
  } = useContext(ProductsContext);

  const id = JSON.parse(localStorage.getItem("@userData")).id;
  const pharmaProducts = products.filter((prod) => prod.userId === id);
  const { users } = useContext(UsersContext);

  return (
    <>
      <Header />

      <Identify>
        {users.map(
          (user) =>
            user.id === id && (
              <div className="identify" key={user.id}>
                <div>
                  <img
                    className="imgPharma"
                    alt="img pharma"
                    src={user.photo}
                  />
                  <h3 className="namePharma">{user.name}</h3>
                </div>
                <section>
                  <Link to={"/"}>
                    <button className="homeButton">Home</button>
                  </Link>

                  <button
                    className="allButton"
                    onClick={() =>
                      filterAllWhiteCategory(
                        pharmaProducts,
                        setFilteredProductsDash
                      )
                    }
                  >
                    Produtos
                  </button>
                </section>
              </div>
            )
        )}
      </Identify>

      <SearchInput
        set={setInputValue}
        func={() =>
          inputFilterFunction(pharmaProducts, setFilteredProductsDash)
        }
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
