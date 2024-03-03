import { Box, Typography } from "@mui/material"
import ButtonGerenciamento from "../../components/UI/ButtonGerenciamento/ButtonGerenciamento"
import styles from './editais.module.css'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BorderColorIcon from '@mui/icons-material/BorderColor';
const Editais = () => {
  return (
    <section className={styles.editaisContainer}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
        color="primary.main"
      >
        Gerenciamento de Editais
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
        <ButtonGerenciamento path="cadastrar-edital" icon={<BookmarkAddIcon sx={{ fontSize: 50 }} />}>
          Cadastrar Edital
        </ButtonGerenciamento>

        <ButtonGerenciamento path="" icon={<BorderColorIcon sx={{ fontSize: 50 }} />}>
            Atualizar Edital
        </ButtonGerenciamento>

        <ButtonGerenciamento path="" icon={<BookmarkRemoveIcon sx={{ fontSize: 50 }} />}>
          Remover Edital
        </ButtonGerenciamento>

        <ButtonGerenciamento path="" icon={<MenuBookIcon sx={{ fontSize: 50 }} />}>
          Procurar Edital
        </ButtonGerenciamento>
      </Box>
    </section>
  )
}

export default Editais