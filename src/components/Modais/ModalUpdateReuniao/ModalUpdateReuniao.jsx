/* eslint-disable react/prop-types */
import { Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";

const ModalTemplateReuniao = ({ handleClose, controlDialog, title, children }) => {
  {/*Instrução: Passe o componente de cadastro para atualizar, so passar com a handle dos dados que funciona */}
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
      <DialogContent sx={{ display: "flex", justifyContent: "center" }}>
        {children}
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalTemplateReuniao;
