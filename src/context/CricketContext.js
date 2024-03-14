import React, {createContext} from "react";
let cricketContext=createContext();
console.log(cricketContext);

export default cricketContext

/*
cricketContext={
    Provider: Component       => it's used to add value in this obj
    Consumer: Component       => it's used to access value in this obj
}
*/

// <cricketContext.Provider />