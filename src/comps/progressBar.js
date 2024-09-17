import React from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url, error } = useStorage(file);

  console.log("Progress:", progress, "URL:", url, "Error:", error);

  return (
    <div className="progress-bar" style={{ width: progress + "%" }}>
      {progress}%
    </div>
  );
};

export default ProgressBar;