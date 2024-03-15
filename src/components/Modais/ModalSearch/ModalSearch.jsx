/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  Typography,
} from "@mui/material";
import SelectComponent from "../../UI/SelectComponent/SelectComponent";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputTextComponent from "../../UI/InputTextComponent/InputTextComponent";
import { cursos } from "../../../../utils/lists";
const schema = yup
  .object({
    nome: yup.string().required(),
    curso: yup.string().required(),
  })
  .required();

const ModalSearch = ({
  handleClose,
  controlDialog,
  title,
  children,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Dialog
      onClose={handleClose}
      open={controlDialog}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "50vw",
          },
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        <form
          style={{
            display: "flex",
            gap: "30px",
            padding: "20px",
            justifyContent: "center",
          }}
        >
          <InputTextComponent
            fontWeight="bold"
            name="nome"
            label="CPF"
            fullWidth
            disabled
            placeholder="Digite seu CPF"
            control={control}
            helperText="Digite o CPF"
            sx={{ width: "30vw", maxWidth: "800px" }}
          />
          <SelectComponent
            name="curso"
            disabled
            control={control}
            listagem={cursos}
            helperText="Selecione o curso"
          />

          <Button variant="contained" disabled>Filtrar</Button>
        </form>

        <List
          sx={{ width: "100%", display: "flex", gap: "30px", flexWrap: "wrap" }}
        >
          {children}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalSearch;
