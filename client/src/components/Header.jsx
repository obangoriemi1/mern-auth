import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {useSelector}  from "react-redux"
const Header = () => {
  const {currentUser} = useSelector(state => state.user)
   return  (
    <div className='bg-neutral-700'>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-white">AUTH APP</h1>
        </Link>
        <ul className="text-white flex gap-4">
            <NavLink to={"/"}>HOME</NavLink>
            <NavLink to={"/about"}>ABOUT</NavLink>
            <NavLink to={"/profile"}>{currentUser ? (
              <img className='h-7 w-7 rounded-full object-cover'  alt="profile" src={currentUser.profilePicture}/>
            ):(
              <li>SIGN IN</li>
            )}</NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Header