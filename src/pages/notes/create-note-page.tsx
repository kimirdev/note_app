import React, { useState } from 'react'
import { FormInput, FormTitle, Submit } from '../../components/form'
import { useNavigate } from 'react-router-dom'
import { CreateNewNote } from '../../client/api/notes'
import ErrorMessage from '../../components/error'

type ErrorType = {
  content: string,
  title: string,
}

export default function CreateNotePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState<ErrorType|null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    CreateNewNote({title, content})
      .then(() => navigate("/"))
      .catch(e => setError(e.response.data))
      .finally(() => setLoading(false))
  }
  
  return (
    <form className='flex justify-center items-center flex-col gap-4' onSubmit={handleSubmit}>
      <FormTitle title='Add new note' />
      <FormInput title='Title' value={title} type='text' setValue={setTitle} />
      <FormInput title='Content' value={content} type='textarea' setValue={setContent} />

      <div className='flex justify-around w-80'>
        <button type="button" className=" p-2 rounded text-zinc-600 border-2 border-zinc-500 hover:bg-zinc-500 dark:text-zinc-200 dark:border-zinc-200 dark:hover:bg-zinc-200 dark:hover:text-zinc-600 hover:text-white transition-all w-20" onClick={() => navigate("/")}>Cancel</button>
        <Submit title='Add' loading={loading}/>
      </div>

      {error?.title && <ErrorMessage message={`title: ${error.title}`} />}
      {error?.content && <ErrorMessage message={`content: ${error.content}`} />}
    </form>
  )
}
