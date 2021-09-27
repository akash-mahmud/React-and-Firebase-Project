import React,{useState} from 'react';
import Title from './components/Title'
import UploadForm from './components/UploadForm';
import ShowImage from './components/ShowImage';
import Modal from './components/Modal';
function App() {

  const [selectedImage, setSelectedImage] = useState(null)
  return (
    <>
    <div className="App">

      <Title/>
      <UploadForm/>
      <ShowImage setSelectedImage={setSelectedImage}/>
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/> }

    </div>
    </>
  )
}

export default App
