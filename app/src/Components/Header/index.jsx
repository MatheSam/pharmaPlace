import { ThemeHeader } from "./style";
import Logo from "../../Assets/Logo2.png";
import { FaUserCircle, FaShoppingCart} from "react-icons/fa";

const Header = () => {
  return (
    <ThemeHeader>
      <figure className="logo">
        <img alt="logo" src={Logo} />
      </figure>
      <div className="buttons">
        <button className="btnUser">
          <FaUserCircle />
        </button>
        <button className="btnCart">
          <FaShoppingCart />
        </button>
      </div>
    </ThemeHeader>
  );
};

export default Header;
