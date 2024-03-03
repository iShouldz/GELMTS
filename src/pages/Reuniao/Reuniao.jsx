import { Box, Typography } from "@mui/material";
import ButtonGerenciamento from "../../components/UI/ButtonGerenciamento/ButtonGerenciamento";
import styles from "./reuniao.module.css";
import PersonIcon from "@mui/icons-material/Person";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const Reuniao = () => {
  return (
    <section className={styles.reuniaoContainer}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
        color="primary.main"
      >
        Gerenciamento de Reuniões
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
        <ButtonGerenciamento path="cadastrar-reuniao" icon={<PersonIcon sx={{ fontSize: 50 }} />}>
          Cadastrar Reunião
        </ButtonGerenciamento>

        <ButtonGerenciamento path="atualizar-reuniao" icon={<ManageAccountsIcon sx={{ fontSize: 50 }} />}>
            Atualizar Reunião
        </ButtonGerenciamento>

        <ButtonGerenciamento path="remover-reuniao" icon={<PersonRemoveIcon sx={{ fontSize: 50 }} />}>
          Remover Reunião
        </ButtonGerenciamento>

        <ButtonGerenciamento path="pesquisar-reuniao" icon={<PersonSearchIcon sx={{ fontSize: 50 }} />}>
          Procurar Reunião
        </ButtonGerenciamento>
      </Box>
    </section>
  );
};

export default Reuniao;
