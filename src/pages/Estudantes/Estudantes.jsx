import { Box, Typography } from "@mui/material";
import ButtonGerenciamento from "../../components/UI/ButtonGerenciamento/ButtonGerenciamento";
import styles from "./estudantes.module.css";

import PersonIcon from "@mui/icons-material/Person";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useState } from "react";
import ModalSearch from "../../components/ModalSearch/ModalSearch";
import ModalUpdate from "../../components/ModalUpdate/ModalUpdate";
import EstudanteForm from "../../components/EstudanteForm/EstudanteForm";
const Estudantes = () => {
  const [controlDialog, setControlDialog] = useState(false);
  const [controlDialogSearch, setControlDialogSearch] = useState(false);
  const [controlDialogRemove, setControlDialogRemove] = useState(false);
  const [controlDialogUpdate, setControlDialogUpdate] = useState(false);

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
    <section className={styles.estudantesContainer}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
        color="primary.main"
      >
        Gerenciamento de Estudantes
      </Typography>

      <Box
        sx={{
          marginTop: "10vh",
          display: "flex",
          gap: "50px",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <ButtonGerenciamento
          path="cadastrar-estudante"
          icon={<PersonIcon sx={{ fontSize: 50 }} />}
        >
          Cadastrar Estudante
        </ButtonGerenciamento>

        <ButtonGerenciamento
          onClick={handleOpen}
          icon={<ManageAccountsIcon sx={{ fontSize: 50 }} />}
        >
          Atualizar Estudante
        </ButtonGerenciamento>

        <ButtonGerenciamento
          icon={<PersonRemoveIcon sx={{ fontSize: 50 }} />}
          onClick={handleOpenRemove}
        >
          Remover Estudante
        </ButtonGerenciamento>

        <ButtonGerenciamento
          path=""
          onClick={handleOpenSearch}
          icon={<PersonSearchIcon sx={{ fontSize: 50 }} />}
        >
          Procurar Estudante
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
        actionButton={() => console.log("detalhes do aluno")}
      />

      <ModalSearch
        handleClose={handleCloseRemove}
        controlDialog={controlDialogRemove}
        title={"Remova o estudante"}
        actionButtonText="Remover o aluno"
        actionButton={() => console.log("Remover o aluno")}
      />

      <ModalUpdate
        handleClose={handleCloseUpdate}
        controlDialog={controlDialogUpdate}
        title="Atualize os dados"
        component={<EstudanteForm handleSubmitData={handleUpdate}/>}
      />
    </section>
  );
};

export default Estudantes;
