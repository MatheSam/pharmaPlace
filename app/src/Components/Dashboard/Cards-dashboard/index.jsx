import { SectionBox, Container, BoxInfo, ContainerAll } from "./style";
import ModalAdd from "../Modals/Add";
import ModalEdit from "../Modals/Edit";
import ModalDelete from "../Modals/Delete";
import Header from "../../Header";

const CardsDashboard = ({ product }) => {
  return (
    <>
      <Header />
      <ContainerAll>
        <SectionBox>
          <h2>Adicionar um novo produto</h2>
          <ModalAdd />
        </SectionBox>
        <p>Meus produtos</p>
        <Container>
          <img src="" alt="" />
          <BoxInfo>
            <span>''</span>
            <span>''</span>
            <span>''</span>
          </BoxInfo>
          <div className="iconsBox">
            <ModalEdit />
            <ModalDelete />
          </div>
        </Container>
      </ContainerAll>
    </>
  );
};

export default CardsDashboard;
