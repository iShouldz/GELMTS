import { Box } from "@mui/material";
import UsuarioForm from "../../../components/Formularios/UsuarioForm/UsuarioForm";
import CadastroTemplate from "../../../components/CadastroTemplate/CadastroTemplate";
import { useNavigate } from "react-router-dom";
const CadastrarUsuario = () => {
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    console.log("Dados do formulário:", data);
    const {
      nome,
      login,
      senha,
      curso,
      celular,
      rg,
      orgaoRG,
      dataEmissao,
      CPF,
      estadoCivil,
      naturalidade,
      nacionalidade,
      rua,
      cidade,
      cep,
      estado,
      numero,
      matricula,

      role,
    } = data;
    if (role === "professores") {
      fetch("http://localhost:8083/professores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nome,
          login: login,
          password: senha,
          curso: curso,
          celular: celular,
          rg: rg,
          orgaoExpedidorRg: orgaoRG,
          emissaoRg: formatDate(dataEmissao),
          cpf: formatCPF(CPF),
          estadoCivil: estadoCivil,
          naturalidade: naturalidade,
          nacionalidade: nacionalidade,
          matricula: "5465454654",
          keycloak: "655685656",
          endereco: {
            rua: rua,
            cidade: cidade,
            cep: cep,
            estado: estado,
            numero: numero,
          },
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao fazer o POST");
          } else {
            console.log(response);
          }
          return response.json();
        })
        .then((data) => {
          console.log("POST bem-sucedido:", data);
          navigate("/admin");
        })
        .catch((error) => {
          console.error("Erro ao fazer o POST erro:", error);
        });
    } else {
      fetch("http://localhost:8083/estudantes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nome,
          login: login,
          password: senha,
          curso: curso,
          celular: celular,
          rg: rg,
          orgaoExpedidorRg: orgaoRG,
          emissaoRg: formatDate(dataEmissao),
          cpf: formatCPF(CPF),
          estadoCivil: estadoCivil,
          naturalidade: naturalidade,
          nacionalidade: nacionalidade,
          matricula: matricula,
          keycloak: "655685656",
          endereco: {
            rua: rua,
            cidade: cidade,
            cep: cep,
            estado: estado,
            numero: numero,
          },
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao fazer o POST");
          } else {
            console.log(response);
          }
          return response.json();
        })
        .then((data) => {
          console.log("POST bem-sucedido:", data);
          navigate("/admin");
        })
        .catch((error) => {
          console.error("Erro ao fazer o POST erro:", error);
        });
    }
  };

  const formatCPF = (cpf) => {
    const cleanedCPF = cpf.replace(/\D/g, "");
    return cleanedCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("pt-BR", { timeZone: "UTC" });

    const [day, month, year] = formattedDate.split("/");
    if (day.length === 2 && month.length === 2 && year.length === 4) {
      return formattedDate;
    } else {
      return dateString;
    }
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
