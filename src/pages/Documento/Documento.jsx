import { Box, Typography } from "@mui/material";
import ButtonGerenciamento from "../../components/UI/ButtonGerenciamento/ButtonGerenciamento";
import styles from "./documento.module.css";

import PersonIcon from "@mui/icons-material/Person";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const Documento = () => {
  return (
    <section className={styles.documentoContainer}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
        color="primary.main"
      >
        Gerenciamento de Documento
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
          path="cadastrar-documento"
          icon={<PersonIcon sx={{ fontSize: 50 }} />}
        >
          Cadastrar Documento
        </ButtonGerenciamento>

        <ButtonGerenciamento 
          path="atualizar-documento"
          icon={<ManageAccountsIcon sx={{ fontSize: 50 }} />}
        >
          Atualizar Documento
        </ButtonGerenciamento>

        <ButtonGerenciamento
          icon={<PersonRemoveIcon sx={{ fontSize: 50 }} />}
        >
            Remover Documento
        </ButtonGerenciamento>

        <ButtonGerenciamento
          icon={<PersonSearchIcon sx={{ fontSize: 50 }} />}
        >
          Procurar Documento
        </ButtonGerenciamento>
      </Box>
    </section>
  );
};

export default Documento;
