import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import {LoginPage} from './pages/login'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import { NotesPage } from './pages/notes'
import { Layout } from './components/layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route index element={<Navigate to='/notes' />} />
            <Route path='notes' element={<NotesPage />} />
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
