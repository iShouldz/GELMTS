/* eslint-disable react/prop-types */
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Dialog,
    DialogContent,
    DialogTitle,
    List,
    TextField,
    Typography,
  } from "@mui/material";
  
  const ModalSearchOrientadores = ({
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
          <Typography fontWeight="bold">Digite o nome do orientador</Typography>
          <TextField sx={{ width: "30vw", maxWidth: "800px" }} />
          <List>
            {/*Listagem dos orientadores para seleção e depois deleção/update */}
            <Card sx={{ width: "10vw" }}>
              <CardMedia sx={{ height: 140 }} image="qualquer" title="foto do aluno" />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Orientador 01
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Curso: XXX
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
  
  export default ModalSearchOrientadores;
  