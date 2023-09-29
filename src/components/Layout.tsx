import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div className=' flex flex-col '>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
