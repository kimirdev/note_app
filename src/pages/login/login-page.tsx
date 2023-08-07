import React, { useState } from 'react'
import { LoginUser } from '../../client/api/auth'
import { useNavigate } from 'react-router-dom'
import ErrorMessage from '../../components/error'
import { FormGroup } from '../../components/input'
// import Input from '../../components/input'

type ErrorType = {
  username: string,
  password: string,
  detail: string,
}

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<ErrorType | null>(null)
  const navigate = useNavigate()

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    LoginUser({ username: username, password: password })
      .then(data => localStorage.setItem('token', data.data.access))
      .then(() => navigate('/'))
      .catch((e) => setError(e.response.data))
  }

  return (
    <form className='flex justify-center min-h-screen items-center flex-col gap-4' onSubmit={handleSubmit}>
      <h1 className="text-3xl">Login</h1>
      <FormGroup title='Username' value={username} type='text' setValue={setUsername} />
      <FormGroup title='Password' value={password} type='password' setValue={setPassword} />

      <button type="submit" className="bg-zinc-400 p-2 rounded text-white border-2 border-zinc-500 hover:bg-zinc-500 transition-all">Login</button>

      {error?.username && <ErrorMessage message={`username: ${error.username}`} />}
      {error?.password && <ErrorMessage message={`password: ${error.password}`} />}
      {error?.detail && <ErrorMessage message={`${error.detail}`} />}
    </form>
  )
}
