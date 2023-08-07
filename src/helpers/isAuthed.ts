export default function isAuthed() {
  const token = localStorage.getItem("token");

  return token ? true : false;
}