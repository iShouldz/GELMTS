import { Box, Typography } from "@mui/material";
import ButtonGerenciamento from "../../components/UI/ButtonGerenciamento/ButtonGerenciamento";
import styles from "./projeto.module.css";

import PersonIcon from "@mui/icons-material/Person";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useState } from "react";
import ModalSearch from "../../components/Modais/ModalSearch/ModalSearch";
import ModalUpdate from "../../components/Modais/ModalUpdate/ModalUpdate";
import ProjetoForm from "../../components/Formularios/ProjetoForm/ProjetoForm";

const Projeto = () => {

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
          icon={<PersonIcon sx={{ fontSize: 50 }} />}
        >
          Cadastrar Projeto
        </ButtonGerenciamento>

        <ButtonGerenciamento
          onClick={handleOpen}
          icon={<ManageAccountsIcon sx={{ fontSize: 50 }} />}
        >
          Atualizar Projeto
        </ButtonGerenciamento>

        <ButtonGerenciamento
          icon={<PersonRemoveIcon sx={{ fontSize: 50 }} />}
          onClick={handleOpenRemove}
        >
            Remover Projeto
        </ButtonGerenciamento>

        <ButtonGerenciamento
          path=""
          onClick={handleOpenSearch}
          icon={<PersonSearchIcon sx={{ fontSize: 50 }} />}
        >
          Procurar Projeto
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
        actionButton={() => console.log("detalhes do projeto")}
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
    </section>
  );
};

export default Projeto;
