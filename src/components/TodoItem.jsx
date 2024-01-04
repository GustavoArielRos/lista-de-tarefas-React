import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from '@mui/material';
import EditTodoDialog from './EditTodoDialog';
import { useState } from 'react';

export default function TodoItem({texto,deleteTodo,editTodo}) {
        
        const [openDialog,setOpenDialog] = useState(false);

        const dialogHandler = () => {
          setOpenDialog(!openDialog);
        }

        return (
          <>
            <EditTodoDialog editTodo={editTodo} openDialog={openDialog} dialogHandler={dialogHandler} texto={texto}/>
            <Paper style={{padding : "1em"}} >
              <ListItem
            
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(texto.id)}>
                    <DeleteIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton role={undefined} dense>
                  <ListItemIcon>
                    <Checkbox edge="start" tabIndex={-1} disableRipple  />
                  </ListItemIcon>
                  <ListItemText primary={texto.text} onClick={() => setOpenDialog(true)}/>
                </ListItemButton>
              </ListItem>
            </Paper>
          </>
        );
   
}