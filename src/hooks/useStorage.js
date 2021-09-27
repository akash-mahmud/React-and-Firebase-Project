import { useState , useEffect } from "react";
import { projectStorage , projectFirestore, timestamp } from "../firebase/cofig";

const useStorage = (file) => {

const [progress, setprogress] = useState(0);
const [error, seterror] = useState(null);
const [url, setUrl] = useState(null);

useEffect(() => {

  //references

  const storageRef = projectStorage.ref(file.name);

  const collectioRef = projectFirestore.collection('images')
  storageRef.put(file).on("State Changed" , (snap) => {
    let percentage = (snap.bytesTransferred / snap.totalBytes) *100;
    setprogress(percentage);
  },(err) => {
    seterror(err)
  }, async() => {

    const url = await storageRef.getDownloadURL();
    const createdAt = timestamp();
    collectioRef.add({url,createdAt})
    setUrl(url)
  })

}, [file])

return {progress,error,url }

}

export default useStorage;