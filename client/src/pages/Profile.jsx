import React from 'react'
import {useSelector}  from "react-redux"
const Profile = () => {
  const {currentUser} = useSelector(state => state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img className='h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2' src={currentUser.profilePicture}/>
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