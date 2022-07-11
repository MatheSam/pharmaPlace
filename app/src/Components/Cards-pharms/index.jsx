import { Container } from "./style";
import { Link } from "react-router-dom";
import { MdOutlineLocalPharmacy } from "react-icons/md";

const CardsPharma = ({ pharm }) => {
  const { name, photo, address, id } = pharm;
  return (
    <Link to={`/pharmaProducts/${id}`}>
      <Container>
        <h2 className="pharmaName">{name}</h2>
        <img className="pharmaPhoto" alt={name} src={photo} />
        <p className="pharmaAdress">{address}</p>
        <div className="pharmaSee">
          Ver Farmácia <MdOutlineLocalPharmacy />
        </div>
      </Container>
    </Link>
  );
};

export default CardsPharma;
