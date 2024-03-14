/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
import styles from "./cadastroTemplate.module.css";
const CadastroTemplate = ({ name, children }) => {
  return (
    <section className={styles.FormularioContainer}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
        color="primary.main"
      >
        Formulario de cadastro
      </Typography>

      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center" }}
        color="primary.main"
      >
        Cadastrar {name}
      </Typography>

      {children}
    </section>
  );
};

export default CadastroTemplate;
