import { Container } from "./style";

const CardsPharma = ({ pharm }) => {
  const { name, photo, address } = pharm;
  return (
    <Container>
      <h2>{name}</h2>
      <img alt={name} src={photo} />
      <p>{address}</p>
      <p>cnpj</p>
    </Container>
    
  );
};

export default CardsPharma;
