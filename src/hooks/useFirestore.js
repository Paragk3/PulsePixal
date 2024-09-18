import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    // Create a query against the collection.
    const q = query(collection(projectFirestore, collectionName), orderBy('createdAt', 'desc'));

    // Listen to changes in the collection
    const unsub = onSnapshot(q, (snapshot) => {
      let documents = [];
      snapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    // Cleanup function
    return () => unsub(); 
  }, [collectionName]);

  return { docs };
};

export default useFirestore;
