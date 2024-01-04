import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import { useState } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTodoDialog({openDialog,dialogHandler,texto,editTodo}) {

  const [editedText, setEditedText] = useState(texto.text);

  const textHandler = () => {
    editTodo(texto.id, editedText);
  };

  return (
    <React.Fragment>
      
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={dialogHandler}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Editando Tarefa"}</DialogTitle>
        <DialogContent>
          <TextField defaultValue={editedText} fullWidth onChange={(evento) => setEditedText(evento.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler} >Cancelar</Button>
          <Button onClick={textHandler} >Ok</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
