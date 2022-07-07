import { StyledMiniCard } from "./style";
import { BsCartPlus } from "react-icons/bs";
import formatName from "../../utils/formatName";
import formatPrice from "../../utils/formatPrice";

const MiniCard = ({ name, image, price, id }) => {
  return (
    <StyledMiniCard>
      <div className="imageArea">
        <img src={image} alt={name} />
      </div>
      <div className="infoArea">
        <div className="info">
          <p>{formatName(name)}</p>
          <span>{formatPrice(price)}</span>
        </div>
        <button>
          <BsCartPlus />
        </button>
      </div>
    </StyledMiniCard>
  );
};

export default MiniCard;
