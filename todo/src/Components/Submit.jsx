import { useContext, useState } from "react"
import DataContext from "./DataContext"


export default function Submit() {

const {answer2, prop} = useContext(DataContext)

  const [display, setDisplay] = useState('');
  
  display;
  
  const change = () => {
    setDisplay( answer2, prop)
  }
  
  return (
    <div>
      <input type="submit" value="Submit" onClick={change}/>
      

    </div>
  )
}
