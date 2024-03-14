import { Box, Typography } from "@mui/material";
import ButtonGerenciamento from "../../components/UI/ButtonGerenciamento/ButtonGerenciamento";
import styles from "./projeto.module.css";

import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

import ModalSearch from "../../components/Modais/ModalSearch/ModalSearch";
import ModalDetails from "../../components/Modais/ModalDetails/ModalDetails";
import ModalUpdate from "../../components/Modais/ModalUpdate/ModalUpdate";
import ProjetoForm from "../../components/Formularios/ProjetoForm/ProjetoForm";

const Projeto = () => {
  const [controlDialog, setControlDialog] = useState(false);
  const [controlDialogSearch, setControlDialogSearch] = useState(false);
  const [controlDialogRemove, setControlDialogRemove] = useState(false);
  const [controlDialogUpdate, setControlDialogUpdate] = useState(false);
  const [controlDialogDetails, setControlDialogDetails] = useState(false);

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
    <section className={styles.projetoContainer}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
        color="primary.main"
      >
        Gerenciamento de Projeto
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
          path="cadastrar-projeto"
          icon={<GroupsIcon sx={{ fontSize: 50 }} />}
        >
          Cadastrar Projeto
        </ButtonGerenciamento>

        <ButtonGerenciamento
          onClick={handleOpen}
          icon={<SettingsIcon sx={{ fontSize: 50 }} />}
        >
          Atualizar Projeto
        </ButtonGerenciamento>

        <ButtonGerenciamento
          icon={<RemoveCircleOutlineIcon sx={{ fontSize: 50 }} />}
          onClick={handleOpenRemove}
        >
          Remover Projeto
        </ButtonGerenciamento>

        <ButtonGerenciamento
          path=""
          onClick={handleOpenSearch}
          icon={<SearchIcon sx={{ fontSize: 50 }} />}
        >
          Procurar Projeto
        </ButtonGerenciamento>

        <ButtonGerenciamento
          path=""
          onClick={handleOpenSearch}
          icon={<SearchIcon sx={{ fontSize: 50 }} />}
        >
          Gerar certificação do projeto
        </ButtonGerenciamento>

        <ButtonGerenciamento
          path=""
          onClick={handleOpenSearch}
          icon={<SearchIcon sx={{ fontSize: 50 }} />}
        >
          Gerenciar participação
        </ButtonGerenciamento>
      </Box>

      <ModalSearch
        handleClose={handleClose}
        controlDialog={controlDialog}
        title={"Selecione o projeto"}
        actionButtonText="Atualizar informações"
        actionButton={handleOpenUpdate}
      />

      <ModalSearch
        handleClose={handleCloseSearch}
        controlDialog={controlDialogSearch}
        title={"Pesquise o projeto"}
        actionButtonText="Detalhes"
        actionButton={() => setControlDialogDetails(true)}
      />

      <ModalSearch
        handleClose={handleCloseRemove}
        controlDialog={controlDialogRemove}
        title={"Remova o projeto"}
        actionButtonText="Remover o projeto"
        actionButton={() => console.log("Remover o projeto")}
      />

      <ModalUpdate
        handleClose={handleCloseUpdate}
        controlDialog={controlDialogUpdate}
        title="Atualize os dados"
      >
        <ProjetoForm handleSubmitData={handleUpdate} />
      </ModalUpdate>

      <ModalDetails
        handleClose={() => setControlDialogDetails(false)}
        controlDialog={controlDialogDetails}
        title="Informações do projeto"
        data={[
          {
            nome: "Nome do Projeto",
            descricao: "Descrição do projeto",
            participante: "Participante",
            ScrumMaster: "Scrum Master do projeto",
            orientador: "Vinícius",
            AntigosParticipantes: ["Maria", "José"],
          },
        ]}
      />
    </section>
  );
};

export default Projeto;
