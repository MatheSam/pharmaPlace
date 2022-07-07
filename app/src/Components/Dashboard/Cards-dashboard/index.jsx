import { Container, BoxInfo } from "./style";
import { useContext } from "react";
import { ProductsContext } from "../../../Providers/products";
import ModalEdit from "../Modals/Edit";
import ModalDelete from "../Modals/Delete";
import formatPrice from "../../../utils/formatPrice";

const CardsDashboard = () => {
  const id = JSON.parse(localStorage.getItem("@userData")).id;

  const { products } = useContext(ProductsContext);

  const pharmaProducts = products.filter((prod) => prod.userId === id);

  return (
    <Container>
      {pharmaProducts?.map(({ image, name, category, price, id }) => (
        <div className="productsPharm" key={id}>
          <div className="imgBox">
            <img src={image} alt={name} />
          </div>
          <BoxInfo>
            <span>{name}</span>
            <span>{category.toUpperCase()}</span>
            <span>{formatPrice(price)}</span>
          </BoxInfo>
          <div className="iconsBox">
            <ModalEdit id={id} />
            <ModalDelete id={id} />
          </div>
        </div>
      ))}
    </Container>
  );
};

export default CardsDashboard;
