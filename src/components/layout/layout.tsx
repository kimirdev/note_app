import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Layout() {
  // const navigate = useNavigate()
  const onClickLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }

  return (
    <>
      <header className='w-screen flex justify-center h-60 items-center flex-col'>
        <div className='flex justify-between w-44 mb-4'>
          <button className='border w-20 p-2 text-zinc-400 hover:bg-green-400 hover:text-white hover:border-green-400 transition-all'>New</button>
          <button className='border w-20 p-2 text-zinc-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all' onClick={onClickLogout}>Logout</button>
        </div>
        <h1 className='text-3xl text-zinc-600'>My Note App</h1>
      </header>
      <Outlet />
    </>
  )
}
