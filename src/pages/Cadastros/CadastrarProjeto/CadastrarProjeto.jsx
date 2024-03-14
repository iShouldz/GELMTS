import ProjetoForm from "../../../components/Formularios/ProjetoForm/ProjetoForm";
import CadastroTemplate from "../../../components/CadastroTemplate/CadastroTemplate";
import { Box } from "@mui/material";
const CadastrarProjeto = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CadastroTemplate name="Cadastrar projeto">
        <ProjetoForm handleSubmitData={handleSubmit} />
      </CadastroTemplate>
    </Box>
  );
};

export default CadastrarProjeto;
