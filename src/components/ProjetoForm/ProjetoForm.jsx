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
    descricao: yup.string().required(),
    participantes: yup.string().required(),
    antigosParticipantes: yup.string().required(),
    orientador: yup.string().required(),
    scrumMaster: yup.string().required(),
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
      <div className={styles.inputGroup}>
        <InputTextComponent
          name="nome"
          label="Nome"
          placeholder="Digite seu Nome"
          control={control}
        />
        <InputTextComponent
          name="descricao"
          label="Descrição"
          placeholder="descreva aqui..."
          control={control}
        />
      </div>
      <div className={styles.inputGroup}>
        <InputTextComponent
          name="participante"
          label="Participante"
          placeholder="Selecione um participante"
          control={control}
        />
        <InputTextComponent
          name="antigoParticipante"
          label="Antigo Participante"
          placeholder="Selecione um participante"
          control={control}
        />
      </div>
      <div className={styles.inputGroup}>
        <InputTextComponent
          name="orientador"
          label="Orientador"
          placeholder="Selecione um orientador"
          control={control}
        />
        <InputTextComponent
          name="scrumMaster"
          label="Scrum Master"
          placeholder="Selecione um Scrum Master"
          control={control}
        />
      </div>

      <Button type="submit">Enviar</Button>
    </form>
  );
};

export default ProjetoForm;
