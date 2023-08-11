import React, { useEffect, useState } from 'react'
import { GetAllNotes } from '../../client/api/notes'
import Note from '../../components/note'
import { UserInfo } from '../../client/api/auth'

type Note = {content: string, title: string, created: string, updated: string, pk: number}

function NotesPage() {
  const [notes, setNotes] = useState([])
  useEffect(()=> {
    GetAllNotes().then(data => setNotes(JSON.parse(data.request?.response).results))
    UserInfo().then(data => console.log(data))
  }, [])
  return (
    <section className='flex justify-center'>
      <ul>
        {notes.map((n: Note) => <li key={n.pk} className='mb-4'><Note title={n.title} content={n.content} created={n.created} updated={n.updated} pk={n.pk} /></li>)}
      </ul>
    </section>
  )
}

export default NotesPage
