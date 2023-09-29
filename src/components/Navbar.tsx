
function Navbar() {
  return (
    <div className='w-full fixed flex flex-row py-4 px-8 justify-between'>
        <div className=' text-red-600 uppercase font-semibold text-4xl px-4'> netflix</div>
        <div>
            <button className=' w-fit px-4 py-2 bg-red-700 rounded-xl font-medium text-sm uppercase 
             border-2 border-red-700 hover:bg-transparent text-white'> register </button>

        </div>
      
    </div>
  )
}

export default Navbar
