import React, { useState } from "react";
import App from "../App";

const UploadForm = () => {
    const [file, setfile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
       
        if (selected && types.includes(selected.type)) {
            setfile(selected);
            setError('');
        } else {
            setfile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>

            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <progressBar file={file} setfile={setfile} />}
            </div>
        </form>
    );
}

export default UploadForm;
