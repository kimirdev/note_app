import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import {LoginPage} from './pages/login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route index element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
