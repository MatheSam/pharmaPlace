import { Container } from "./style";
import { RiAttachmentLine, RiHospitalFill } from "react-icons/ri";
import { GiHealthNormal, GiLipstick } from "react-icons/gi";
import { ImMakeGroup } from "react-icons/im";
import { TbMoodKid } from "react-icons/tb";
import { MdLocalConvenienceStore } from "react-icons/md";

const SearchFilter = () => {
  return (
    <Container>
      <section onClick={() => console.log("olá")} className="filter">
        <div className="icon">
          <RiHospitalFill />
        </div>
        <span className="name">Farmácias</span>
      </section>

      <section className="filter">
        <div className="icon">
          <GiHealthNormal />
        </div>
        <span className="name">Saúde</span>
      </section>

      <section className="filter">
        <div className="icon">
          <GiLipstick />
        </div>
        <span className="name">Beleza</span>
      </section>

      <section className="filter">
        <div className="icon">
          <ImMakeGroup />
        </div>
        <span className="name">Cosméticos</span>
      </section>

      <section className="filter">
        <div className="icon">
          <RiAttachmentLine />
        </div>
        <span className="name">Higiene</span>
      </section>

      <section className="filter">
        <div className="icon">
          <TbMoodKid />
        </div>
        <span className="name">Infantil</span>
      </section>

      <section className="filter">
        <div className="icon">
          <MdLocalConvenienceStore />
        </div>
        <span className="name">Conveniência</span>
      </section>
    </Container>
  );
};

export default SearchFilter;
