import react from'react'

const Form=({ inpValue, setInpValue,todos,setTodos})=>{
const inputTextHandler=(e)=>{
    setInpValue(e.target.value)
}
const submitHandler=(e)=>{
    e.preventDefault()
    setTodos(
        [
            ...todos,{text:inpValue,completed:false,id:Math.random()*1000 }
        ]

    )
   setInpValue("")
}
return(
<form>
      <input value={inpValue}  onChange={inputTextHandler} type="text" className="todo-input" />
      <button  onClick={submitHandler}   className="todo-button" type="submit">
       submit
      </button>
      <div className="select">
        {/* <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select> */}
      </div>
    </form>
);

}
export default Form;
