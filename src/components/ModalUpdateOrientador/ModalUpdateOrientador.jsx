/* eslint-disable react/prop-types */
import { Dialog, DialogContent, DialogTitle} from "@mui/material";

const ModalTemplateOrientador = ({ handleClose, controlDialog, title, component }) => {
  {/*Instrução: Passe o componente de cadastro para atualizar, so passar com a handle dos dados que funciona */}
  return (
    <Dialog onClose={handleClose} open={controlDialog}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {component}
      </DialogContent>
    </Dialog>
  );
};

export default ModalTemplateOrientador;
