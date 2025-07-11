import { useCallback, useEffect, useState } from "react";


function App(){
  const [length,setlength] = useState(8)
  const[numberAllow,setnumberallow] = useState(false)
  const[charactorallow,setcharacterallow]=useState(false)
  const[password,setpassword] = useState("")
  const [copied, setCopied] = useState(false);

  const passwordgenerator = useCallback(() => {

    let pass = ""
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm"

    if(numberAllow) str += "0123456789"
    if (charactorallow) str +=  "!@#$%^&*()_+=-~`|'?/.,><*"

    for( let i = 1 ; i<=length ; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }

    setpassword(pass)

  },[length,numberAllow,charactorallow,setpassword])

  const copypasswordtoclipboard = useCallback(() =>{
    if(copypasswordtoclipboard){
      window.navigator.clipboard.writeText(password)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      },2000);
    }
  },[password])
  

  useEffect(() => {
    passwordgenerator()
  } , [length,numberAllow,charactorallow,
    passwordgenerator])


  return(
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8  bg-gray-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mp-4 text-black">
        <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="password"
        readOnly
        />
        <button 
        onClick={copypasswordtoclipboard}  
        className="outline-none bg-black text-white px-3 py-0.5 shrink-0">Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex text-sm gap-x-1 text-white">
          <input type="range"
          min={8}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => {
            setlength(e.target.value)}} />
            <label>length: {length}</label>
        </div>


        <div className="flex items-center gap-x-1 text-white">
        <input type="checkbox" 
        defaultChecked={numberAllow}
        id="numberInput"
        onChange={() => {
          setnumberallow((prev) => !prev)}}    //yaha previoius value ka access milta hain.
        />
        <label htmlFor="NumberInput">Number</label>
        </div>


        <div className="flex items-center gap-1 text-white">
          <input type="checkbox"
          defaultChecked={charactorallow}
          id="charactorInput"
          onChange={() => {
            setcharacterallow((prev) => !prev)}}  //yaha previoius value ka access milta hain.
          />
          <label htmlFor="characterInput">Character</label>


        </div>
      </div>
       {copied &&(
         <div className="text-yellow-500 text-sm text-center m-5">
         Copy to clipboard
         </div>
        )}
    </div>
  )
}

export default App