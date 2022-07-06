import { Container } from "./style";

const SearchInput = () => {
  return (
    <Container>
      <input className="input" placeholder="Digite aqui sua busca" />
      <button className="button">Buscar</button>
    </Container>
  );
};

export default SearchInput;
