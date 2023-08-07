import { instance } from "..";

export const GetAllNotes = () => {
  return instance.get('/notes/?format=json')
}

export const CreateNewNote = (data: {title: string, content: string}) => {
  return instance.post('/notes/', data)
}

// http://127.0.0.1:8000/notes/13/?format=json


export const GetNoteById = (id: number) => {
  return instance.get(`/notes/${id}/?format=json`)
}