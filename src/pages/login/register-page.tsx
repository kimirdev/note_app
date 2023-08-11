import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ErrorMessage from '../../components/error'
import { FormGroup, FormTitle, Submit } from '../../components/form'
import { FileUploader } from 'react-drag-drop-files'
import { RegisterUser } from '../../client/api/auth'
// import Input from '../../components/input'

type ErrorType = {
  username: string,
  password: string,
  detail: string,
}

const fileTypes = ["JPG", "PNG", "SVG"];

export default function RegisterPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // const [repeat, setRepeat] = useState("")
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [file, setFile] = useState(null);

  const handleChange = (file) => {
    setFile(file);
  };

  const navigate = useNavigate()

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log({username, password, email, firstName, lastName})

    console.log(file)

    if (file) {
      // RegisterUser({username, password, email, first_name: firstName, last_name: lastName, avatar: file}).then(() => navigate("/login"))

      const fileReader = new FileReader()

      fileReader.onload = () => {
        RegisterUser({username, password, email, first_name: firstName, last_name: lastName, avatar_url: fileReader.result}).then(() => navigate("/login"))
        console.log(fileReader.result)
      }
  
      fileReader.readAsDataURL(file)
    } else {
      RegisterUser({username, password, email, first_name: firstName, last_name: lastName}).then(() => navigate("/login"))

    }
    
    // RegisterUser({username, password, email, first_name: firstName, last_name: lastName}).then(() => navigate("/login"))

  }

  return (
    <form className='flex justify-center min-h-screen items-center flex-col gap-4' onSubmit={handleSubmit}>
      {/* <h1 className="text-3xl">Register</h1> */}
      <FormTitle title='Register' />
      <FormGroup title='Username' value={username} type='text' setValue={setUsername} />
      <FormGroup title='Password' value={password} type='password' setValue={setPassword} />
      {/* <FormGroup title='Repeat password' value={repeat} type='password' setValue={setRepeat} /> */}
      <FormGroup title='Email' value={email} type='email' setValue={setEmail} />
      <FormGroup title='First name' value={firstName} type='text' setValue={setFirstName} />
      <FormGroup title='Last name' value={lastName} type='text' setValue={setLastName} />
      
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} hoverTitle="">

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

      <Submit title='Register' />

      {/* {error?.username && <ErrorMessage message={`username: ${error.username}`} />}
      {error?.password && <ErrorMessage message={`password: ${error.password}`} />}
      {error?.detail && <ErrorMessage message={`${error.detail}`} />} */}


      <p className='mt-4 text-sm dark:text-zinc-200'>Already have an account? <Link to='/login' className=' underline'>Login</Link>.</p>
    </form>
  )
}
