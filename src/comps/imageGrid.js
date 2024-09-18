import React from "react";
import useFirestore from "../hooks/useFirestore";
import { doc } from "firebase/firestore";

const ImageGrid = ({setSelectedImg}) =>{

    
    const {docs } = useFirestore('images');
    console.log(docs);
    return(
        <div className="image-grid">
            {docs && docs.map(doc => (
                <div className="image-wrap" key={doc.id}
                    onClick = {() => setSelectedImg(doc.url)}
                 >   
                    <img src={doc.url} alt="uploaded pic" />
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;