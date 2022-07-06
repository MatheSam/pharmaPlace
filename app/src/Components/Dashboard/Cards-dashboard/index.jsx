import { SectionBox, Container, BoxInfo } from "./style";
import ModalAdd from "../Modals/Add";
import ModalEdit from "../Modals/Edit";
import ModalDelete from "../Modals/Delete";

const CardsDashboard = () => {
  return (
    <>
      <SectionBox>
        <h2>MEUS PRODUTOS</h2>
        <ModalAdd />
      </SectionBox>
      <Container>
        <img src="{img}" alt="{name}" />
        <BoxInfo>
          <span>Remedio</span>
          <span>Saude</span>
          <span>R$ 100,00</span>
        </BoxInfo>
        <div className="iconsBox">
          <ModalEdit />
          <ModalDelete />
        </div>
      </Container>
    </>
  );
};

export default CardsDashboard;
