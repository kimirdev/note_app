import React, { useEffect, useState } from 'react'
import { GetAllNotes } from '../../client/api/notes'
import Note from '../../components/note'

type Note = {content: string, title: string, created: string, updated: string, pk: number}

function NotesPage() {
  const [notes, setNotes] = useState([])
  useEffect(()=> {
    GetAllNotes().then(data => setNotes(JSON.parse(data.request?.response).results))
  }, [])
  return (
    <section className='flex justify-center'>
      <ul>
        {notes.map((n: Note) => <li key={n.pk} className=' mb-2'><Note title={n.title} content={n.content} created={n.created} updated={n.updated} /></li>)}
      </ul>
    </section>
  )
}

export default NotesPage
