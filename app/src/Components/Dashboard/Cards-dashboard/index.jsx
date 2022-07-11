import { Container, BoxInfo } from "./style";
import { useContext } from "react";
import { ProductsContext } from "../../../Providers/products";
import ModalEdit from "../Modals/Edit";
import ModalDelete from "../Modals/Delete";
import formatPrice from "../../../utils/formatPrice";
import { TbMoodSad } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CardsDashboard = () => {
  const id = JSON.parse(localStorage.getItem("@userData")).id;

  const { products, filteredProductsDash } = useContext(ProductsContext);

  const pharmaProducts = products.filter(({ userId }) => userId === id);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

<<<<<<< HEAD
=======

>>>>>>> b126fbfb576a87aa35cd4f114d422da39c963879
  return (
    <Container data-aos="fade-left">
      {pharmaProducts.length < 1 && (
        <h2>
          Você ainda não adicionou nenhum produto
          <TbMoodSad size="20px" />
        </h2>
      )}
      {filteredProductsDash.length > 0
        ? filteredProductsDash?.map((el) => (
            <div className="productsPharm" key={el.id}>
              <div className="imgBox">
                <img src={el.image} alt={el.name} />
              </div>
              <BoxInfo>
                <span>{el.name}</span>
                <span>{el.category}</span>
                <span>{formatPrice(el.price)}</span>
              </BoxInfo>
              <div className="iconsBox">
                <ModalEdit product={el} />
                <ModalDelete product={el} />
              </div>
            </div>
          ))
        : pharmaProducts?.map((el) => (
            <div className="productsPharm" key={el.id}>
              <div className="imgBox">
                <img src={el.image} alt={el.name} />
              </div>
              <BoxInfo>
                <span>{el.name}</span>
                <span>{el.category}</span>
                <span>{formatPrice(el.price)}</span>
              </BoxInfo>
              <div className="iconsBox">
                <ModalEdit product={el} />
                <ModalDelete product={el} />
              </div>
            </div>
          ))}
    </Container>
  );
};

export default CardsDashboard;
