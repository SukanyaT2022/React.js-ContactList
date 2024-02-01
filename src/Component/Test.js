import React, { useState } from 'react'

const Test = () => {
const [single2do, setSingle2do] = useState('')
const [all2do, setAll2do] = useState([{id: 123, text: "cat"}])

const submitFunc =()=>{
  setAll2do([...all2do, {id: Math.random() ,text: single2do }])
  setSingle2do('')
}

return(
  <div>
<input type='text' value={single2do} onChange={(e)=>setSingle2do(e.target.value)}/>
<button onClick={submitFunc}>Submit</button>

<div>
{
  all2do.map((val)=>(
    <div key={val.id}>
<p>{val.id}</p>
<p>{val.text}</p>
</div>
  ))
}

</div>
  </div>

)
}

export default Test