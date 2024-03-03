/* eslint-disable react/prop-types */
import { Dialog, DialogTitle, List } from "@mui/material";

const ModalTemplate = ({ handleClose, controlDialog, title }) => {
  return (
    <Dialog onClose={handleClose} open={controlDialog}>
      <DialogTitle>{title}</DialogTitle>
      <List>
        {/*Listagem dos estudantes para seleção e depois deleção/update */}
      </List>
    </Dialog>
  );
};

export default ModalTemplate;
