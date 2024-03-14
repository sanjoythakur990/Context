import React from "react";
import Hello from "./Components/Hello";
import Hii from "./Components/Hii";
import CricketerProvider from "./context/CricketerProvider";

const App=()=>{
  return(
    <div>
      {/* <Hii /> */}
      <Hello />

      {/* <CricketerProvider>
        <Hii />
        <Hello />
      </CricketerProvider> */}
    </div> 
  )
}

export default App
