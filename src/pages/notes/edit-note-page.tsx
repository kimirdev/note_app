import { useEffect, useState } from "react";
import { FormGroup } from "../../components/input";
import { GetNoteById, UpdateNoteById } from "../../client/api/notes";
import { useNavigate, useParams } from "react-router-dom";

type Note = {content: string, title: string, created: string, updated: string, pk: number}

export default function EditNotePage() {
  const {id} = useParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    UpdateNoteById(Number(id), {title, content}).then(() => navigate(`/notes/${id}/`))
  }


  const [note, setNote] = useState<Note|null>(null)

  useEffect(() => {
    if (id) {
      GetNoteById(Number(id)).then(data => setNote(data.data))
    }
  }, [id])

  useEffect(() => {
    console.log(note, "NOTE")
    if (note) {
      setTitle(note.title)
      setContent(note.content)
    }
  }, [note])
  
  return (
    <form className='flex justify-center items-center flex-col gap-4' onSubmit={handleSubmit}>
      <h1 className="text-3xl">Edit note</h1>
      <FormGroup title='Title' value={title} type='text' setValue={setTitle} />
      <FormGroup title='Content' value={content} type='textarea' setValue={setContent} />

      <div className='flex justify-around w-80'>
        <button type="button" className=" p-2 rounded text-zinc-600 border-2 border-zinc-500 hover:bg-zinc-500 hover:text-white transition-all w-20" onClick={() => navigate(`/notes/${id}/`)}>Cancel</button>
        <button type="submit" className="bg-zinc-400 p-2 rounded text-white border-2 border-zinc-500 hover:bg-zinc-500 transition-all w-20">Edit</button>
      </div>

      {/* {error?.title && <ErrorMessage message={`username: ${error.title}`} />}
      {error?.content && <ErrorMessage message={`password: ${error.content}`} />} */}
    </form>
  )
}
