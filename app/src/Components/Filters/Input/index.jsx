import { Container } from "./style";
import { useContext } from "react";
import { ProductsContext } from "../../../Providers/products";

const SearchInput = () => {
  const { setInputValue, inputFilterFunction } = useContext(ProductsContext);

  return (
    <Container>
      <input
        onChange={(evt) => setInputValue(evt.target.value)}
        className="input"
        placeholder="Digite aqui sua busca"
      />
      <button onClick={inputFilterFunction} type="submit" className="button">
        Buscar
      </button>
    </Container>
  );
};

export default SearchInput;
