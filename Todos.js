import React from 'react'
import TodoItems from './TodoItems'

//todo.sno is the unique key which we have to pass when we render the value of an array using map function

const Todos = (props) => {
  let myStyle={
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className='container 'style={myStyle}>
      <h4  className=" my-3" >ToDos List</h4>
      {props.todos.length===0? "No ToDos to Display":props.todos.map((todo)=>{
        return  (
          <>
            <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            <hr/>
            </>
        
        )
        
      })}
     
   
    </div>
  )
}

export default Todos
