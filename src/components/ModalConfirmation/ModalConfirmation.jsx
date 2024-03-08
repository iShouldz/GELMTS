/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ModalConfirmation = ({
  handleClose,
  controlDialog,
  handleConfirm,
  title,
  navigatePath,
}) => {
  const navigate = useNavigate();
  const handleFinish = () => {
    handleConfirm();
    navigate(navigatePath);
  };

  return (
    <Dialog onClose={handleClose} open={controlDialog}>
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        <Typography fontWeight="bold">Confirmar ação</Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleFinish}>Confirmar</Button>
        <Button onClick={handleClose}>Cancelar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalConfirmation;
