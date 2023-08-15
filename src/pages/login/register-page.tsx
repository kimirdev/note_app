import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ErrorMessage from '../../components/error'
import { FormInput, FormTitle, Submit } from '../../components/form'
import { FileUploader } from 'react-drag-drop-files'
import { RegisterUser } from '../../client/api/auth'

type ErrorType = {
  username: string,
  password: string,
  email: string,
  detail: string,
}

const fileTypes = ["JPG", "PNG", "SVG"];

export default function RegisterPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [file, setFile] = useState(null);
  const [error, setError] = useState<ErrorType | null>(null)

  const handleChange = (file) => {
    setFile(file);
  };

  const navigate = useNavigate()

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append("username", username);
    formData.append("password", password);
    formData.append("email", email);
    if (file) formData.append("avatar", file);

    RegisterUser(formData)
      .then(() => navigate("/login"))
      .catch((e) => setError(e.response.data));
  }

  return (
    <form className='flex justify-center min-h-screen items-center flex-col gap-4' onSubmit={handleSubmit}>
      <FormTitle title='Register' />
      <FormInput title='Username' value={username} type='text' setValue={setUsername} />
      <FormInput title='Password' value={password} type='password' setValue={setPassword} />
      <FormInput title='Email' value={email} type='email' setValue={setEmail} />
      
      <label className='flex flex-col items-center'>
        <span className='dark:text-zinc-200'>Avatar</span>
        <FileUploader handleChange={handleChange} name="file" types={fileTypes} hoverTitle="" outline={false}>
          <div className='flex items-center border-2 border-dashed rounded p-2 border-zinc-600 
          cursor-pointer hover:text-zinc-400 hover:border-zinc-400 transition-all overflow-auto
          dark:border-zinc-200 dark:text-zinc-200 dark:hover:text-zinc-400 dark:hover:border-zinc-400'>
            {file ? (
              <div className=' w-16 h-16'>
                <img src={URL.createObjectURL(file)} alt="avatar" />
              </div>
            ) : (
              <div className=''>
              </div>
            )}

            <div className=''>
              {file ? <p>{file.name}</p> : <p>Drag image or click here</p>}
            </div>
          </div>
        </FileUploader>
      </label>

      <Submit title='Register' />

      {error?.username && <ErrorMessage message={`username: ${error.username}`} />}
      {error?.password && <ErrorMessage message={`password: ${error.password}`} />}
      {error?.email && <ErrorMessage message={`email: ${error.email}`} />}
      {error?.detail && <ErrorMessage message={`${error.detail}`} />}


      <p className='mt-4 text-sm dark:text-zinc-200'>Already have an account? <Link to='/login' className=' underline'>Login</Link>.</p>
    </form>
  )
}
