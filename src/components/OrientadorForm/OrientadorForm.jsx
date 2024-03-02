/* eslint-disable no-unused-vars */
import { Button, TextField} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./orientadorForm.module.css";
import InputTextComponent from "../UI/InputTextComponent/InputTextComponent";

const schema = yup
  .object({
    nome: yup.string().required(),
    cpf: yup.string().required(),
    curso: yup.string().required(),
    orientando: yup.string().required(),
    especialidade: yup.string().required(),
    projeto: yup.string().required(),
    login: yup.string().required(),
    senha: yup.string().required(),
  })
  .required();

const OrientadorForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCadastrarOrientador = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleCadastrarOrientador)}
      className={styles.formOrientadorContainer}
    >
      <div>
        <InputTextComponent
          name="nome"
          label="Nome"
          placeholder="Digite seu Nome"
          control={control}
        />
        <InputTextComponent
          name="cpf"
          label="CPF"
          placeholder="Digite seu CPF"
          control={control}
        />
      </div>

      <div>
        <TextField
          id="outlined-basic"
          label="Curso"
          placeholder="Selecione seu curso"
          variant="outlined"
          {...register("curso")}
        />
        <TextField
          id="outlined-basic"
          label="Especialidade"
          placeholder="Digite sua especialidade"
          variant="outlined"
          {...register("especialidade")}
        />
      </div>

      <div>
        <TextField
          id="outlined-basic"
          label="Orientando"
          placeholder="Selecione seu(s) orientando(s)"
          variant="outlined"
          {...register("orientando")}
        />
        <TextField
          id="outlined-basic"
          label="Projeto"
          placeholder="Selecione o projeto"
          variant="outlined"
          {...register("projeto")}
        />
      </div>

      <div>
        <InputTextComponent
          name="login"
          label="Login"
          placeholder="Digite o Login"
          control={control}
        />

        <InputTextComponent
          name="senha"
          label="Senha"
          placeholder="Digite a senha"
          control={control}
        />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default OrientadorForm;
