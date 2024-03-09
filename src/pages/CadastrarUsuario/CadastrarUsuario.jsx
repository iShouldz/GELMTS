import { Typography } from "@mui/material";
import styles from './cadastrarusuario.module.css'
import UsuarioForm from "../../components/UsuarioForm/UsuarioForm";
const CadastrarUsuario = () => {

  const handleSubmit = (data) => {
    console.log(data)
  }

  return (
    <section className={styles.UsuarioContainer}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
        color="primary.main"
      >
        Formulario de cadastro
      </Typography>

      {/* <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center" }}
        color="primary.main"
      >
        Cadastrar Usuario
      </Typography> */}

      <UsuarioForm handleSubmitData={handleSubmit}/>
    </section>
  );
};

export default CadastrarUsuario;
