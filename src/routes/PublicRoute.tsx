import { Navigate, Outlet } from "react-router-dom";
import isAuthed from "../helpers/isAuthed";

export default function PublicRoute() {
  return !isAuthed() ? <Outlet /> : <Navigate to="/" />;
}