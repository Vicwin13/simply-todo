import {useState} from 'react'

export default function Input() {

    const [input, setInput] = useState('');

    const handleChange = (e)=>{
        setInput (e.target.value)
    }

  return (
 <form>
    <label> Todo Title: </label>
    <input type="text" value={input} onChange={handleChange} />
          {/* <p>value: {input}</p> */}
 </form>

  )
}
