import { Box, Typography } from "@mui/material";
import ButtonGerenciamento from "../../components/UI/ButtonGerenciamento/ButtonGerenciamento";
import styles from "./bolsa.module.css";

import PersonIcon from "@mui/icons-material/Person";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const Bolsa = () => {
  return (
    <section className={styles.bolsaContainer}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
        color="primary.main"
      >
        Gerenciamento de Bolsa
      </Typography>

      <Box
        sx={{
          marginTop: "10vh",
          display: "flex",
          gap: "50px",
          justifyContent: "center",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <ButtonGerenciamento 
          path="cadastrar-bolsa"
          icon={<PersonIcon sx={{ fontSize: 50 }} />}
        >
          Cadastrar Bolsa
        </ButtonGerenciamento>

        <ButtonGerenciamento 
          path="atualizar-bolsa"
          icon={<ManageAccountsIcon sx={{ fontSize: 50 }} />}
        >
          Atualizar Bolsa
        </ButtonGerenciamento>

        <ButtonGerenciamento
          icon={<PersonRemoveIcon sx={{ fontSize: 50 }} />}
        >
            Remover Bolsa
        </ButtonGerenciamento>

        <ButtonGerenciamento
          icon={<PersonSearchIcon sx={{ fontSize: 50 }} />}
        >
          Procurar Bolsa
        </ButtonGerenciamento>
      </Box>
    </section>
  );
};

export default Bolsa;
