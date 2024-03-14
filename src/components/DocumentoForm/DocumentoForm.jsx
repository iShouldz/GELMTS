import { Box, Button, TextField, IconButton} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./documentoForm.module.css";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { useNavigate } from "react-router-dom";


const schema = yup
  .object({
    nome: yup.string().required(),
    descricao: yup.string().required(),
    link: yup.string().required()
  })
  .required();

const DocumentoForm = () => {
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

  const handleCadastrarDocumento = (data) => {
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
      onSubmit={handleSubmit(handleCadastrarDocumento)}
      className={styles.formDocumentoContainer}
    >
    <div className={styles.inputGroup}>
      <TextField
        name="nome"
        label="Nome do Documento"
        placeholder="Nome do Documento"
        {...register("nome")}
      />
      <TextField
        name="descricao"
        label="Descrição"
        placeholder="descreva aqui..."
        {...register("descricao")}
      />
    </div>
    <div className={styles.inputGroup}>
      <TextField
        name="link"
        label="Link"
        placeholder="Digite o link"
        {...register("link")}
      />
    </div>
    <Box sx={{ display: "flex", gap: "30px" }}>
      <Button onClick={() => navigate("/documento")} variant="contained">Voltar</Button>
      <Button type="submit" variant="contained">Enviar</Button>
    </Box>
    </form>
  );
};

export default DocumentoForm;
