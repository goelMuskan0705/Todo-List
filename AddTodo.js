import React, { useState } from 'react';

  const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [decs, setDecs] = useState("");

    const submit=(e)=>{
      e.preventDefault();
      if(!title || !decs){
        alert("Title or Description can not be empty")
      }
      else{
        addTodo(title , decs);
        setTitle("");
        setDecs("");
      }
      
      }

    return (
      <div className="container my-3">
        <h3>Add a ToDO</h3>
    <form onSubmit={submit}>
    <div class="mb-3">
      <label for="title" class="form-label">ToDo Title</label>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} class="form-control" id="title" aria-describedby="emailHelp"/>
    </div>
    <div class="mb-3">
      <label for="decs" class="form-label">ToDo Description</label>
      <input type="text" value={decs} onChange={(e)=>setDecs(e.target.value)} class="form-control" id="decs"/>
    </div>
  
    <button type="submit" class="btn btn-sm btn-success ">Add</button>
  </form>
      </div>
    )
  }

  export default AddTodo
