import { useState, useEffect } from "react";
import { projectStorage, timestamp, projectCollectionRef, projectFirestore } from "../firebase/config";
import { getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import { addDoc } from "firebase/firestore";

const storage = getStorage();
const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const storageRef = ref(storage, file.name);
        const collectionRef = ref('images');
        
        const uploadTask = uploadBytesResumable(storageRef, file);
        
        uploadTask.on('state_changed', (snapshot) => {
            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        },
        (err) => {
            setError(err);
        },
        async () => {

            
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            const createdAt = timestamp();
            await addDoc(projectCollectionRef, { url, createdAt });
            setUrl(url);
        });
    
    }, [file]);

    return { progress, url, error };
}

export default useStorage;