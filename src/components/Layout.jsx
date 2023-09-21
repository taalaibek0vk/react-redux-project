import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'


const Layout = () => {
  return (
    <div className="grid grid-cols-4 grid-flow-row auto-rows-min gap-4 bg-slate-100 min-h-screen text-center text-slate-900">
      <Navbar />
      <div className='col-span-full px-5 pb-5 md:col-start-2 md:col-end-4'>
        <Outlet />
      </div>

    </div>
  )
}

export default Layout
