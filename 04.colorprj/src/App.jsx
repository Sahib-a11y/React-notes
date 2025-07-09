import { useState } from "react";


function App (){
  const [color ,setcolor] = useState("olive")

  return(
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
      <button 
      onClick={()=> setcolor("red")}
      style={{backgroundColor:"red"}}>
        Red
      </button>

      <button 
      onClick={()=> setcolor("brown")}
      style={{backgroundColor:"brown"}}>
        Red
      </button>
      <button 
      onClick={()=> setcolor("orange")}
      style={{backgroundColor:"orange"}}>
        Red
      </button>
      <button 
      onClick={()=> setcolor("blue")}
      style={{backgroundColor:"blue"}}>
        blue
      </button>
      
    </div>
  )
}

export default App