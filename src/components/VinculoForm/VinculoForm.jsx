/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputTextComponent from "../UI/InputTextComponent/InputTextComponent";
import styles from "./vinculoform.module.css";
import SelectComponent from "../../components/UI/SelectComponent/SelectComponent";

const schema = yup
  .object({
    tipoVinculo: yup.string().required(),
    horasVinculo: yup.string().required(),
    //*Necessario fazer validação para data de fim > inicio.
    //Para quem for fazer, recomendo o when condicional da yup */},
    inicioVinculo: yup.string().required(),
    fimVinculo: yup.string().required(),
    bolsista: yup.string().required(),
    status: yup.string().required(),
    termo: yup.string().required(),
  })
  .required();

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
        <SelectComponent
          name="tipoVinculo"
          listagem={["teste"]}
          helperText="Digite o tipo do vinculo"
          control={control}
        />

        <InputTextComponent
          name="horasVinculo"
          label="Horas vinculo"
          placeholder="Digite a quantidade de horas vinculo"
          control={control}
        />
      </div>

      <div className={styles.inputGroup}>
        <InputTextComponent
          name="inicioVinculo"
          helperText="Selecione a data de inicio do vinculo"
          type="Date"
          control={control}
        />

        <InputTextComponent
          name="fimVinculo"
          helperText="Selecione a data de fim do vinculo"
          type="Date"
          control={control}
        />
      </div>

      <div className={styles.inputGroup}>
        <SelectComponent
          name="bolsista"
          listagem={["Sim", "Não"]}
          helperText="Vinculo de bolsista?"
          control={control}
        />

        <SelectComponent
          name="status"
          listagem={["Aberto", "Fechado"]}
          helperText="Selecione o status do vinculo"
          control={control}
        />
      </div>

      <div className={styles.inputGroup}>
        <InputTextComponent
          name="termo"
          type="file"
          helperText="Anexe o termo assinado"
          control={control}
        />
      </div>
    </form>
  );
};

export default VinculoForm;
