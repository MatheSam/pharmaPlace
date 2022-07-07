import { useContext } from "react";
import { ProductsContext } from "../../Providers/products";
import ProductCard from "../ProductCard";
import { StyledProductMain } from "./style";

const ProductMain = () => {
  const { filteredProducts } = useContext(ProductsContext);

  return (
    <StyledProductMain>
      <section className="area">
        {filteredProducts?.map(({ image, name, price, id }) => (
          <ProductCard
            key={id}
            image={image}
            name={name}
            price={price}
            id={id}
          />
        ))}
      </section>
    </StyledProductMain>
  );
};

export default ProductMain;
