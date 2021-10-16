import { useState } from 'react';
import Form from './components/Form';

import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [inpValue, setInpValue] = useState('')
  const [todos,setTodos]=useState([])

 
  return (
    <div className="App">
      <h1>Todo App {inpValue} </h1>
      <Form  inpValue={inpValue} todos={todos}  setTodos={setTodos} setInpValue={setInpValue} />
     <TodoList  setTodos={setTodos} todos={todos} />


      {/* <ul>
        {val().map((item, index) => {
          return <li key={item}>{item} index = {index}</li>
        })}
      </ul> */}
    </div>
  );
}

export default App;
