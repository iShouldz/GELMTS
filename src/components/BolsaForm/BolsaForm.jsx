import { Button, TextField, IconButton} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./bolsaForm.module.css";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const schema = yup
  .object({
    descricao: yup.string().required(),
    edital: yup.string().required(),
    vagas: yup.string().required(),
    periodoInscricao: yup.string().required()
  })
  .required();

const BolsaForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue
  } = useForm({
    resolver: yupResolver(schema)
  });

  const handleCadastrarBolsa = (data) => {
    console.log(data);
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
      onSubmit={handleSubmit(handleCadastrarBolsa)}
      className={styles.formBolsaContainer}
    >
    <div className={styles.inputGroup}>
      <TextField
        name="descricao"
        label="Descrição"
        placeholder="descreva aqui..."
        {...register("descricao")}
      />
      <TextField
        name="edital"
        label="Edital"
        placeholder="Nome do Edital"
        {...register("edital")}
      />
    </div>
    <div className={styles.inputGroup}>
      <TextField
        name="vagas"
        label="Vagas"
        placeholder="Quantidade de vagas"
        {...register("vagas")}
      />
      <TextField
        name="periodoInscricao"
        label="Período de Inscrição"
        placeholder="Período de Inscrição"
        {...register("periodoInscricao")}
      />
    </div>

      <Button type="submit">Enviar</Button>
    </form>
  );
};

export default BolsaForm;
