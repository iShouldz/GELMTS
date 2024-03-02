import { Box, Typography } from "@mui/material";
import ButtonGerenciamento from "../../components/UI/ButtonGerenciamento/ButtonGerenciamento";
import styles from './estudantes.module.css'

const Estudantes = () => {
  return (
    <section className={styles.estudantesContainer}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
        color="primary.main"
      >
        Gerenciamento de Estudantes
      </Typography>

      <Box sx={{ marginTop: "10vh", display: 'flex', gap: '50px', justifyContent: 'center', width: '100%'}}>
        <ButtonGerenciamento>Cadastrar Estudante</ButtonGerenciamento>

        <ButtonGerenciamento>Atualizar Estudante</ButtonGerenciamento>

        <ButtonGerenciamento>Remover Estudante</ButtonGerenciamento>

        <ButtonGerenciamento>Procurar Estudante</ButtonGerenciamento>
      </Box>
    </section>
  );
};

export default Estudantes;
