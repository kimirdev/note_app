import { Link, Outlet, useNavigate } from 'react-router-dom'
import isAuthed from '../../helpers/isAuthed';
import Switcher from '../dark-mode-switcher';
import { useEffect, useState } from 'react';
import { UserInfo } from '../../client/api/auth';

export default function Layout() {
  const navigate = useNavigate()

  const [user, setUser] = useState(null);

  const onClickLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }

  const authed = isAuthed()

  useEffect(() => {
    if (authed) {
      UserInfo().then(data => setUser(data.data.results[0]))
    }
  }, [authed])


  useEffect(() => {
    if (user) {
      console.log(user)
    }
  }, [user])

  return (
    <>
      <Switcher />
      {authed &&  
        <header className='w-screen flex justify-center h-80 items-center flex-col'>
          {user?.avatar_url && <><img src={user.avatar_url} alt='avatar' width={80} height={80} className='mb-4 border-2 border-zinc-400 rounded-full' /></>}
          {user?.username && <p className='mb-2 text-zinc-600 dark:text-zinc-200'>{user.username}</p>}
          <div className='flex justify-between w-44 mb-4'>
            <button className='border-2 w-20 p-2 rounded border-zinc-400 text-zinc-400 hover:bg-green-400 hover:text-white hover:border-green-400 transition-all' onClick={() => navigate("/notes/add")}>New</button>
            <button className='border-2 w-20 p-2 rounded border-zinc-400 text-zinc-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all' onClick={onClickLogout}>Logout</button>
          </div>
          <h1 className='text-3xl text-zinc-600 dark:text-zinc-200'><Link to='/'>My Note App</Link></h1>
        </header>
      }
      <Outlet />
    </>
  )
}
