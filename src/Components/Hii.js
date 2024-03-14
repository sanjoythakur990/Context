import { useContext } from "react";
import cricketContext from "../context/CricketContext";
const Hii=()=>{
    const name = useContext(cricketContext);
    return (
        <div>
            <h1>Hii Cricketers</h1>
            <h2>Hii {name}</h2>
            <hr />
        </div>
    )
}

export default Hii