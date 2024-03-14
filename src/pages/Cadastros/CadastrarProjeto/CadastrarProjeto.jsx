import { Typography } from "@mui/material";
import styles from "./cadastrarProjeto.module.css";
import ProjetoForm from "../../../components/Formularios/ProjetoForm/ProjetoForm";

const CadastrarProjeto = () => {
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
        Cadastrar Projeto
      </Typography>

      <ProjetoForm />
    </section>
  );
};

export default CadastrarProjeto;
