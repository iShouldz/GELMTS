/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const ModalConfirmation = ({
  handleClose,
  controlDialog,
  title,
  actionButton,
  children,
}) => {
  return (
    <Dialog onClose={handleClose} open={controlDialog}>
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>{children}</DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>{actionButton}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalConfirmation;
