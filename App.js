import React, { useEffect, useState } from 'react';
import './App.css';
import AddTodo from './MyComponents/AddTodo';
import Footer from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";


function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

const onDelete= (todo)=>{
setTodos(todos.filter((e)=>{
  return e!==todo;
}));
localStorage.setItem("todos" ,  JSON.stringify(todos));
}

const addTodo=(title, decs)=>{
  let sno;
  if(todos.length==0){
    sno = 0;
  }
  else{ 
    sno=todos[todos.length-1].sno +1;
  }
  const myTodo={
    sno:sno,
    title: title,
    decs: decs,
  }
  setTodos([...todos , myTodo]);
}

const [todos,setTodos] = useState([initTodo]);
useEffect(()=>{
  localStorage.getItem("todos" , JSON.stringify(todos));
}, [todos])

 
  return (
    <>
    <Header title="My ToDo-List"/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete} />
    <Footer/>
    </>
  );
}

export default App;
