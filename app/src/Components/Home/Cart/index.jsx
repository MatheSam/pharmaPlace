import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { StyledCart } from "./style";
import cartImage from "../../../Assets/cart-blue.svg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CartItem from "../../CartItem";
import { CartContext } from "../../../Providers/Cart";

const Cart = () => {
  const { cart, state, toggleDrawer } = React.useContext(CartContext);

  const amountTotal = cart.reduce((acc, item) => acc + item.quantity, 0);

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 500 }}
      role="presentation"
    >
      <StyledCart>
        <div className="head">
          <span
            className="close"
            onClick={(e) => toggleDrawer("right", false, e)}
          >
            <AiOutlineCloseCircle />
          </span>
          <h2>Carrinho de compras</h2>
          <span className="image">
            <img src={cartImage} alt="" />
            <span>{amountTotal}</span>
          </span>
        </div>
        <div className="body">
          {cart.map(({ image, price, id, name, quantity }) => (
            <CartItem
              image={image}
              price={price}
              name={name}
              key={id}
              quantity={quantity}
              id={id}
            />
          ))}
        </div>
        <div className="cartInfo">
          <button className="finalizar">FINALIZAR COMPRA</button>
          <button
            className="adicionar"
            onClick={(e) => toggleDrawer("right", false, e)}
          >
            ADICIONAR MAIS ITENS
          </button>
        </div>
      </StyledCart>
    </Box>
  );

  return (
    <div>
      {["left", "right", "top", "bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={(event) => toggleDrawer(anchor, false, event)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Cart;
