import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice.js'
import { useDispatch, useSelector } from "react-redux"
import Oauth from '../components/Oauth.jsx'

const Signin = () => {
const [formData, setFormData] = useState({})
const {loading, error} = useSelector((state) =>state.user)
const navigate = useNavigate()
const dispatch = useDispatch()
  const handleChange = (e) =>{
    setFormData({...formData, [e.target.id]: e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      dispatch(signInStart())
      const response = await fetch ("/api/auth/signin",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
       
      })
      const data = await response.json()
      //there is a dispatch
      if(data.success === false){
        dispatch(signInFailure(data))
      }
      dispatch(signInSuccess(data))
      navigate("/")
      
    } catch (error) {
       dispatch(stringify(error))
    }
   
   

  }
 
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign in
        </h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
         
          <input autoComplete='off' onChange={handleChange}  type="email" placeholder='Enter email' id='email' className='bg-slate-100 p-3 rounded-lg'/>
          <input autoComplete='off'   onChange={handleChange}  type="password" placeholder='Enter password' id='password' className='bg-slate-100 p-3 rounded-lg'/>
          <button disabled={loading} className='bg-slate-800 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
            {loading ? "loading": "Sign in."}
            </button>
            <Oauth/>

        </form>
        <div className="flex gap-4  mt-5">
          <p className="">
            Dont have an account ?
          </p>
         <Link to={"/sign-up"}>
         <span  className='text-blue-500'>Sign up</span>
         </Link>
        </div>
         <p className='text-red-700 mt-5'>{error ?  error.message || "some thing went wrong" : ""}</p>

    </div>
  )
}

export default Signin
