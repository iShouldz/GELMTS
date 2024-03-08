import styles from './admin.module.css'
import ButtonGerenciamento from '../../components/UI/ButtonGerenciamento/ButtonGerenciamento'

import PersonIcon from "@mui/icons-material/Person";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ClearIcon from '@mui/icons-material/Clear';

import { Box, Typography } from '@mui/material';
const Admin = () => {
  return (
    <section className={styles.adminContainer}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
        color="primary.main"
      >
        Funções adminstrativas
      </Typography>

      <Box
        sx={{
          marginTop: "10vh",
          display: "flex",
          gap: "50px",
          justifyContent: "center",
          width: "100%",
          flexWrap: "wrap"
        }}
      >
        <ButtonGerenciamento 
          path="cadastrar-bolsa"
          icon={<PersonIcon sx={{ fontSize: 50 }} />}
        >
          Cadastrar Usuario
        </ButtonGerenciamento>

        <ButtonGerenciamento 
          path="atualizar-bolsa"
          icon={<ManageAccountsIcon sx={{ fontSize: 50 }} />}
        >
          Atualizar Usuario
        </ButtonGerenciamento>

        <ButtonGerenciamento
          icon={<PersonRemoveIcon sx={{ fontSize: 50 }} />}
        >
            Remover Usuario
        </ButtonGerenciamento>

        <ButtonGerenciamento
          icon={<PersonSearchIcon sx={{ fontSize: 50 }} />}
        >
          Procurar Usuario
        </ButtonGerenciamento>

        <ButtonGerenciamento icon={<ClearIcon sx={{ fontSize: 50 }} />}>
            Deletar conta
        </ButtonGerenciamento>

        <ButtonGerenciamento icon={<ExitToAppIcon sx={{ fontSize: 50 }} />}>
            Sair
        </ButtonGerenciamento>
      </Box>
    </section>
  )
}

export default Admin