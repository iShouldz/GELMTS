/* eslint-disable no-unused-vars */
import { Button, TextField} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./estudanteForm.module.css";
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

const EstudanteForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCadastrarEstudante = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleCadastrarEstudante)}
      className={styles.formContainer}
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
          label="Orientador"
          placeholder="Selecione seu orientador"
          variant="outlined"
          {...register("orientador")}
        />
      </div>

      <div>
        <TextField
          id="outlined-basic"
          label="Vinculo"
          placeholder="Digite seu vinculo"
          variant="outlined"
          {...register("vinculo")}
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

export default EstudanteForm;
