import { useState } from 'react';

import './App.css';

function todolist() {
  const [inpValue, setInpValue] = useState('')
  const [todos,setTodos]=useState([])

  const addItem = () => {
    console.log('Function Called')
  }

  return (
    <div className="App">
      <h1>TodoApp</h1>
      <input onChange={(e)=>setInpValue(e.target.value)} placeholder='Enter Value' />
      
      
      
      <button onClick={addItem}>Add</button>

      {/* <ul>
        {val().map((item, index) => {
          return <li key={item}>{item} index = {index}</li>
        })}
      </ul> */}


    </div>
  );
}

export default todolist;
