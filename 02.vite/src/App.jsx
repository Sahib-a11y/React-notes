import './App.css'
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0)

  // let counter = 5

  const addvalue =() => {
    if(counter < 20){
    setCounter(counter+1)
    console.log("clicked",counter);
    }
  }


  const sub = ()=>{
    if(counter > 0){
    setCounter(counter-1)
    console.log('clicked res', counter);
    }
  }


  return (
    <>
    <h1>app file</h1> 
    <h2>counter value : {counter} </h2>

    <button onClick={addvalue}>add value</button> 
    <br />
    <button onClick={sub}>remove value</button>
    </>
  )
}

export default App
