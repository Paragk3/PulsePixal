import React, { useState } from "react";
import App from "../App";


const UploadForm = () => {

    const [file, setFile] = useState(null);

    const changeHandler = (e) => {
        const selected = e.target.files[0];
        console.log(selected);
    }

    return (
        <form>
        <input type="file" onChange = {changeHandler}/>
        </form>
    );
    }

    export default UploadForm;