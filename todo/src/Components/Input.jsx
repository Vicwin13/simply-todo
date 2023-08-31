import {useState} from 'react'

export default function Input() {

    const [input, setInput] = useState('');

    const handleChange = (e)=>{
        setInput (e.target.value)
    }

  return (
 <form className='form'>
    <label> Todo Title: </label> <br/>
    <input type="text" value={input} onChange={handleChange} />
          <p>value: {input}</p>
 </form>

  )
}
