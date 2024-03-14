import { Box } from "@mui/material";
import UsuarioForm from "../../../components/Formularios/UsuarioForm/UsuarioForm";
import CadastroTemplate from "../../../components/CadastroTemplate/CadastroTemplate";
const CadastrarUsuario = () => {
  const handleSubmit = (data) => {
    console.log("Dados do formulário:", data);

    fetch("http://localhost:8080/professores")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao obter os professores");
        }
        return response.json();
      })
      .then((professores) => {
        console.log("Professores obtidos com sucesso:", professores);
      });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CadastroTemplate name="Cadastrar usuarios">
        <UsuarioForm handleSubmitData={handleSubmit} />
      </CadastroTemplate>
    </Box>
  );
};

export default CadastrarUsuario;
