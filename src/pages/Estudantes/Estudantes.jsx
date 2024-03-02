import { Box, Typography } from "@mui/material";
import ButtonGerenciamento from "../../components/UI/ButtonGerenciamento/ButtonGerenciamento";
import styles from "./estudantes.module.css";

import PersonIcon from "@mui/icons-material/Person";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
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

      <Box
        sx={{
          marginTop: "10vh",
          display: "flex",
          gap: "50px",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <ButtonGerenciamento
          path="cadastrar-estudante"
          icon={<PersonIcon sx={{ fontSize: 50 }} />}
        >
          Cadastrar Estudante
        </ButtonGerenciamento>

        <ButtonGerenciamento
          path="atualizar-estudante"
          icon={<ManageAccountsIcon sx={{ fontSize: 50 }} />}
        >
          Atualizar Estudante
        </ButtonGerenciamento>

        <ButtonGerenciamento
          path="remover-estudante"
          icon={<PersonRemoveIcon sx={{ fontSize: 50 }} />}
        >
          Remover Estudante
        </ButtonGerenciamento>

        <ButtonGerenciamento
          path="pesquisar-estudante"
          icon={<PersonSearchIcon sx={{ fontSize: 50 }} />}
        >
          Procurar Estudante
        </ButtonGerenciamento>
      </Box>
    </section>
  );
};

export default Estudantes;
