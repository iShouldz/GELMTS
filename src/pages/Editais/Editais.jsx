import { Box, Typography } from "@mui/material";
import ButtonGerenciamento from "../../components/UI/ButtonGerenciamento/ButtonGerenciamento";
import styles from "./editais.module.css";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useState } from "react";

import ModalSearch from "../../components/ModalSearch/ModalSearch";
import ModalUpdate from "../../components/ModalUpdate/ModalUpdate";
import EditaisForm from "../../components/EditaisForm/EditaisForm";
import ModalDetails from "../../components/ModalDetails/ModalDetails";
import { cursos } from "../../../utils/lists";
const Editais = () => {
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
  };

  return (
    <section className={styles.editaisContainer}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
        color="primary.main"
      >
        Gerenciamento de Editais
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
          path="cadastrar-edital"
          icon={<BookmarkAddIcon sx={{ fontSize: 50 }} />}
        >
          Cadastrar Edital
        </ButtonGerenciamento>

        <ButtonGerenciamento
          path=""
          onClick={handleOpen}
          icon={<BorderColorIcon sx={{ fontSize: 50 }} />}
        >
          Atualizar Edital
        </ButtonGerenciamento>

        <ButtonGerenciamento
          path=""
          onClick={handleOpenRemove}
          icon={<BookmarkRemoveIcon sx={{ fontSize: 50 }} />}
        >
          Remover Edital
        </ButtonGerenciamento>

        <ButtonGerenciamento
          path=""
          onClick={handleOpenSearch}
          icon={<MenuBookIcon sx={{ fontSize: 50 }} />}
        >
          Procurar Edital
        </ButtonGerenciamento>
      </Box>

      <ModalSearch
        handleClose={handleClose}
        controlDialog={controlDialog}
        title={"Selecione o edital"}
        actionButtonText="Atualizar informações"
        actionButton={handleOpenUpdate}
      />

      <ModalSearch
        handleClose={handleCloseSearch}
        controlDialog={controlDialogSearch}
        title={"Pesquise o edital"}
        actionButtonText="Detalhes"
        actionButton={() => setControlDialogDetails(true)}
      />

      <ModalSearch
        handleClose={handleCloseRemove}
        controlDialog={controlDialogRemove}
        title={"Remova o edital"}
        actionButtonText="Remover o aluno"
        actionButton={() => console.log("Remover o aluno")}
      />

      <ModalUpdate
        handleClose={handleCloseUpdate}
        controlDialog={controlDialogUpdate}
        title="Atualize os dados"
      >
        <EditaisForm handleSubmitData={handleUpdate} cadastro={false}/>
      </ModalUpdate>

      <ModalDetails
        handleClose={() => setControlDialogDetails(false)}
        controlDialog={controlDialogDetails}
        title="Informações do edital"
      >
        {/*Usemos a children para quando for para exibir lista de dados, 
        assim o componente vai ficar bem reutilizavel */}

        {/*Exibir detalhes do edital, joga os dados aqui dentro depois de um fetch no botão "detalhes"
        e depois faz um map para exibir os alunos classificados logo baixo, na children do componente
        */}
        {cursos.map((item) => (
          <Typography key={item}>{item}</Typography>
        ))}
      </ModalDetails>
    </section>
  );
};

export default Editais;
