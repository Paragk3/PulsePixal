import { useState,useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { collection } from "firebase/firestore";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);   

    useEffect(() => {
        const unsub = projectFirestore.collection(collection).orderBy('createdAt','desc').onSnapshot((snapshot) => {
            
            let documents = [];
            snapshot.forEach((doc) => {
                documents.push({...doc.data(), id: doc.id})
            });
            setDocs(documents);
        });
    
    }, [collection])

    return{docs};
}