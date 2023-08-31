import {useState} from 'react'

export default function Description() {

    const [describe, setDescribe] = useState('');

    const handleChange = (e)=>{
        setDescribe (e.target.value)
    }

  return (
 <form className='form'>
    <label> Description: </label> <br/>
          <textarea rows="6" cols="50" value={describe} onChange={handleChange}>
          </textarea>
 </form>

  )
}
