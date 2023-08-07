import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { GetNoteById } from '../../client/api/notes'
import { useParams } from 'react-router-dom'

type Note = {content: string, title: string, created: string, updated: string, pk: number}

export default function NoteDetailsPage() {
  const {id} = useParams()
  const [note, setNote] = useState<Note|null>(null)

  useEffect(() => {
    if (id) {
      GetNoteById(Number(id)).then(data => setNote(data.data))
    }
  }, [id])

  return (
    <section className='w-screen flex items-center flex-col gap-5'>
    <div className="flex w-96 max-[400px]:w-80 min-w-325 rounded justify-between border-2 border-zinc-600 p-2 shadow-lg transition-all">
      <div>
        <h3 className=" text-zinc-600 max-w-[250px] truncate">{note?.title}</h3>
      </div>
      <div className=" w-24">
        <span className="block text-xs text-zinc-600">created at</span>
        <span className="block text-xs text-zinc-400">{note && format(new Date(note.created), 'MMM d HH:mm')}</span>
        <span className="block text-xs text-zinc-600">updated at</span>
        <span className="block text-xs text-zinc-400">{note && format(new Date(note.updated), 'MMM d HH:mm')}</span>
      </div>
    </div>
    <div className="flex w-96 max-[400px]:w-80 min-w-325 rounded justify-between border-2 border-zinc-600 p-2 shadow-lg transition-all mb-10">
      <p className='text-zinc-600'>{note?.content}</p>
    </div>
    </section>
  )
}
