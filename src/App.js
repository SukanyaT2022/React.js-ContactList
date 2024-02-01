
import { useState } from 'react';
import './App.css';

function App() {
//2 components
  //todo-indivdual todo -- to do is a child of to do list
  //todolist -for the whole listn-- todolist is child of app componnt

  // all prop on app.js 
  // all function will be inside app.js -- handle delete --handle create -- handle update

  //state 
  //1. alltodo state hold all to do list --array of object
//2. state hold newtodo if you want to add something to alltodo

const [singleTodo, setSingleTodo] = useState('')
const [allTodo, setAllTodo] = useState([{id: 123, text: 'food'}])

// const handleTextBox =(e)=>{
// setSingleTodo(e.target.value)

// }

const submitFunc =()=>{
  setAllTodo([...allTodo,{id:Math.random(), text: singleTodo}])
  setSingleTodo('')
}
  return (
    <div className="App">
<div>
<input type='text' value={singleTodo} placeholder='Your New Task' onChange={(e)=>setSingleTodo(e.target.value)} />
<button onClick={submitFunc}>Submit</button>
</div>
<div sx={{backgroundColor: "green"}}>
  {allTodo.map((val)=>

      <div key={val.id}>

<p>{val.text}</p>
</div>
 
  )}
  </div>
    </div>
  );
}

export default App;
