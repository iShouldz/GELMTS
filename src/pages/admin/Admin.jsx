import styles from "./admin.module.css";
import ButtonGerenciamento from "../../components/UI/ButtonGerenciamento/ButtonGerenciamento";
import { useDispatch, useSelector } from "react-redux";

import PersonIcon from "@mui/icons-material/Person";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ClearIcon from "@mui/icons-material/Clear";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { userActions } from "../../store/login/loginSlice";
import { useEffect, useState } from "react";
import ModalDetails from "../../components/Modais/ModalDetails/ModalDetails";
import { cursos } from "../../../utils/lists";
import ModalSearch from "../../components/Modais/ModalSearch/ModalSearch";
import ModalUpdate from "../../components/Modais/ModalUpdate/ModalUpdate";
import UsuarioForm from "../../components/Formularios/UsuarioForm/UsuarioForm";
import avatarImage from "../../assets/mockupAvatarImage.jpg";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [fetching, setFetching] = useState(true);
  const [controlDialog, setControlDialog] = useState(false);
  const [controlDialogSearch, setControlDialogSearch] = useState(false);
  const [controlDialogRemove, setControlDialogRemove] = useState(false);
  const [controlDialogUpdate, setControlDialogUpdate] = useState(false);
  const [controlDialogDetails, setControlDialogDetails] = useState(false);
  const [actualFetchingData, setActualFetchingData] = useState([]);
  const [idUpdate, setIdUpdate] = useState(16);
  const [actualFetchingDataEstudantes, setActualFetchingDataEstudantes] =
    useState([]);

  const navigate = useNavigate();
  const [dataDetails, setDataDetails] = useState([
    {
      nome: "Pedro",
      login: "pedro@gmaail.com",
      password: "pedro",
      curso: "pedro",
      celular: "879849848",
      rg: "0982302983",
      orgaoExpedidorRg: "SDS",
      emissaoRg: "12/12/2014",
      cpf: "05621812450",
      estadoCivil: "solteiro",
      naturalidade: "brasil",
      nacionalidade: "brasileiro",
      matricula: "50556565",
      keycloak: "ddasdada",
      endereco: {
        rua: "rddua",
        cidade: "dd",
        cep: "77238d7",
        estado: "pernadmbuco",
        numero: "20983d23",
      },
    },
  ]);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userActions.handleUpdateLogin());
  };

  const handleClose = () => {
    setControlDialog(false);
  };

  const handleOpen = () => {
    setControlDialog(true);
  };

  const handleOpenSearch = () => {
    setControlDialogSearch(true);
  };

  const handleCloseSearch = () => {
    setControlDialogSearch(false);
  };

  const handleOpenRemove = () => {
    setControlDialogRemove(true);
  };

  const handleCloseRemove = () => {
    setControlDialogRemove(false);
  };

  const handleOpenUpdate = (id) => {
    setIdUpdate(id);
    setControlDialogUpdate(true);
  };

  const handleCloseUpdate = () => {
    setControlDialogUpdate(false);
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

  const handleUpdate = (data) => {
   
    console.log(data);
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
    } = data;
    fetch(`http://localhost:8083/professores/${idUpdate}`, {
      method: "PATCH",
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
          throw new Error("Erro ao fazer o UPDATe");
        } else {
          console.log(response);
        }
        return response.json();
      })
      .then((data) => {
        console.log("UPDATE bem-sucedido:", data);
        navigate("/admin");
      })
      .catch((error) => {
        console.error("Erro ao fazer o UPDATE erro:", error);
      });
  };

  const handleInfoDetails = (item) => {
    setControlDialogDetails(true);
    setDataDetails([item]);
    console.log(item);
  };

  useEffect(() => {
    fetch("http://localhost:8083/professores")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao obter os professores");
        } else {
          console.log(response);
        }
        return response.json();
      })
      .then((professores) => {
        console.log("Professores obtidos com sucesso:", professores);
        setActualFetchingData(professores);
      })
      .catch((error) => {
        console.error("Erro ao obter os vinculos:", error);
      });
    setFetching(true);

    fetch("http://localhost:8083/estudantes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao obter os professores");
        } else {
          console.log(response);
        }
        return response.json();
      })
      .then((estudantes) => {
        console.log("Professores obtidos com sucesso:", estudantes);
        setActualFetchingDataEstudantes(estudantes);
      })
      .catch((error) => {
        console.error("Erro ao obter os vinculos:", error);
      });
    setFetching(true);
  }, []);

  return (
    <>
      {fetching && (
        <section className={styles.adminContainer}>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10vh",
            }}
            color="primary.main"
          >
            Funções adminstrativas
          </Typography>

          <Box
            sx={{
              marginTop: "10vh",
              display: "flex",
              gap: "50px",
              justifyContent: "center",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "50px",
                justifyContent: "center",
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              <ButtonGerenciamento
                path="cadastrar-usuario"
                icon={<PersonIcon sx={{ fontSize: 50 }} />}
              >
                Cadastrar Usuario
              </ButtonGerenciamento>

              <ButtonGerenciamento
                onClick={handleOpen}
                icon={<ManageAccountsIcon sx={{ fontSize: 50 }} />}
              >
                Atualizar Usuario
              </ButtonGerenciamento>

              <ButtonGerenciamento
                onClick={handleOpenRemove}
                icon={<PersonRemoveIcon sx={{ fontSize: 50 }} />}
              >
                Remover Usuario
              </ButtonGerenciamento>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "50px",
                justifyContent: "center",
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              <ButtonGerenciamento
                onClick={handleOpenSearch}
                icon={<PersonSearchIcon sx={{ fontSize: 50 }} />}
              >
                Procurar Usuario
              </ButtonGerenciamento>

              <ButtonGerenciamento icon={<ClearIcon sx={{ fontSize: 50 }} />}>
                Deletar conta
              </ButtonGerenciamento>

              <ButtonGerenciamento
                icon={<ExitToAppIcon sx={{ fontSize: 50 }} />}
                onClick={handleLogout}
              >
                Sair
              </ButtonGerenciamento>
            </Box>
          </Box>
          <ModalSearch
            handleClose={handleClose}
            controlDialog={controlDialog}
            title={"Selecione o usuário"}
            params="professores"
            actionButtonText="Atualizar informações"
            actionButton={handleOpenUpdate}
          >
            {/* Listagem dos estudantes para seleção e depois deleção/update */}
            {actualFetchingData.map((item) => (
              <Box key={item.id} sx={{ width: "10vw" }}>
                <Card sx={{ width: "50%" }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={avatarImage}
                    title="foto do aluno"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.nome}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Curso: {item.curso}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => handleOpenUpdate(item.id)}
                    >
                      Atualizar
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </ModalSearch>

          <ModalSearch
            handleClose={handleCloseSearch}
            controlDialog={controlDialogSearch}
            title={"Pesquise o usuário"}
          >
            {actualFetchingData.map((item) => (
              <Box key={item.id} sx={{ width: "10vw" }}>
                <Card sx={{ width: "50%" }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={avatarImage}
                    title="foto do aluno"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.nome}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Curso: {item.curso}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => handleInfoDetails(item)}
                    >
                      Detalhes
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            ))}

            {actualFetchingDataEstudantes.map((item) => (
              <Box key={item.id} sx={{ width: "10vw" }}>
                <Card sx={{ width: "50%" }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={avatarImage}
                    title="foto do aluno"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.nome}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Curso: {item.curso}
                      {item.matricula && <Typography>ESTUDANTE</Typography>}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => handleInfoDetails(item)}
                    >
                      Detalhes
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </ModalSearch>

          <ModalSearch
            handleClose={handleCloseRemove}
            controlDialog={controlDialogRemove}
            title={"Remova o usuário"}
            actionButtonText="Remover o aluno"
            actionButton={() => console.log("Remover o aluno")}
          />

          <ModalUpdate
            handleClose={handleCloseUpdate}
            controlDialog={controlDialogUpdate}
            title="Atualize os dados"
          >
            {/*LEMBRETE: quando for fazer o update na api, não sobreescrever o role */}
            <UsuarioForm
              handleSubmitData={handleUpdate}
              typeTitle="Atualização"
              typeSub="atualizado"
              textAlert="O tipo de usuario não será alterado."
            />
          </ModalUpdate>

          <ModalDetails
            handleClose={() => setControlDialogDetails(false)}
            controlDialog={controlDialogDetails}
            title="Informações do usuario"
            data={dataDetails}
          >
            {/*EXIBIR LISTAGEM DE PROJETOS DO ESTUDANTE ABAIXO */}
          </ModalDetails>
        </section>
      )}
    </>
  );
};

export default Admin;
