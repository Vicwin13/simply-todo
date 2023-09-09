import React, { useState } from 'react'
import Input from './Input';
import DisplayResults from './DisplayResults';
import TheThreeButtons from './TheThreeButtons';

export default function DataContext() {

    const [form, setForm] = useState(null);
    const handleFormSubmit = (data) =>{
        setForm(data)
    }
  return (
    <div>
        <Input onSubmit={handleFormSubmit}/>
        <TheThreeButtons/>
        <DisplayResults form ={form}/>

    </div>
  )
}
