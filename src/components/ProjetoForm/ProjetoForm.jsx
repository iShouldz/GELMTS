/* eslint-disable no-unused-vars */
import { Button, TextField} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./projetoForm.module.css";
import InputTextComponent from "../UI/InputTextComponent/InputTextComponent";

const schema = yup
  .object({
    nome: yup.string().required(),
    cpf: yup.string().required(),
    curso: yup.string().required(),
    orientador: yup.string().required(),
    projeto: yup.string().required(),
    login: yup.string().required(),
    senha: yup.string().required(),
  })
  .required();

const ProjetoForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCadastrarProjeto = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleCadastrarProjeto)}
      className={styles.formContainer}
    >
      <div>
        <InputTextComponent
          name="nome"
          label="Nome"
          placeholder="Digite seu Nome"
          control={control}
        />
      </div>
      <div>
        <InputTextComponent
          name="descricao"
          label="Descrição"
          placeholder="descreva aqui..."
          control={control}
        />
      </div>

      <Button type="submit">Enviar</Button>
    </form>
  );
};

export default ProjetoForm;
