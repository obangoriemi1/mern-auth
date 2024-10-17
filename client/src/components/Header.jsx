import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-neutral-700'>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-white">AUTH APP</h1>
        </Link>
        <ul className="text-white flex gap-4">
            <NavLink to={"/"}>HOME</NavLink>
            <NavLink to={"/about"}>ABOUT</NavLink>
            <NavLink to={"/sign-in"}>SIGN IN</NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Header