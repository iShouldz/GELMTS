import { Box, Typography } from "@mui/material";
import ButtonGerenciamento from "../../components/UI/ButtonGerenciamento/ButtonGerenciamento";
import styles from "./reuniao.module.css";

import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import SearchIcon from '@mui/icons-material/Search';

import {useState} from "react";
import ModalSearchReuniao from "../../components/ModalSearchReuniao/ModalSearchReuniao";
import ModalUpdateReuniao from "../../components/ModalUpdateReuniao/ModalUpdateReuniao";
import ReuniaoForm from "../../components/ReuniaoForm/ReuniaoForm";

const Reuniao = () => {

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
    <section className={styles.reuniaoContainer}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
        color="primary.main"
      >
        Gerenciamento de Reuniões
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
        <ButtonGerenciamento path="cadastrar-reuniao" icon={<GroupsIcon sx={{ fontSize: 50 }} />}>
          Cadastrar Reunião
        </ButtonGerenciamento>

        <ButtonGerenciamento onClick={handleOpen} icon={<SettingsIcon sx={{ fontSize: 50 }} />}>
          Atualizar Reunião
        </ButtonGerenciamento>

        <ButtonGerenciamento onClick={handleOpenRemove} icon={<RemoveCircleOutlineIcon sx={{ fontSize: 50 }} />}>
          Remover Reunião
        </ButtonGerenciamento>

        <ButtonGerenciamento onClick={handleOpenSearch} icon={<SearchIcon sx={{ fontSize: 50 }} />}>
          Procurar Reunião
        </ButtonGerenciamento>
      </Box>

      <ModalSearchReuniao
        handleClose={handleClose}
        controlDialog={controlDialog}
        title="Selecione a reunião"
        actionButton={handleOpenUpdate}
        actionButtonText="Atualizar informações"
      />

      <ModalUpdateReuniao
        handleClose={handleCloseSearch}
        controlDialog={controlDialogSearch}
        title="Pesquise a reunião"
        actionButton={() => console.log("Detalhes da reunião")}
        actionButtonText="Detalhes"
      />

      <ModalSearchReuniao
        handleClose={handleCloseRemove}
        controlDialog={controlDialogRemove}
        title="Remova a reunião"
        actionButton={() => console.log("Remover reunião")}
        actionButtonText="Remover a reunião"
      />

      <ModalUpdateReuniao
        handleClose={handleCloseUpdate}
        controlDialog={controlDialogUpdate}
        title="Atualize os dados"
        component={<ReuniaoForm handlleSubmitData={handleUpdate} />}
      />
    </section>
  );
};

export default Reuniao;
