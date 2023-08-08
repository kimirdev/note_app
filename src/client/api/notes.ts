import { instance } from "..";

type NoteType = {
  title: string,
  content: string,
}

export const GetAllNotes = () => {
  return instance.get('/notes/?format=json')
}

export const CreateNewNote = (data: NoteType) => {
  return instance.post('/notes/', data)
}

// http://127.0.0.1:8000/notes/13/?format=json


export const GetNoteById = (id: number) => {
  return instance.get(`/notes/${id}/?format=json`)
}

export const UpdateNoteById = (id: number, data: NoteType) => {
  return instance.put(`/notes/${id}/`, {...data, pk: id})
}

export const DeleteNoteById = (id: number) => {
  return instance.delete(`/notes/${id}/`)
}