import { Box, Typography } from "@mui/material";
import styles from "./vinculo.module.css";
import ButtonGerenciamento from "../../components/UI/ButtonGerenciamento/ButtonGerenciamento";

import PersonIcon from "@mui/icons-material/Person";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

const Vinculo = () => {
  return (
    <section className={styles.vinculoContainer}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
        color="primary.main"
      >
        Gerenciamento de Vinculo
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
          path="cadastrar-vinculo"
          icon={<PersonIcon sx={{ fontSize: 50 }} />}
        >
          Cadastrar Vinculo
        </ButtonGerenciamento>

        <ButtonGerenciamento
          path=""
          icon={<PersonRemoveIcon sx={{ fontSize: 50 }} />}
        >
          Finalizar Vinculo
        </ButtonGerenciamento>
      </Box>
    </section>
  );
};

export default Vinculo;
