import { useEffect, useState } from 'react'
import { GetAllNotes } from '../../client/api/notes'
import Note from '../../components/note'
import Loader from '../../components/loader'

type Note = {content: string, title: string, created: string, updated: string, pk: number}

function NotesPage() {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    setLoading(true)
    GetAllNotes()
      .then(data => setNotes(JSON.parse(data.request?.response).results))
      .finally(() => setLoading(false))
  }, [])
  return (
    <section className='flex justify-center'>
      {loading ? <Loader size="large" dark={localStorage.getItem('theme') !== 'dark'} /> :<ul>
        {notes.map((n: Note) => <li key={n.pk} className='mb-4'><Note title={n.title} content={n.content} created={n.created} updated={n.updated} pk={n.pk} /></li>)}
      </ul>}
    </section>
  )
}

export default NotesPage
