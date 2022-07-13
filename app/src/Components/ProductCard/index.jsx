import formatPrice from "../../utils/formatPrice";
import { StyledProductCard } from "./style";
import { capitalizeFirstLowercaseRest } from "../../utils/capitalizeFirst";

const ProductCard = ({ image, name, price, id }) => {
  return (
    <StyledProductCard>
      <div className="imageArea">
        <img src={image} alt={name} />
      </div>
      <div className="infoArea">
        <div className="info">
          <p>{capitalizeFirstLowercaseRest(name)}</p>
          <span>{formatPrice(price)}</span>
        </div>
        <button>Comprar</button>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
