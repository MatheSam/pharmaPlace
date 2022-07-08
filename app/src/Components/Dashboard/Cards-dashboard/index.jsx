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
<<<<<<< HEAD

  const { products, filteredProductsDash } = useContext(ProductsContext);
=======
  const { products } = useContext(ProductsContext);
  const pharmaProducts = products.filter(({ userId }) => userId === id);
>>>>>>> 762c9eb7a8e43708ec4ab9e945cb8e05782c90e1

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
<<<<<<< HEAD
    <Container>
      {filteredProductsDash.length > 0
        ? filteredProductsDash.map(({ image, name, category, price, id }) => (
            <div className="productsPharm" key={id}>
              <div className="imgBox">
                <img src={image} alt={name} />
              </div>
              <BoxInfo>
                <span>{name}</span>
                <span>{category.toUpperCase()}</span>
                <p>{formatPrice(price)}</p>
              </BoxInfo>
              <div className="iconsBox">
                <ModalEdit id={id} />
                <ModalDelete id={id} />
              </div>
            </div>
          ))
        : pharmaProducts.map(({ image, name, category, price, id }) => (
            <div className="productsPharm" key={id}>
              <div className="imgBox">
                <img src={image} alt={name} />
              </div>
              <BoxInfo>
                <span>{name}</span>
                <span>{category.toUpperCase()}</span>
                <p>{formatPrice(price)}</p>
              </BoxInfo>
              <div className="iconsBox">
                <ModalEdit id={id} />
                <ModalDelete id={id} />
              </div>
            </div>
          ))}
=======
    <Container data-aos="fade-left">
      {pharmaProducts.length < 1 ? (
        <h2>
          Você ainda não adicionou nenhum produto
          <TbMoodSad size="20px" />
        </h2>
      ) : (
        pharmaProducts?.map((el) => (
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
      )}
>>>>>>> 762c9eb7a8e43708ec4ab9e945cb8e05782c90e1
    </Container>
  );
};

export default CardsDashboard;
