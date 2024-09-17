import React, { useState } from "react";
import ProgressBar from "./progressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null); // For image preview

  const types = ["image/png", "image/jpeg"];
  const maxSize = 1024 * 1024 * 2; // 2MB maximum file size

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type) && selected.size <= maxSize) {
      setFile(selected);
      setError("");
      setPreviewUrl(URL.createObjectURL(selected)); // Create preview URL
    } else {
      setFile(null);
      setPreviewUrl(null); // Clear preview if validation fails
      setError(
        selected && selected.size > maxSize
          ? "File size too large (max 2MB)"
          : "Please select an image file (png or jpeg)"
      );
    }
  };

  return (
    <form>
      <label htmlFor="upload-image">
        <input
          type="file"
          id="upload-image" // Add ID for label association
          onChange={changeHandler}
          style={{ display: "none" }}
        />
        <span aria-label="Select Image" className="upload-button">
          +
        </span>
      </label>

      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="file-name">{file.name}</div>}
        {previewUrl && ( // Image preview section
          <div className="image-preview">
            <img src={previewUrl} alt="Uploaded Image Preview" />
          </div>
        )}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;