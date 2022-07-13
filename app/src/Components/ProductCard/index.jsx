import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import { ProductsContext } from "../../Providers/products";
import formatPrice from "../../utils/formatPrice";
import { StyledProductCard } from "./style";

const ProductCard = ({ image, name, price, id }) => {
  const { cart, addToCart, toggleDrawer } = useContext(CartContext);
  const { setModalProduct } = useContext(ProductsContext);

  const cartItem = { image, name, price, id, quantity: 1 };

  const handleCardClick = (event) => {
    if (event.target.nodeName !== "BUTTON") {
      setModalProduct({ open: true, product: { image, name, price, id } });
    }
  };

  const handleClick = (event) => {
    if (cart.length === 0) {
      toggleDrawer("right", true, event);
    }

    addToCart(cartItem);
  };

  return (
    <StyledProductCard onClick={handleCardClick}>
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
