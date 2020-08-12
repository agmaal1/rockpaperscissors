import React from "react";

function Player({weapon}) {
    return    <div className="player"><i className={`fas fa-hand-${weapon} fa-10x`}></i></div>
}

export default Player