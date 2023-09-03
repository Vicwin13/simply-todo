import { useContext } from "react";
import DataContext from "./DataContext";

export default function DisplayResults( ){
    const { answer2, prop } = useContext(DataContext);

return(
    <div>
        <h1>Display is here</h1>
        <p> This is: {answer2}</p>
        <p> This is: {prop}</p>
    
    </div>
);

}