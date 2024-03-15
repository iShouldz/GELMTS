import { Box } from "@mui/material";
import UsuarioForm from "../../../components/Formularios/UsuarioForm/UsuarioForm";
import CadastroTemplate from "../../../components/CadastroTemplate/CadastroTemplate";
const CadastrarUsuario = () => {
  const handleSubmit = (data) => {
    console.log("Dados do formulário:", data);
    
    // fetch("http://localhost:8080/usuario/professores", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json", 
    //   },
    //   body: JSON.stringify({
    //     login: 'teste',
    //     senha: 'teste',
    //     nome: 'teste',
    //     curso: 'teste',
    //     celular: 'teste',
    //     rg: 'teste',
    //     orgaoExpedidorRg: 'teste',
    //     emissaoRg: 'teste',
    //     cpf: 'teste',
    //     gestao: 'teste',
    //     estadoCivil: 'teste',
    //     nacionalidade: 'teste',
    //     naturalidade: 'teste',
    //     especialidade: 'teste',
    //     endereco:{
    //       rua: 'teste',
    //       numero: 'teste',
    //       cidade: 'teste',
    //       estado: 'teste',
    //       cep: 'teste',
    //     }

    //   }),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Erro ao fazer o POST");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("POST bem-sucedido:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Erro ao fazer o POST erro:", error);
    //   });
  };

  fetch('http://localhost:8080/usuario/professores')
    .then((response) => {
        if (!response.ok) {
            throw new Error("Erro ao obter os professores");
        }else{
          console.log(response)
        }
        return response.json();
    })
    .then((professores) => {
        console.log("Professores obtidos com sucesso:", professores);
        console.log("Resposta:", professores);
    })
    .catch((error) => {
        console.error("Erro ao obter os professores:", error);
    });

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CadastroTemplate name="Cadastrar usuarios">
        <UsuarioForm handleSubmitData={handleSubmit} />
      </CadastroTemplate>
    </Box>
  );
};

export default CadastrarUsuario;
