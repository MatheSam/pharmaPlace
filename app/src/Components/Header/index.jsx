import { ThemeHeader } from "./style";
import Logo from "../../Assets/Logo2.png";
import MenuPopupState from "./Menu";
import { Link } from "react-router-dom";
import CustomizedBadges from "./IconCart";

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
          <div className="btnUser">
            <MenuPopupState />
          </div>
          <div className="btnCart">
            <CustomizedBadges />
          </div>
        </div>
      </div>
    </ThemeHeader>
  );
};

export default Header;
