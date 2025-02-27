import React from "react";
import {sum , sub , devi , mult} from './math'


const x = Number(prompt('enter first number '));
const y = Number(prompt('enter second number  '))

function App() {
  return (
    <div className="App">
     <ul>
     <li>sum =   {sum(x,y)}</li>
     <li>sub =   {sub(x,y)}</li>
     <li>dev =   {devi(x,y)}</li>
     <li>mul =   {mult(x,y)}</li>
     
     
     </ul>
    </div>
  );
}

export default App;
