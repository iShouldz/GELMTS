import { Box, Typography } from "@mui/material";
import ButtonGerenciamento from "../../components/UI/ButtonGerenciamento/ButtonGerenciamento";
import styles from "./projeto.module.css";

import PersonIcon from "@mui/icons-material/Person";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

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
        <ButtonGerenciamento 
          path="cadastrar-projeto"
          icon={<PersonIcon sx={{ fontSize: 50 }} />}
        >
          Cadastrar Projeto
        </ButtonGerenciamento>

        <ButtonGerenciamento 
          path="atualizar-projeto"
          icon={<ManageAccountsIcon sx={{ fontSize: 50 }} />}
        >
          Atualizar Projeto
        </ButtonGerenciamento>

        <ButtonGerenciamento
          icon={<PersonRemoveIcon sx={{ fontSize: 50 }} />}
        >
            Remover Projeto
        </ButtonGerenciamento>

        <ButtonGerenciamento
          icon={<PersonSearchIcon sx={{ fontSize: 50 }} />}
        >
          Procurar Projeto
        </ButtonGerenciamento>
      </Box>
    </section>
  );
};

export default Projeto;
