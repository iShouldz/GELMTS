/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./estudanteForm.module.css";
import InputTextComponent from "../UI/InputTextComponent/InputTextComponent";
import SelectComponent from "../UI/SelectComponent/SelectComponent";
import { useNavigate } from "react-router-dom";

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

const EstudanteForm = ({ handleSubmitData }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate.goBack();
  };
  {
    /*Componentização: Passando a função de submit como props, podemos reaproveitar esse componente de 
    formulario em outros cenarios */
  }
  return (
    <form
      onSubmit={handleSubmit(handleSubmitData)}
      className={styles.formContainer}
    >
      <div className={styles.inputGroup}>
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
      <div className={styles.inputGroup}>
        <SelectComponent
          name="curso"
          label="Curso"
          control={control}
          placeholder="Selecione o curso"
        />
        <SelectComponent
          name="orientador"
          label="Orientador"
          control={control}
        />
      </div>

      <div className={styles.inputGroup}>
        <InputTextComponent
          control={control}
          name="vinculo"
          label="Vinculo"
          placeholder="Digite seu vinculo"
        />
        <SelectComponent label="Projeto" control={control} name="projeto" />
      </div>

      <div className={styles.inputGroup}>
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

      <div>
        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "primary.main" }}
          onClick={() => navigate("/estudantes")}
        >
          Voltar
        </Button>

        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "primary.main" }}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default EstudanteForm;
