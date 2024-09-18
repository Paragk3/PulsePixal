import React from "react";

const Model = ({ selectedImg }) => {

    return (
        <div className="backdrop">
            <img src={selectedImg} alt="enlarge pic"/>
        </div>
    )
}

export default Model;