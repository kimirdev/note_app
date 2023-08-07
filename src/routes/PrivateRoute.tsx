import { Navigate, Outlet } from "react-router-dom";
import isAuthed from "../helpers/isAuthed";

export default function PrivateRoute() {
  return isAuthed() ? <Outlet /> : <Navigate to="/login" />;
}