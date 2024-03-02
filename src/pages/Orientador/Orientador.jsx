import { Box, Typography } from "@mui/material";
import ButtonGerenciamento from "../../components/UI/ButtonGerenciamento/ButtonGerenciamento";
import styles from "./orientador.module.css";
import PersonIcon from "@mui/icons-material/Person";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

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
        <ButtonGerenciamento path="cadastrar-orientador" icon={<PersonIcon sx={{ fontSize: 50 }} />}>
          Cadastrar Orientador
        </ButtonGerenciamento>

        <ButtonGerenciamento path="atualizar-orientador" icon={<ManageAccountsIcon sx={{ fontSize: 50 }} />}>
            Atualizar Orientador
        </ButtonGerenciamento>

        <ButtonGerenciamento path="remover-orientador" icon={<PersonRemoveIcon sx={{ fontSize: 50 }} />}>
          Remover Orientador
        </ButtonGerenciamento>

        <ButtonGerenciamento path="pesquisar-orientador" icon={<PersonSearchIcon sx={{ fontSize: 50 }} />}>
          Procurar Orientador
        </ButtonGerenciamento>
      </Box>
    </section>
  );
};

export default Orientador;
