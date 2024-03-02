import { Typography } from "@mui/material";
import styles from "./atualizarProjeto.module.css";
import ProjetoForm from "../../components/ProjetoForm/ProjetoForm";

const AtualizarProjeto = () => {
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
        Atualizar Projeto
      </Typography>

      <ProjetoForm />
    </section>
  );
};

export default AtualizarProjeto;
