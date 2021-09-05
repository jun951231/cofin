import React from "react"
import FreeBoard from "../components/FreeBoard";
import FreeBoardMenu from "../components/FreeBoardMenu";

const FreeBoardpage = () =>{

return(<>
    <div>
        <FreeBoardMenu></FreeBoardMenu>
    </div>
    <div>
        <FreeBoard></FreeBoard>
    </div>
</>
);
};          


export default FreeBoardpage