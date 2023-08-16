import { useEffect, useState } from "react";
import { FormInput, FormTitle, Submit } from "../../components/form";
import { GetNoteById, UpdateNoteById } from "../../client/api/notes";
import { useNavigate, useParams } from "react-router-dom";

type Note = {content: string, title: string, created: string, updated: string, pk: number}

export default function EditNotePage() {
  const {id} = useParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [updateLoading, setUpdateLoading] = useState(false)
  const [getLoading, setGetLoading] = useState(false)

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUpdateLoading(true);

    UpdateNoteById(Number(id), {title, content})
      .then(() => navigate(`/notes/${id}/`))
      .finally(() => setUpdateLoading(false));
  }

  const [note, setNote] = useState<Note|null>(null)

  useEffect(() => {
    if (id) {
      setGetLoading(true)
      GetNoteById(Number(id))
        .then(data => setNote(data.data))
        .finally(() => setGetLoading(false))
    }
  }, [id])

  useEffect(() => {
    if (note) {
      setTitle(note.title)
      setContent(note.content)
    }
  }, [note])
  
  return (
    <form className='flex justify-center items-center flex-col gap-4' onSubmit={handleSubmit}>
      <FormTitle title="Edit note" />
      <FormInput title='Title' value={title} type='text' setValue={setTitle} />
      <FormInput title='Content' value={content} type='textarea' setValue={setContent} />

      <div className='flex justify-around w-80'>
        <button type="button" className=" p-2 rounded text-zinc-600 border-2 border-zinc-500 hover:bg-zinc-500 dark:text-zinc-200 dark:border-zinc-200 dark:hover:bg-zinc-200 dark:hover:text-zinc-600 hover:text-white transition-all w-20"  onClick={() => navigate(`/notes/${id}/`)}>Cancel</button>
        <Submit title="Edit" loading={updateLoading || getLoading} />
      </div>
    </form>
  )
}
