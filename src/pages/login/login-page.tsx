import React, { useState } from 'react'
import { LoginUser } from '../../client/api/auth'
import { Link, useNavigate } from 'react-router-dom'
import ErrorMessage from '../../components/error'
import { FormInput, FormTitle, Submit } from '../../components/form'
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
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    LoginUser({ username: username, password: password })
      .then(data => localStorage.setItem('token', data.data.access))
      .then(() => navigate('/'))
      .catch((e) => setError(e.response.data))
      .finally(() => setLoading(false))
  }

  return (
    <form className='flex justify-center min-h-screen items-center flex-col gap-4' onSubmit={handleSubmit}>
      <FormTitle title="Login" />
      <FormInput title='Username' value={username} type='text' setValue={setUsername} />
      <FormInput title='Password' value={password} type='password' setValue={setPassword} />


      <Submit title='Login' loading={loading}/>
      <div className='flex flex-col gap-4'>
        {error?.username && <ErrorMessage message={`username: ${error.username}`} />}
        {error?.password && <ErrorMessage message={`password: ${error.password}`} />}
        {error?.detail && <ErrorMessage message={`${error.detail}`} />}
      </div>
      <p className='mt-4 text-sm dark:text-zinc-200'>Don't have an account? <Link to='/register' className=' underline'>Register</Link>.</p>
    </form>
  )
}
