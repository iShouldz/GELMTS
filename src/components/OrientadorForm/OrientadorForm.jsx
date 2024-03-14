/* eslint-disable react/prop-types */
import { Button, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./orientadorForm.module.css";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import InputTextComponent from "../UI/InputTextComponent/InputTextComponent";
import { useNavigate } from "react-router-dom";

import { cursos } from "../../../utils/lists";
import SelectComponent from "../UI/SelectComponent/SelectComponent";

const schema = yup
  .object({
    nome: yup.string().required(),
    cpf: yup.string().required(),
    curso: yup.string().required(),
    especialidade: yup.string().required(),
    projeto: yup.string().required(),
    orientandos: yup.array().of(
      yup.string().required()
    ),
    login: yup.string().required(),
    senha: yup.string().required(),
  })
  .required();

const OrientadorForm = ({ handleSubmitData, cadastro = false}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { orientandos: [''] }
  });

  console.log(errors)

  const navigate = useNavigate();

  const orientandos = watch("orientandos");

  const addOrientando = () => {
    setValue("orientandos", [...orientandos, '']);
  };

  {
    Object.keys(errors).length > 0 && (
      <div className={styles.errorContainer}>
        <p>Houve alguns erros no formulário:</p>
        <ul>
          {Object.keys(errors).map((fieldName, index) => (
            <li key={index}>{errors[fieldName].message}</li>
          ))}
        </ul>
      </div>
    )
  }


  return (
    <form
      onSubmit={handleSubmit(handleSubmitData)}
      className={styles.formOrientadorContainer}
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
          placeholder="Selecione seu curso"
          control={control}
          listagem={cursos}
        />
        <InputTextComponent
          name="especialidade"
          label="Especialidade"
          placeholder="Selecione sua especialidade"
          control={control}
        />
        <SelectComponent
          name="projeto"
          label="Projeto"
          control={control}
        />
      </div>

      <div className={styles.inputGroup}>
        {orientandos.map((orientando, index) => (
          <div key={index} className={styles.inputGroup}>
            <InputTextComponent
              name={`orientandos[${index}]`}
              label={`Orientando ${index + 1}`}
              placeholder="Selecione seu(s) orientando(s)"
              variant="outlined"
              {...register(`orientandos[${index}]`)}
              control={control}
            />
          </div>
        ))}

        <IconButton onClick={addOrientando}>
          <PersonAddAlt1Icon />
        </IconButton>
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
        {cadastro && (
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "primary.main" }}
            onClick={() => navigate("/orientadores")}
          >
            Voltar
          </Button>
        )}


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

export default OrientadorForm;
