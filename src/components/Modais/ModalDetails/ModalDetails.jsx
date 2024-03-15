/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { estilosMUI } from "../../../../utils/lists";

const ModalDetails = ({
  handleClose,
  controlDialog,
  title,
  data = [
    {
      name: "Aluno Mockup",
      curso: "Curso Mockup",
      cpf: "050.000.000-85",
      nam1e: "Aluno Mockup",
      curso2: "Curso Mockup",
      cp3f: "050.000.000-85",
      name3: "Aluno Mockup",
      c3urso: "Curso Mockup",
      cpf3: "050.000.000-85",
    },
  ],
  adicionalButton,
  adicionalButtonText = "",
  children,
}) => {
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
      <DialogContent
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data !== 0 && (
          <Avatar
            sx={{
              width: "10vw",
              height: "10vw",
            }}
          >
            <Typography fontSize="80px" fontWeight="bold" sx={{}}>
              {data[0].nome[0]}
            </Typography>
          </Avatar>
        )}

        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            padding: "20px",
            paddingTop: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {data.map((item) =>
            Object.entries(item).map(([key, value]) => (
              <TextField
                variant="filled"
                sx={estilosMUI}
                key={key}
                value={value}
                label={key}
              />
            ))
          )}
        </Box>

        {children}
      </DialogContent>

      <DialogActions>
        {adicionalButtonText !== "" && (
          <Button onClick={adicionalButton}>{adicionalButtonText}</Button>
        )}
        <Button onClick={handleClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDetails;
