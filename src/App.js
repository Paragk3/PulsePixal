
import './App.css';
import ImageGrid from './comps/imageGrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import Model from './comps/Model';
import { useState } from 'react';


function App() {

  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
        <Title/>
        <UploadForm/>
        <ImageGrid setSelectedImg = {setSelectedImg}/>
        <Model selectedImg={selectedImg}/>
        
    </div>
  );
}

export default App;
