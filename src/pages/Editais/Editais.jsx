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
import { DataGrid } from "@mui/x-data-grid";
const Editais = () => {
  const [controlDialog, setControlDialog] = useState(false);
  const [controlDialogSearch, setControlDialogSearch] = useState(false);
  const [controlDialogRemove, setControlDialogRemove] = useState(false);
  const [controlDialogUpdate, setControlDialogUpdate] = useState(false);
  const [controlDialogDetails, setControlDialogDetails] = useState(false);
  let nextId = 1;

  const handleIdIncrementGrid = () => {
    return nextId++;
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
    //Desmontar o objeto do form, pegar os alunos e adicionar um campo de id, e por a função
    //de incremento id: handleIdIncrementGrid(), para ser possivel visualizar o grid
    console.log(data);
  };

  const columns = [
    { field: "nome", headerName: "Nome", width: 180, editable: true },
    { field: "matricula", headerName: "Matricula", width: 180, editable: true },
    { field: "rg", headerName: "RG", width: 180, editable: true },
  ];

  //Dados mockup
  const rows = [
    {
      nome: "Pedro",
      matricula: "52514685",
      rg: "9854244",
      id: handleIdIncrementGrid(),
    },
    {
      nome: "Lucas",
      matricula: "5588201",
      rg: "0121033",
      id: handleIdIncrementGrid(),
    },
    {
      nome: "Kleiton",
      matricula: "9968577",
      rg: "7474560",
      id: handleIdIncrementGrid(),
    },
  ];

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
        <EditaisForm handleSubmitData={handleUpdate} cadastro={false} />
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
        <Typography variant="h5">Alunos aprovados no edital</Typography>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </ModalDetails>
    </section>
  );
};

export default Editais;
