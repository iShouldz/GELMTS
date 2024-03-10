/* eslint-disable react/prop-types */
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Dialog,
    DialogContent,
    DialogTitle,
    List,
    TextField,
    Typography,
  } from "@mui/material";
  
  const ModalSearchReuniao = ({
    handleClose,
    controlDialog,
    title,
    actionButton,
    actionButtonText,
  }) => {
    return (
      <Dialog onClose={handleClose} open={controlDialog}>
        <DialogTitle>{title}</DialogTitle>
  
        <DialogContent>
          <Typography fontWeight="bold">Digite a data da reunião</Typography>
          <TextField sx={{ width: "30vw", maxWidth: "800px" }} />
          <List>
            {/*Listagem das reuniões para seleção e depois deleção/update */}
            <Card sx={{ width: "10vw" }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
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
      </Dialog>
    );
  };
  
  export default ModalSearchReuniao;
  