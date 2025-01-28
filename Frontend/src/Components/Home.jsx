import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center text-white bg-gray-700 h-screen gap-5'>
      <h1 >WELCOME TO NALANDA LIBRARY</h1>
      <h2>Before start You need to Login first</h2>
      <Link to={'/Login'}> <button className='bg-blue-500 text-white px-2 rounded-md'>User Login</button>
      </Link>
      <Link to={'/AdminLogin'}> <button className='bg-blue-500 text-white px-2 rounded-md'>Admin Login</button>
      </Link>
    </div>
  )
}

export default Home
