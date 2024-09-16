import React from "react";
import useStorage from "../hooks/useStorage";

const progressBar = () => {

    return(
        <div className="progress-bar" style={{ width: progress + '%' }}></div>
    )
}

export default progressBar;