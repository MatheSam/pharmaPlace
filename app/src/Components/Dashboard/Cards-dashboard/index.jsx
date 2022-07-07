import { Container, BoxInfo } from "./style";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../Providers/products";
import ModalEdit from "../Modals/Edit";
import ModalDelete from "../Modals/Delete";
import formatPrice from "../../../utils/formatPrice";

const CardsDashboard = () => {
  const id = JSON.parse(localStorage.getItem("@userData")).id;
  const { products } = useContext(ProductsContext);
  const pharmaProducts = products.filter(({ userId }) => userId === id);

  return (
    <Container>
      {pharmaProducts?.map((el) => (
        <div className="productsPharm" key={id}>
          <div className="imgBox">
            <img src={el.image} alt={el.name} />
          </div>
          <BoxInfo>
            <span>{el.name}</span>
            <span>{el.category.toUpperCase()}</span>
            <span>{formatPrice(el.price)}</span>
          </BoxInfo>
          <div className="iconsBox">
            <ModalEdit />
            <ModalDelete product={el} />
          </div>
        </div>
      ))}
    </Container>
  );
};

export default CardsDashboard;
