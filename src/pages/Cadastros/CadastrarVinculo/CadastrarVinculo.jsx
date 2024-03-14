import { Typography } from "@mui/material";
import styles from "./cadastrarVinculo.module.css";
import VinculoForm from "../../../components/Formularios/VinculoForm/VinculoForm";

const CadastrarVinculo = () => {
  const handleCadastrar = (data) => {
    console.log(data);
  };

  return (
    <section className={styles.FormularioReuniaoContainer}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
        color="primary.main"
      >
        Formulário de cadastro
      </Typography>

      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center" }}
        color="primary.main"
      >
        Cadastrar Vinculo
      </Typography>

      <VinculoForm handleSubmitData={handleCadastrar} cadastro={true} />
    </section>
  );
};

export default CadastrarVinculo;
