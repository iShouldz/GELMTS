import styles from "./admin.module.css";
import ButtonGerenciamento from "../../components/UI/ButtonGerenciamento/ButtonGerenciamento";
import { useDispatch } from "react-redux";

import PersonIcon from "@mui/icons-material/Person";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ClearIcon from "@mui/icons-material/Clear";

import { Box, Typography } from "@mui/material";
import { userActions } from "../../store/login/loginSlice";
import { useState } from "react";
import ModalDetails from "../../components/ModalDetails/ModalDetails";
import { cursos } from "../../../utils/lists";
import ModalSearch from "../../components/ModalSearch/ModalSearch";
import ModalUpdate from "../../components/ModalUpdate/ModalUpdate";
import UsuarioForm from "../../components/UsuarioForm/UsuarioForm";
const Admin = () => {
  const dispatch = useDispatch();
  const [controlDialog, setControlDialog] = useState(false);
  const [controlDialogSearch, setControlDialogSearch] = useState(false);
  const [controlDialogRemove, setControlDialogRemove] = useState(false);
  const [controlDialogUpdate, setControlDialogUpdate] = useState(false);
  const [controlDialogDetails, setControlDialogDetails] = useState(false);

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
    <section className={styles.adminContainer}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
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
        actionButtonText="Atualizar informações"
        actionButton={handleOpenUpdate}
      />

      <ModalSearch
        handleClose={handleCloseSearch}
        controlDialog={controlDialogSearch}
        title={"Pesquise o usuário"}
        actionButtonText="Detalhes"
        actionButton={() => setControlDialogDetails(true)}
      />

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

export default Admin;
