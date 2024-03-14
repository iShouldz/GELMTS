import { Typography } from "@mui/material";
import styles from "./cadastrarBolsa.module.css";
import BolsaForm from "../../../components/Formularios/BolsaForm/BolsaForm";

const CadastrarBolsa = () => {
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
        Cadastrar Bolsa
      </Typography>

      {/*Se refere a uml de inscrição - edital, inscrições de estudante são a lista de bolsas q ele se inscreveu */}
      <BolsaForm />
    </section>
  );
};

export default CadastrarBolsa;
