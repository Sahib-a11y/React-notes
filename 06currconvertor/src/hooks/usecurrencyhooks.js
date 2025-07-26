import { useState,useEffect } from "react";

function usecurrencyInfo (currency) {
    const[data,setdata] = useState({}) //empty object diya hain taaki app crash na ho.

    useEffect(() => {
        if(!currency) return; // fetch nahi krega agr currency nahi milti.

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json()) 
        .then((res) => {
            console.log("api res=",res);
            setdata(res[currency] || {});
        })
        .catch((error) => {
            console.error("api error=", error);
            setdata({})  //empty object diya hain error liye. 
        })
    },[currency])

    useEffect(() => {
        console.log("update data=",data);
    },[data]);

    return data
}

export default usecurrencyInfo