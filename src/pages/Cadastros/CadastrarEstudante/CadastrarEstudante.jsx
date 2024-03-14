import { Typography } from "@mui/material";
import styles from "./cadastrarEstudante.module.css";
import EstudanteForm from "../../../components/Formularios/EstudanteForm/EstudanteForm";

const CadastrarEstudante = () => {

  const handleCadastrar = (data) => {
    console.log(data)
  }

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
        Cadastrar Estudante
      </Typography>

      <EstudanteForm handleSubmitData={handleCadastrar} cadastro={true}/>
    </section>
  );
};

export default CadastrarEstudante;
