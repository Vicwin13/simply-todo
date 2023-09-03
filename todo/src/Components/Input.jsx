import {useState} from 'react'
import Description from './Description';


export default function Input() {


    const [input, setInput] = useState('');

    const handleChange = (e)=>{
        setInput (e.target.value)
    }

  const answer = {input}; 

  return (
  <div>
    <form className='form'>
       <label> Todo Title: </label> <br/>
        <input className="input" type="text" value={input} onChange={handleChange} />
      
            <Description answer={answer} />
      </form>
  </div>

  )
}
