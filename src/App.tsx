import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import {LoginPage, RegisterPage} from './pages/login'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import { CreateNotePage, EditNotePage, NoteDetailsPage, NotesPage } from './pages/notes'
import { Layout } from './components/layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<PrivateRoute />}>
              <Route index element={<Navigate to='/notes' />} />
              <Route path='notes' element={<Outlet />}>
                <Route index element={<NotesPage />} />
                <Route path=':id' element={<NoteDetailsPage />} />
                <Route path=':id/edit' element={<EditNotePage />} />
                <Route path='add' element={<CreateNotePage />} />
              </Route>
          </Route>
          <Route element={<PublicRoute />} >
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
