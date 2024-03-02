import { Typography } from "@mui/material";
import styles from "./cadastrarEstudante.module.css";
import EstudanteForm from "../../components/EstudanteForm/EstudanteForm";

const CadastrarEstudante = () => {
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
        Cadastrar Estudante
      </Typography>

      <EstudanteForm />
    </section>
  );
};

export default CadastrarEstudante;
