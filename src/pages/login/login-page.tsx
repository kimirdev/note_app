import React, { useState } from 'react'
import { LoginUser } from '../../client/api/auth'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    LoginUser({ username: username, password: password }).then(data => localStorage.setItem('token', data.data.access)).then(() => navigate('/'))
  }

  return (
    <form className='flex justify-center min-h-screen items-center flex-col gap-4' onSubmit={handleSubmit}>
      <h1 className="text-3xl">Login</h1>
      <label className='flex flex-col items-center'>
        <span>Username</span>
        <input type='text' className='border-2 rounded border-zinc-500 p-1 focus:outline-none focus:border-zinc-900' spellCheck={false} value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label className='flex flex-col items-center'>
        <span>Password</span>
        <input type='password' className='border-2 rounded border-zinc-500 p-1 focus:outline-none focus:border-zinc-900' value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>

      <button type="submit" className="bg-zinc-400 p-2 rounded text-white border-2 border-zinc-500 hover:bg-zinc-500 transition-all">Login</button>
    </form>
  )
}
