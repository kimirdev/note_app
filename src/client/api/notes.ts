import { instance } from "..";

export const GetAllNotes = () => {
  return instance.get('/notes/?format=json')
}
