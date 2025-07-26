import { useState } from "react";
import "./App.css"
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/usecurrencyhooks"

function App () {
  const[amount ,setamount] = useState(0)
  const[from,setFrom] = useState("usd")
  const[to,setto] = useState("inr")
  const[convertedAmount, setConvertedAmount] = useState(0)
  
  const currencyInfo  = useCurrencyInfo(from)

  //check if currncyInfo is not null or undefined before accessing its keys
  const options = currencyInfo ?
  Object.keys(currencyInfo):[];

  const swap = () => {
    setFrom(to)
    setto(from)
    setConvertedAmount(amount)
    setamount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount*currencyInfo[to])
  }

  return(
    <>
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
      backgroundImage:`url('https://t4.ftcdn.net/jpg/02/56/10/07/360_F_256100731_qNLp6MQ3FjYtA3Freu9epjhsAj2cwU9c.jpg')`,
    }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form 
        onSubmit={(e) => {
          e.preventDefault();
          convert()
        }}
        >
          <div className="w-full mb-1">
            <InputBox
            label="from"
            amount={amount}
            CurrencyOptions={options}
            onCurrencyChange={(currency)=> 
               setamount(amount)}
               selectCurrency= {from}
               onAmountChange={(amount) => 
                setamount(amount)
               }

            />

            <button 
            type="button"
            className="absolute left-1/2-translate-x-1/2-translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
            onClick={swap}
            >
              swap</button>
          </div>
          <div className="w-full mt-1 mb-4">
            <InputBox
            label="to"
            amount={convertedAmount}
            CurrencyOptions={options}
            onCurrencyChange={(currency) => 
              setamount(amount)}
              selectCurrency="form"
              amountDisable
             />
          </div>
          <button type="submit"
          className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            Convert{from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default App