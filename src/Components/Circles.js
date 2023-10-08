import React from "react";

import "../Game.css";


const Circles = ({id, ClickingCircle, className}) => {
  
    return (
        <div className={`Circles ${ className }`}  onClick={() => ClickingCircle(id)}>
        </div>
    )
}

export default Circles