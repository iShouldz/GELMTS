import { Typography } from "@mui/material";
import styles from "./cadastrarDocumento.module.css";
import DocumentoForm from "../../components/Formularios/DocumentoForm/DocumentoForm";

const CadastrarDocumento = () => {
  return (
    <section className={styles.FormularioContainer}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
        color="primary.main"
      >
        Formulario de cadastro
      </Typography>

      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center" }}
        color="primary.main"
      >
        Cadastrar Documento
      </Typography>

      <DocumentoForm />
    </section>
  );
};

export default CadastrarDocumento;
