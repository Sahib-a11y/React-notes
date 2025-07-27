import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function GitHub(){
    const data = useLoaderData()
    // const [data,setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Sahib-a11y')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setdata(data)
            
    //     })
    // },[])
    return(
        <>
        <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl ">Github Following:{data?.following}
        <img  className="text-white" src={data?.avatar_url} alt="Git" />
        </div>
        </>
    )
}

export default GitHub


export const githubInfoloader = async () => {
    const response = await fetch('https://api.github.com/users/Sahib-a11y')
    return response.json()
}