import { useState } from 'react'
import Submit from "./Submit"


export default function Description( prop ) {

    const [describe, setDescribe] = useState('');

    const handleChange = (e)=>{
        setDescribe (e.target.value)
    }

  const answer2 = {describe}

  return (
    <div>
 <form className='text-form'>
    <label> Description: </label> <br/>
          <textarea className="textarea" rows="6" value={describe} onChange={handleChange}>
      </textarea>
      <Submit data={prop.answer} data2 ={answer2}  />
      </form>
         
      
</div>
  )
}
