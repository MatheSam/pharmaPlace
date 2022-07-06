import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "./style";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "#4357AC",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};

const ModalAdd = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório").min(4),
    price: yup.number().required("Campo obrigatório"),
    imagem: yup.string().required("Campo obrigatório"),
    categoria: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const formData = (data) => console.log(data);

  return (
    <div>
      <Button onClick={handleOpen}>Modal Adicionar</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form action="" onSubmit={handleSubmit(formData)}>
            <label htmlFor="">Nome do Produto</label>
            <input
              type="text"
              placeholder="Paracetamol"
              {...register("name")}
            />
            <span className="error">{errors.name?.message}</span>
            <label htmlFor="">Preço</label>
            <input type="number" placeholder="R$ 5.99" {...register("price")} />
            <span className="error">{errors.price?.message}</span>

            <label htmlFor="">Imagem</label>
            <input type="text" placeholder="Link URL" {...register("imagem")} />
            <span className="error">{errors.imagem?.message}</span>
            <label htmlFor="">Categoria</label>
            <select name="" id="" {...register("categoria")}>
              <option value="">Selecione a categoria</option>
              <option value="medicamentos">Medicamentos</option>
              <option value="saude">Saúde</option>
              <option value="beleza">Beleza</option>
              <option value="dermocosmeticos">Dermocosméticos</option>
              <option value="higiene">Higiene</option>
              <option value="infantil">Infantil</option>
              <option value="conveniencia">Conveniência</option>
            </select>
            <span className="error">{errors.categoria?.message}</span>

            <button type="submit">CADASTRAR</button>
          </Form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAdd;
