import { Box, Typography } from "@mui/material";
import ButtonGerenciamento from "../../components/UI/ButtonGerenciamento/ButtonGerenciamento";
import styles from "./orientador.module.css";

const Orientador = () => {
  return (
    <section className={styles.orientadorContainer}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
        color="primary.main"
      >
        Gerenciamento de Orientador
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
        <ButtonGerenciamento path="cadastrar-orientador">
          Cadastrar Orientador
        </ButtonGerenciamento>

        <ButtonGerenciamento>Atualizar Orientador</ButtonGerenciamento>

        <ButtonGerenciamento>Remover Orientador</ButtonGerenciamento>

        <ButtonGerenciamento>Procurar Orientador</ButtonGerenciamento>
      </Box>
    </section>
  );
};

export default Orientador;
