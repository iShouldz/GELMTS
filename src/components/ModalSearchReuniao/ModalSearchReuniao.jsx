/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup";
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
import SelectComponent from "../../components/UI/SelectComponent/SelectComponent";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputTextComponent from "../UI/InputTextComponent/InputTextComponent";
import reuniaoPicture from "../../assets/reuniaoPicture.png";

const schema = yup
  .object({
    data: yup.date().required(),
    orientador: yup.string().required(),
  })

const ModalSearchReuniao = ({
  handleClose,
  controlDialog,
  title,
  actionButton,
  actionButtonText,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  return (
    <Dialog onClose={handleClose} open={controlDialog}
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
            name="data"
            label="Data"
            type="date"
            fullWidth
            control={control}
            helperText="Insira a data"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ width: "30vw", maxWidth: "800px" }}
            variant="outlined"
            {...register("data")}
          />
          <SelectComponent
            name="orientador"
            label="Orientador"
            control={control}
            helperText="Selecione o orientador"
            // listagem dos orientadores
          />

          <Button variant="contained">Filtrar</Button>
        </form>

        <List sx={{ width: "20%" }}>
          {/*Listagem das reuniões para seleção e depois deleção/update */}
          <Card>
            <CardMedia
              sx={{ height: 140 }}
              image={reuniaoPicture}
              title="foto da reunião"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Reunião 01
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Projeto: XXX
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" onClick={actionButton}>
                {actionButtonText}
              </Button>
            </CardActions>
          </Card>
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">Fechar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalSearchReuniao;
