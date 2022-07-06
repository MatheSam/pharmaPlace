import { BsShop } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from "../../Components/Header";

const Login = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Tipo de email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const formData = (data) => console.log(data);

  return (
    <Container>
      <div>
        <form action="" onSubmit={handleSubmit(formData)}>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="email@mail.com"
            {...register("email")}
          />
          <span className="error">{errors.email?.message}</span>
          <label htmlFor="">Senha</label>
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <span className="error">{errors.password?.message}</span>
          <button type="submit">LOGIN</button>
        </form>
      </div>
      <hr />
      <div className="cadastroLogin">
        <h2>CADASTRO</h2>

        <Link to={"/registerSeller"}>
          <h3>Para vendedores</h3>
          <span>
            <BsShop />
          </span>
        </Link>

        <Link to={"/registerUser"}>
          <h3>Para consumidores</h3>
          <span>
            <FiUserPlus />
          </span>
        </Link>
      </div>
    </Container>
  );
};

export default Login;
