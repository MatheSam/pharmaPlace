import { Container, BoxInfo } from "./style";
import { useContext } from "react";
import { ProductsContext } from "../../../Providers/products";
import { useEffect } from "react";
import ModalEdit from "../Modals/Edit";
import ModalDelete from "../Modals/Delete";

const CardsDashboard = () => {
  const { products, setProducts, getProducts } = useContext(ProductsContext);

  useEffect(() => {
    getProducts().then((resp) => setProducts(resp));
  }, []);

  return (
    <Container>
      {products.map(({ image, name, category, price, id }) => (
        <div className="productsPharm" key={id}>
          <div className="imgBox">
            <img src={image} alt={name} />
          </div>
          <BoxInfo>
            <span>{name}</span>
            <span>{category.toUpperCase()}</span>
            <span>
              {price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </BoxInfo>
          <div className="iconsBox">
            <ModalEdit />
            <ModalDelete id={id} />
          </div>
        </div>
      ))}
    </Container>
  );
};

export default CardsDashboard;
