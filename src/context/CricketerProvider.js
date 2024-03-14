import React, {useState} from "react";
import cricketContext from "./CricketContext";
const CricketerProvider=(props)=>{
    // let name="Sachin Tendulkar";
    const [cricketer, setCricketer]= useState({
        name:"Sachin Tendulkar",
        age: 47,
        country: "India",
        retired :true
    })
    return (
        <cricketContext.Provider value={{
            cricketer: cricketer,
            setCricketer: setCricketer
        }}>
            {props.children}
        </cricketContext.Provider>
    )
}

export default CricketerProvider