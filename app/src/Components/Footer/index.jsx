import { ThemeFooter } from "./style";
import { BsLinkedin } from "react-icons/bs";
import { RiCopyrightFill } from "react-icons/ri";
import { MdOutlineContactMail } from "react-icons/md";

const Footer = () => {
  return (
    <ThemeFooter>
      <h3><MdOutlineContactMail/> Contato</h3>
      <ul>
        <li>
          <BsLinkedin />Francisco Jeihson
        </li>
        <li>
          <BsLinkedin /> Gabriel Luz
        </li>
        <li>
          <BsLinkedin /> Julio César
        </li>
        <li>
          <BsLinkedin /> Lucas Ribeiro
        </li>
        <li>
          <BsLinkedin /> Matheus Sam
        </li>
        <li>
          <BsLinkedin /> Matheus Zeiser
        </li>
      </ul>
      <span>
        <RiCopyrightFill /> Copyright direitos reservados. 2022.
      </span>
    </ThemeFooter>
  );
};

export default Footer;
