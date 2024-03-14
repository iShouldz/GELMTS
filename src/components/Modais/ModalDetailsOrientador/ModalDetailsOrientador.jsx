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
  } from "@mui/material";
  import { estilosMUI } from "../../../../utils/lists";
  import avatarOrientador from "../../../assets/avatarOrientador.jpg";
  
  const ModalDetailsOrientador = ({
    handleClose,
    controlDialog,
    title,
    data,
    adicionalButton,
    adicionalButtonText="",
    children,
  }) => {
    return (
      <Dialog onClose={handleClose} open={controlDialog}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar
            src={avatarOrientador}
            sx={{
              width: "10vw",
              height: "10vw",
            }}
          />
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              padding: "20px",
              paddingTop: "20px",
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
  
  export default ModalDetailsOrientador;
  