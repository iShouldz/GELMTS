import { Box, Typography } from "@mui/material";
import ButtonGerenciamento from "../../components/UI/ButtonGerenciamento/ButtonGerenciamento";
import styles from "./estudantes.module.css";
import UsuarioForm from "../../components/Formularios/UsuarioForm/UsuarioForm";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useState } from "react";
import ModalSearch from "../../components/Modais/ModalSearch/ModalSearch";
import ModalUpdate from "../../components/Modais/ModalUpdate/ModalUpdate";
import ModalDetails from "../../components/Modais/ModalDetails/ModalDetails";
import { cursos } from "../../../utils/lists";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/login/loginSlice";
const Estudantes = () => {
  const [controlDialog, setControlDialog] = useState(false);
  const [controlDialogSearch, setControlDialogSearch] = useState(false);
  const [controlDialogRemove, setControlDialogRemove] = useState(false);
  const [controlDialogUpdate, setControlDialogUpdate] = useState(false);
  const [controlDialogDetails, setControlDialogDetails] = useState(false);
  const user = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
  const handleSolicitarDesligamento = () => {
    dispatch(
      userActions.handleAddNotification(`${user} solicita desligamento`)
    );
  };

  // console.log(estados)
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

  const handleOpenModeloDocs = () => {
    setControlDialogRemove(true);
  };

  const handleCloseRemove = () => {
    setControlDialogRemove(false);
  };

  const handleOpenUpdate = () => {
    setControlDialogUpdate(true);
  };

  const handleCloseUpdate = () => {
    setControlDialogUpdate(false);
  };

  const handleUpdate = (data) => {
    console.log(data);
    console.log("update");
  };

  return (
    <section className={styles.estudantesContainer}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
        color="primary.main"
      >
        Gerenciamento dos usuarios
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
        <ButtonGerenciamento
          onClick={handleOpen}
          icon={<ManageAccountsIcon sx={{ fontSize: 50 }} />}
        >
          Atualizar Meus Dados
        </ButtonGerenciamento>

        <ButtonGerenciamento
          path=""
          onClick={handleOpenModeloDocs}
          icon={<PersonSearchIcon sx={{ fontSize: 50 }} />}
        >
          Consultar modelo documento
        </ButtonGerenciamento>
        <ButtonGerenciamento
          path=""
          onClick={handleOpenSearch}
          disabled
          icon={<PersonSearchIcon sx={{ fontSize: 50 }} />}
        >
          Pos cadastro
        </ButtonGerenciamento>

        <ButtonGerenciamento
          disabled
          icon={<PersonRemoveIcon sx={{ fontSize: 50 }} />}
          onClick={handleSolicitarDesligamento}
        >
          Solicitar Desligamento
        </ButtonGerenciamento>

        <ButtonGerenciamento
          disabled
          icon={<PersonSearchIcon sx={{ fontSize: 50 }} />}
          onClick={handleSolicitarDesligamento}
        >
         [ORIENTADOR] Pesquisar orientando
        </ButtonGerenciamento>
      </Box>

      <ModalSearch
        handleClose={handleClose}
        controlDialog={controlDialog}
        title={"Selecione o estudante"}
        actionButtonText="Atualizar informações"
        actionButton={handleOpenUpdate}
      />

      <ModalSearch
        handleClose={handleCloseSearch}
        controlDialog={controlDialogSearch}
        title={"Pesquise o estudante"}
        actionButtonText="Detalhes"
        actionButton={() => setControlDialogDetails(true)}
      />

      <ModalSearch
        handleClose={handleCloseRemove}
        controlDialog={controlDialogRemove}
        title={"Modelos de documento disponiveis"}
        actionButtonText="Visualizar"
        actionButton={() => console.log("Remover o aluno")}
      />

      <ModalUpdate
        handleClose={handleCloseUpdate}
        controlDialog={controlDialogUpdate}
        title="Atualize os dados"
      >
        <UsuarioForm handleSubmitData={handleUpdate} />
      </ModalUpdate>

      <ModalDetails
        handleClose={() => setControlDialogDetails(false)}
        controlDialog={controlDialogDetails}
        title="Informações do Estudante"
        data={[
          {
            name: "Aluno Mockup",
            curso: "Curso Mockup",
            cpf: "050.000.000-85",
            nam1e: "Aluno Mockup",
            curso2: "Curso Mockup",
            cp3f: "050.000.000-85",
            name3: "Aluno Mockup",
            c3urso: "Curso Mockup",
            cpf3: "050.000.000-85",
          },
        ]}
      >
        {/*Usemos a children para quando for para exibir lista de dados, assim o componente vai ficar bem reutilizavel */}
        {cursos.map((item) => (
          <Typography key={item}>{item}</Typography>
        ))}
      </ModalDetails>
    </section>
  );
};

export default Estudantes;
