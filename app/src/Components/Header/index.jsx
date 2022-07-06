import { ThemeHeader } from "./style";
import Logo from "../../Assets/Logo2.png";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import MenuPopupState from "./Menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ThemeHeader>
      <div className="header">
        <Link to={"/"}>
          <figure className="logo">
            <img alt="logo" src={Logo} />
          </figure>
        </Link>
        <div className="buttons">
          <button className="btnUser">
            <MenuPopupState />
          </button>
          <button className="btnCart">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </ThemeHeader>
  );
};

export default Header;
