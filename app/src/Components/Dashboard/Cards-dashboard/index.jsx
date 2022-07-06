import { SectionBox, Container, BoxInfo } from "./style";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { GrAddCircle } from "react-icons/gr";

const CardsDashboard = () => {
  return (
    <>
      <SectionBox>
        <h2>MEUS PRODUTOS</h2>
        <button>
          <GrAddCircle />
        </button>
      </SectionBox>
      <Container>
        <img src="{img}" alt="{name}" />
        <BoxInfo>
          <span>Remedio</span>
          <span>Saude</span>
          <span>R$ 100,00</span>
        </BoxInfo>
        <div className="iconsBox">
          <FaRegEdit />
          <FaRegTrashAlt />
        </div>
      </Container>
    </>
  );
};

export default CardsDashboard;
