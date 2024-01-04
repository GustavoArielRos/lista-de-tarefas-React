import { Container, List } from '@mui/material';
import React, { useState } from 'react';
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";

export default function Home() {

  const [todos, setTodos] = useState([]);

  const addTodo = (texto) => {
    setTodos([...todos, texto]);
  }

  const deleteTodo = (id) =>{
    var filtered = todos.filter((texto) => texto.id !== id);
    setTodos(filtered)
  };

  const editTodo = (id, editedText) =>{
    var todosArray = [...todos];

    for(var i in todosArray){
      if(todosArray[i].id === id){
        todosArray[i].text = editedText;
      }
    }
    setTodos(todosArray);
  };

  return (
    <Container maxWidth="xs" style={{marginTop: "1em"}} >
        <Form addTodo ={addTodo}/>
        <List sx={{ width: '100%',marginTop:"1em" }}>
          {todos.map((texto) => (
            <div key={texto.id} style={{ marginTop: "1em"}}>
                <TodoItem texto ={texto} deleteTodo={deleteTodo} editTodo={editTodo} />
            </div>
          ))}
          
        </List>
        
      </Container>
  );
}

