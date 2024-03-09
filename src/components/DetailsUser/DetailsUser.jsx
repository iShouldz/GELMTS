/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/login/loginSlice";

const DetailsUser = ({ handleClose, controlDialog }) => {
  const userData = useSelector((state) => state.login.user);
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(userActions.handleUpdateLogin())
  }

  return (
    <Dialog onClose={handleClose} open={controlDialog}>
      <DialogTitle>Ola, [nome do usuario]</DialogTitle>
      <DialogContent>
        {/*Pegar os dados do usuario e deixar fixo aqui dentro */}
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Fechar</Button>
        <Button onClick={handleLogout}>Sair</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailsUser;
