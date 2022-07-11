import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import formatPrice from "../../utils/formatPrice";
import { StyledProductCard } from "./style";

const ProductCard = ({ image, name, price, id }) => {
  const { cart, addToCart, toggleDrawer } = useContext(CartContext);

  const cartItem = { image, name, price, id, quantity: 1 };

  const handleClick = (event) => {
    if (cart.length === 0) {
      toggleDrawer("right", true, event);
    }

    addToCart(cartItem);
  };

  return (
    <StyledProductCard>
      <div className="imageArea">
        <img src={image} alt={name} />
      </div>
      <div className="infoArea">
        <div className="info">
          <p>{name}</p>
          <span>{formatPrice(price)}</span>
        </div>
        <button onClick={handleClick}>Comprar</button>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
