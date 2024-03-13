import { Typography } from "@mui/material";
import styles from "./cadastrarusuario.module.css";
import UsuarioForm from "../../components/UsuarioForm/UsuarioForm";
const CadastrarUsuario = () => {
  const handleSubmit = (data) => {
    console.log("Dados do formulário:", data);
    
    // fetch("http://localhost:8080/professores")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Erro ao obter os professores");
    //     }
    //     return response.json();
    //   })
    //   .then((professores) => {
    //     console.log("Professores obtidos com sucesso:", professores);
    //     // Faça algo com os dados dos professores aqui
    //   })
    //   .catch((error) => {
    //     console.error("Erro ao obter os professores:", error.message);
    //   });
  };
 
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

      <UsuarioForm handleSubmitData={handleSubmit} />
    </section>
  );
};

export default CadastrarUsuario;
