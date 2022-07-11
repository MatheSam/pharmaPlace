import { ThemeHeader } from "./style";
import Logo from "../../Assets/Logo2.png";
import MenuPopupState from "./Menu";
import { Link } from "react-router-dom";
import CustomizedBadges from "./IconCart";
import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";

const Header = () => {
  const { cart, toggleDrawer } = useContext(CartContext);

  const handleOpen = (event) => {
    if (cart.length > 0) {
      toggleDrawer("right", true, event);
    }
  };
  return (
    <ThemeHeader>
      <div className="header">
        <Link to={"/"}>
          <figure className="logo">
            <img alt="logo" src={Logo} />
          </figure>
        </Link>
        <div className="buttons">
          <div className="btnUser">
            <MenuPopupState />
          </div>
          <div className="btnCart">
            <button onClick={handleOpen} className="btnCart">
              <CustomizedBadges />
            </button>
          </div>
        </div>
      </div>
    </ThemeHeader>
  );
};

export default Header;
