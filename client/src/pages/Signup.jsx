import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Oauth from '../components/Oauth'


const Signup = () => {
const [formData, setFormData] = useState({})
const [error, setError] = useState(false)
const [loading, setLoading] = useState(false)
const navigate = useNavigate()
  const handleChange = (e) =>{
    setFormData({...formData, [e.target.id]: e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      setLoading(true)
      setError(false)
      const response = await fetch ("/api/auth/signup",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
       
      })
      const data = await response.json()
      setLoading(false);
      if(data.success === false){
        setError(true)
        return;
      }
      navigate("/sign-in")
      
    } catch (error) {
      setLoading(false)
      setError(true)
    } 
   
   

  }
 
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign Up
        </h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input onChange={handleChange} type="text" placeholder='Enter name' id='name' className='bg-slate-100 p-3 rounded-lg'/>
          <input onChange={handleChange}  type="email" placeholder='Enter email' id='email' className='bg-slate-100 p-3 rounded-lg'/>
          <input onChange={handleChange}  type="password" placeholder='Enter password' id='password' className='bg-slate-100 p-3 rounded-lg'/>
          <button disabled={loading} className='bg-slate-800 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
            {loading ? "loading": "Sign up."}
            </button>
            <Oauth/>

        </form>
        <div className="flex gap-4  mt-5">
          <p className="">
            Have an account ?
          </p>
         <Link to={"/sign-in"}>
         <span  className='text-blue-500'>Sign in</span>
         </Link>
        </div>
         <p className='text-red-700 mt-5'>{error && "some thing went wrong"}</p>

    </div>
  )
}

export default Signup