import React from 'react'
import {useSelector}  from "react-redux"
import {useRef, useState, useEffect} from "react"
import { getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage"
import {app} from "../fireBase.js"
const Profile = () => {
  const fileRef = useRef(null)
  const {currentUser} = useSelector(state => state.user)
  const [image, setImage] = useState(undefined)
  const [imageError, setImageError] = useState(false)
  const [imagePercent, setImagePercent] = useState(0)
  const [formData, setFormData] = useState({})
 
  useEffect(() =>{
    if(image){
      handleFileUpload(image)
    }
  }, [image])

  const  handleFileUpload =async() =>{
      const storage = getStorage(app)
      const fileName = new Date().getTime() + image.name;
      const storageRef = ref(storage, fileName)
      const uploadTask = uploadBytesResumable(storageRef, image)
      uploadTask.on(
        'state_change',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setImagePercent(Math.round(progress))
        },
      (error)=>{
          setImageError(true)
      },
      () =>{
        getDownloadURL(uploadTask.snapshot.ref).then
        ((downloadURL) =>setFormData({...formData,
           profilePicture: downloadURL}))
       
      }
  );
    };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input type='file' ref={fileRef} hidden accept='image*' onChange={(e) => setImage(e.target.files[0])}/>
        {/* firebase storage rules */}
        {/* allow read;
        allow write : if
        request.resource.size < 2 * 1024 * 1024 &&
       request.resource.contentType.matches("image/.*") */}
        <img onClick={() => fileRef.current.click()} className='h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2' src={formData.profilePicture || currentUser.profilePicture}/>
        <p className='text-sm self-center'>{imageError ? (<span className='text-red-700'>Error uploading image</span>) : imagePercent > 0  && imagePercent < 100 ? (
          <span className='text-slate-700'>{`Uploading: ${imagePercent} %`}</span>) : imagePercent === 100 ? (<span className='text-green-700'>
            image uploaded successfully
          </span>) : ""}
        </p>
        <input defaultValue={currentUser.name} type='text' id='username' placeholder='Username' className='bg-slate-100 rounded-lg p-3'/>
        <input defaultValue={currentUser.email} type='email' id='email' placeholder='Email' className='bg-slate-100 rounded-lg p-3'/>
        <input  type='text' id='password' placeholder='password' className='bg-slate-100 rounded-lg p-3'/>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>Update</button>
      </form>
      <div className='flex justify-between mt-5'>
         <span className='text-red-700 9 cursor-pointer'>Delete Account</span>
         <span className='text-neutral-800 9 cursor-pointer'>Sign out</span>
      </div>


    </div>
  )
}

export default Profile