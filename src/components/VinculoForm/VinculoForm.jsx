/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputTextComponent from "../UI/InputTextComponent/InputTextComponent";
import styles from "./vinculoform.module.css";

const schema = yup.object({}).required();

const VinculoForm = ({ handleSubmitData }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit(handleSubmitData)}
      className={styles.formContainer}
    >
      <div className={styles.inputGroup}>
        <InputTextComponent
          name="nome"
          label="Nome"
          placeholder="Digite o nome"
          control={control}
        />

        <InputTextComponent
          name="nome"
          label="Nome"
          placeholder="Digite o nome"
          control={control}
        />
      </div>

      <div className={styles.inputGroup}>
        <InputTextComponent
          name="nome"
          label="Nome"
          placeholder="Digite o nome"
          control={control}
        />
        <InputTextComponent
          name="nome"
          label="Nome"
          placeholder="Digite o nome"
          control={control}
        />
      </div>

      <div className={styles.inputGroup}>
        <InputTextComponent
          name="nome"
          label="Nome"
          placeholder="Digite o nome"
          control={control}
        />

        <InputTextComponent
          name="nome"
          label="Nome"
          placeholder="Digite o nome"
          control={control}
        />
      </div>

      <div className={styles.inputGroup}>
        <InputTextComponent
          name="nome"
          label="Nome"
          placeholder="Digite o nome"
          control={control}
        />
      </div>
    </form>
  );
};

export default VinculoForm;
