import { Box, Typography } from "@mui/material";
import ButtonGerenciamento from "../../components/UI/ButtonGerenciamento/ButtonGerenciamento";
import styles from "./reuniao.module.css";

import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import SearchIcon from '@mui/icons-material/Search';

import {useState} from "react";
import ModalSearch from "../../components/Modais/ModalSearch/ModalSearch";
import ModalUpdate from "../../components/Modais/ModalUpdate/ModalUpdate";
import ReuniaoForm from "../../components/Formularios/ReuniaoForm/ReuniaoForm";
import ModalDetails from "../../components/Modais/ModalDetails/ModalDetails";

const Reuniao = () => {

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

      <ModalSearch
        handleClose={handleClose}
        controlDialog={controlDialog}
        title={"Selecione a reunião"}
        actionButton={handleOpenUpdate}
        actionButtonText="Atualizar informações"
      />

      <ModalSearch
        handleClose={handleCloseSearch}
        controlDialog={controlDialogSearch}
        title={"Pesquise a reunião"}
        actionButton={() => setControlDialogDetails(true)}
        actionButtonText="Detalhes"
      />

      <ModalSearch
        handleClose={handleCloseRemove}
        controlDialog={controlDialogRemove}
        title={"Remova a reunião"}
        actionButton={() => console.log("Remover reunião")}
        actionButtonText="Remover a reunião"
      />

      <ModalUpdate
        handleClose={handleCloseUpdate}
        controlDialog={controlDialogUpdate}
        title="Atualize os dados"
      >
        <ReuniaoForm handlleSubmitData={handleUpdate} />
      </ModalUpdate>

      <ModalDetails
        handleClose={() => setControlDialogDetails(false)}
        controlDialog={controlDialogDetails}
        title="Informações da reunião"
        data={[{ data: '04/05/2024', horaInicio: '14:00', projeto: 'GELMTS', topico: 'definicao das responsabilidades', urgencia: 'media', orientador: 'Vinícius', orientandos: ['Maria', 'José']}]}
      />

    </section>
  );
};

export default Reuniao;
