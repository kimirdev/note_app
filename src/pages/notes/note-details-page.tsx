import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { DeleteNoteById, GetNoteById } from '../../client/api/notes'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../../components/loader'

type Note = {content: string, title: string, created: string, updated: string, pk: number}

export default function NoteDetailsPage() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState<Note|null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [noteLoading, setNoteLoading] = useState(true);

  useEffect(() => {
    if (id) {
      GetNoteById(Number(id))
        .then(data => setNote(data.data))
        .finally(() => setNoteLoading(false))
    }
  }, [id])

  const onDeleteClick = () => {
    setDeleteLoading(true)

    DeleteNoteById(Number(id))
      .then(() => navigate("/"))
      .finally(() => setDeleteLoading(false))
  }

  const theme = localStorage.getItem('theme')

  return (
    <section className='w-screen flex items-center flex-col gap-5'>
      <div className='flex justify-around w-80'>
        <button type="button" className=" p-2 rounded text-zinc-600 border-2 border-zinc-500 hover:bg-zinc-500 hover:text-white transition-all w-20 dark:text-zinc-200 dark:border-zinc-200 dark:hover:bg-zinc-200 dark:hover:text-zinc-600" onClick={() => navigate("/")}>Cancel</button>
        <button 
          type="button" 
          className="flex justify-center p-2 rounded text-zinc-600 border-2 border-zinc-500 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all w-20 dark:text-zinc-200 dark:border-zinc-200 dark:hover:bg-red-600 dark:hover:border-red-600" 
          onClick={onDeleteClick}>
            {deleteLoading ? <Loader dark={theme !== 'dark'} size='small' /> : "Delete"}
        </button>
        <button type="button" className="p-2 rounded text-zinc-600 border-2 border-zinc-500 hover:bg-zinc-500 hover:text-white transition-all w-20 dark:text-zinc-200 dark:border-zinc-200 dark:hover:bg-zinc-200 dark:hover:text-zinc-600" onClick={() => navigate(`/notes/${id}/edit/`)}>Edit</button>
      </div>
      <div className="flex w-96 max-[400px]:w-80 min-w-325 rounded justify-between border-2 border-zinc-600 p-2 shadow-lg transition-all dark:border-zinc-200 dark:shadow-zinc-800">
        <div>
          <h3 className=" text-zinc-600 dark:text-zinc-200 max-w-[200px] truncate">{note?.title}</h3>
        </div>
        <div className=" w-24">
          <span className="block text-xs text-zinc-600 dark:text-zinc-200">created at</span>
          <span className="block text-xs text-zinc-400">{note && format(new Date(note.created), 'MMM d HH:mm')}</span>
          <span className="block text-xs text-zinc-600 dark:text-zinc-200">updated at</span>
          <span className="block text-xs text-zinc-400">{note && format(new Date(note.updated), 'MMM d HH:mm')}</span>
        </div>
      </div>
      <div className="flex w-96 max-[400px]:w-80 min-w-325 rounded justify-between border-2 border-zinc-600 dark:border-zinc-200 p-2 shadow-lg transition-all mb-10">
        {noteLoading && <div className=' w-full flex justify-center'><Loader size='large' dark={theme !== 'dark'} /></div>}
        <p className='text-zinc-600 break-all dark:text-zinc-200'>{note?.content}</p>
      </div>
    </section>
  )
}
