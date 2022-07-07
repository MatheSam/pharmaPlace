import { Container } from "./style";
import { Link } from "react-router-dom";

const CardsPharma = ({ pharm }) => {
  const { name, photo, address, id } = pharm;
  return (
    <Link to={`/pharmaProducts/${id}`}>
      <Container>
        <h2>{name}</h2>
        <img alt={name} src={photo} />
        <p>{address}</p>
        <p>cnpj</p>
      </Container>
    </Link>
  );
};

export default CardsPharma;
