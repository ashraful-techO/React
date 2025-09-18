import { useState } from "react";

export default function Fruits(){
    const [fruit, setFruit] = useState("");
    const [fruits, setFruits] = useState(['Mango', 'Apple','Guava','Orange']);

    return(
        <>
        <h2>Fruits</h2>
        <ul>
            {fruits.sort().map((fruits,idx)=>(
                <li key={idx}>{fruits}</li>
            ))}
        </ul>
        <p>
            <input type="text"  value={fruit} onChange={(e)=> setFruit(e.target.value)}/>
        </p>
        <button onClick={()=> setFruits([...fruits,fruit])}>Add Fruits</button>
        </>
    )
}