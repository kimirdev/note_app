import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import {LoginPage} from './pages/login'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import { CreateNotePage, NoteDetailsPage, NotesPage } from './pages/notes'
import { Layout } from './components/layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route index element={<Navigate to='/notes' />} />
            <Route path='notes' element={<Outlet />}>
              <Route index element={<NotesPage />} />
              <Route path=':id' element={<NoteDetailsPage />} />
              <Route path='add' element={<CreateNotePage />} />
            </Route>
          </Route>
        </Route>
        <Route path='/login' element={<PublicRoute />} >
          <Route index element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
