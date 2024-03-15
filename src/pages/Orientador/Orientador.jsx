import { Box, Typography } from "@mui/material";
import ButtonGerenciamento from "../../components/UI/ButtonGerenciamento/ButtonGerenciamento";
import styles from "./orientador.module.css";

import PersonIcon from "@mui/icons-material/Person";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useState } from "react";
import ModalSearch from "../../components/Modais/ModalSearch/ModalSearch";
import ModalUpdate from "../../components/Modais/ModalUpdate/ModalUpdate";
import OrientadorForm from "../../components/Formularios/OrientadorForm/OrientadorForm";
import ModalDetails from '../../components/Modais/ModalDetails/ModalDetails'
//import { cursos } from "../../../utils/lists";

const Orientador = () => {

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
    <section className={styles.orientadorContainer}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
        color="primary.main"
      >
        Gerenciamento de Orientadores
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
        <ButtonGerenciamento path="cadastrar-orientador" icon={<PersonIcon sx={{ fontSize: 50 }} />}>
          Cadastrar Orientador
        </ButtonGerenciamento>

        <ButtonGerenciamento onClick={handleOpen} icon={<ManageAccountsIcon sx={{ fontSize: 50 }} />}>
          Atualizar Orientador
        </ButtonGerenciamento>

        <ButtonGerenciamento onClick={handleOpenRemove} icon={<PersonRemoveIcon sx={{ fontSize: 50 }} />}>
          Remover Orientador
        </ButtonGerenciamento>

        <ButtonGerenciamento onClick={handleOpenSearch} icon={<PersonSearchIcon sx={{ fontSize: 50 }} />}>
          Procurar Orientador
        </ButtonGerenciamento>
      </Box>

      <ModalSearch
        handleClose={handleClose}
        controlDialog={controlDialog}
        title={"Selecione o orientador"}
        actionButton={handleOpenUpdate}
        actionButtonText="Atualizar informações"
      />

      <ModalSearch
        handleClose={handleCloseSearch}
        controlDialog={controlDialogSearch}
        title={"Pesquise o orientador"}
        actionButton={() => setControlDialogDetails(true)}
        actionButtonText="Detalhes"
      />

      <ModalSearch
        handleClose={handleCloseRemove}
        controlDialog={controlDialogRemove}
        title={"Remova o orientador"}
        actionButton={() => console.log("Remover orientador")}
        actionButtonText="Remover o orientador"
      />

      <ModalUpdate
        handleClose={handleCloseUpdate}
        controlDialog={controlDialogUpdate}
        title="Atualize os dados"
      >
        <OrientadorForm handleSubmitData={handleUpdate} />
      </ModalUpdate>

      <ModalDetails
        handleClose={() => setControlDialogDetails(false)}
        controlDialog={controlDialogDetails}
        title="Informações do Orientador"
        data={[{ name: 'name: Orientador 1', cpf: '100.100.100-10', curso: 'BCC', especialidade: 'IA', orientando: 'José'}]}
      >
        {/* {cursos.map((item) => (
          <Typography key={item}>{item}</Typography>
        ))} */}

        
      </ModalDetails>
    </section>
  );
};

export default Orientador;
