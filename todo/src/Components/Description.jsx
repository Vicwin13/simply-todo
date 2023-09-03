import { useState } from 'react'
import Submit from "./Submit"
import DataContext from './DataContext';


export default function Description( prop ) {

    const [describe, setDescribe] = useState('');

    const handleChange = (e)=>{
        setDescribe (e.target.value)
    }

  const answer2 = { describe }

  const contextValue = {
    answer2,
    prop,
  }

  return (
    <div>
 <form className='text-form'>
    <label> Description: </label> <br/>
          <textarea className="textarea" rows="6" value={describe} onChange={handleChange}>
        </textarea>
        <DataContext.Provider value={contextValue}>
          <Submit />
          </DataContext.Provider>
      </form>
         
      
</div>
  )
}
