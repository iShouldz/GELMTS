import { Button, TextField, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./orientadorForm.module.css";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import InputTextComponent from "../UI/InputTextComponent/InputTextComponent";

const schema = yup
  .object({
    nome: yup.string().required(),
    cpf: yup.string().required(),
    curso: yup.string().required(),
    especialidade: yup.string().required(),
    projeto: yup.string().required(),
    orientandos: yup.array().of(
      yup.string().required()
    )
  })
  .required();

const OrientadorForm = () => {
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

  const handleCadastrarOrientador = (data) => {
    console.log(data);
  };

  const orientandos = watch("orientandos");

  const addOrientando = () => {
    setValue("orientandos", [...orientandos, '']);
  };

  {Object.keys(errors).length > 0 && (
    <div className={styles.errorContainer}>
      <p>Houve alguns erros no formulário:</p>
      <ul>
        {Object.keys(errors).map((fieldName, index) => (
          <li key={index}>{errors[fieldName].message}</li>
        ))}
      </ul>
    </div>
  )}
  

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
          placeholder="Selecione sua especialidade"
          variant="outlined"
          {...register("especialidade")}
        />
        <TextField
          id="outlined-basic"
          label="Projeto"
          placeholder="Selecione seu projeto"
          variant="outlined"
          {...register("projeto")}
        />
      </div>

      {orientandos.map((orientando, index) => (
        <div key={index}>
          <TextField
            id={`orientandos[${index}]`}
            label={`Orientando ${index + 1}`}
            placeholder="Selecione seu(s) orientando(s)"
            variant="outlined"
            {...register(`orientandos[${index}]`)}
          />
        </div>
      ))}

      <IconButton onClick={addOrientando}>
        <PersonAddAlt1Icon />
      </IconButton>

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