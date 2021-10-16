import React from "react";

const Todo=({text,todo,todos,setTodos})=>{
  const deleteHandler=()=>{
    setTodos(todos.filter(el=>el.id !== todo.id))

  }
    return(
<div className="todo-container">
      <ul className="todo-list">
        <li>   {text}</li>
        <button onClick={deleteHandler}  > delete </button>
        <li>  </li>
        <li>  </li>
      </ul>
    </div> 

    )
}

export default Todo;