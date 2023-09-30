import { Link } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

function Navbar() {
  const{email,Logout} = UserAuth()
  return (
    <div className='w-full z-10 fixed flex flex-row py-4  gap-y-2 px-8  flex-shrink justify-between'>
        <div className=' text-red-600 uppercase font-semibold text-4xl sm:px-4'> netflix</div>
        <div className="px-4">
            <button className=' w-fit px-4 py-2 bg-red-700 rounded-xl font-medium text-sm uppercase 
             border-2 border-red-700 hover:bg-transparent text-white '>
              {email === undefined? <Link to='/sign-up'>register</Link> : <span onClick={()=>Logout()}>logout</span>}
             </button>

        </div>
      
    </div>
  )
}

export default Navbar
