import { Box } from "@mui/material";
import CadastroTemplate from "../../components/CadastroTemplate/CadastroTemplate";
import EditaisForm from "../../components/EditaisForm/EditaisForm";

const CadastrarEditais = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CadastroTemplate name="Editais">
        <EditaisForm handleSubmitData={handleSubmit} cadastro={true} />
      </CadastroTemplate>
    </Box>
  );
};

export default CadastrarEditais;
