import React, { useState } from 'react'

const Test = () => {
  const [singletodo, setSingletodo] = useState('')
  const [all2do, setAll2do] = useState([])

  const singletodoFunc =(e)=>{
    setSingletodo(e.target.value)

  }
  const submitAlltodoFunc =()=>{
    setAll2do([...all2do,{id:Math.random(), text: singletodo}])
    setSingletodo('')
  }
  const deleteFunc =(id)=>{
const storefilter = all2do.filter((val)=>val.id!==id)
setAll2do(storefilter)
  }
  return(
    <>
<div>
{/* <input type='text' value={singletodo} onChange={(e)=>setSingletodo(e.target.value)}/> */}
<input type='text' value={singletodo} onChange={singletodoFunc}/>
<button onClick={submitAlltodoFunc}>Submit</button>
</div>

{
  all2do.map((val)=>(
<div>
<p>{val.id}</p>
<p>{val.text}</p>
<button onClick={()=>deleteFunc(val.id)}>Delete</button>
</div>

  ))
  
}
</>
)
  
}

export default Test

// const [single2do, setSingle2do] = useState('')
// const [all2do, setAll2do] = useState([{id: 123, text: "cat"}])

// const submitFunc =()=>{
//   setAll2do([...all2do, {id: Math.random() ,text: single2do }])
//   setSingle2do('')
// }

// return(
//   <div>
// <input type='text' value={single2do} onChange={(e)=>setSingle2do(e.target.value)}/>
// <button onClick={submitFunc}>Submit</button>

// <div>
// {
//   all2do.map((val)=>(
//     <div key={val.id}>
// <p>{val.id}</p>
// <p>{val.text}</p>
// </div>
//   ))
// }

// </div>
//   </div>

// )





// with delete
// const [singleToDo, setSingleToDo] = useState('')
//   const [allToDo, setAllToDo] = useState([])
// const setSingleToDoFunc =(e)=>{
// setSingleToDo(e.target.value)


// }
// //move singletodo to all tod0
// const submitFunc =()=>{
//   setAllToDo([...allToDo, {id: Math.random(), text: singleToDo}])
//   setSingleToDo('')
// }
// const deleteFunc =(id)=>{
//   //if id not match we keep them in side filterToDo -- if id match---take it out
// const filterToDo = allToDo.filter((val)=>val.id !== id)
// setAllToDo(filterToDo)
// }

// return(
// <>
// <input type='text' value={singleToDo} onChange={setSingleToDoFunc}/>
// <button onClick={submitFunc}>Submit</button>

// {
//   allToDo.map((val)=>(
//     <div key={val.id}>
//     <p>{val.id}</p>
//     <p>{val.text}</p>
//     <button onClick={()=>deleteFunc(val.id)}>Delete</button>
//     </div>
//   ))
// }
// </>
// )
