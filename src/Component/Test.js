import React, { useState } from 'react'

const Test = () => {
const [single2do, setSingle2do] = useState('')
const [all2do, setAll2do] = useState('')

const submitFunc=()=>{
    setAll2do(single2do)
}
  return (
    <div>
<input type='text' value={single2do} onChange={(e)=>setSingle2do(e.target.value)}/>
<button onClick={submitFunc}>Submit</button>
<div>{all2do}</div>
    </div>

  )
}

export default Test