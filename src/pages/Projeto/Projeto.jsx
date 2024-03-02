import { Box, Typography } from "@mui/material";
import ButtonGerenciamento from "../../components/UI/ButtonGerenciamento/ButtonGerenciamento";
import styles from "./projeto.module.css";

const Projeto = () => {
  return (
    <section className={styles.projetoContainer}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
        color="primary.main"
      >
        Gerenciamento de Projeto
      </Typography>

      <Box
        sx={{
          marginTop: "10vh",
          display: "flex",
          gap: "50px",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <ButtonGerenciamento path="cadastrar-projeto">
          Cadastrar Projeto
        </ButtonGerenciamento>

        <ButtonGerenciamento path="atualizar-projeto">
          Atualizar Projeto
        </ButtonGerenciamento>

        <ButtonGerenciamento>Remover Projeto</ButtonGerenciamento>

        <ButtonGerenciamento>Procurar Projeto</ButtonGerenciamento>
      </Box>
    </section>
  );
};

export default Projeto;
