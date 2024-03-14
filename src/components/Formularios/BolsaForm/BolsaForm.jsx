import { Box, Button, TextField, IconButton} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./bolsaForm.module.css";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  
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
    <Box sx={{ display: "flex", gap: "30px" }}>
      <Button onClick={() => navigate("/bolsa")} variant="contained">Voltar</Button>
      <Button type="submit" variant="contained">Enviar</Button>
    </Box>
    </form>
  );
};

export default BolsaForm;
