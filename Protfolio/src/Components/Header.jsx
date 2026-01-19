import '../index.css'
import 'remixicon/fonts/remixicon.css'
function Header() {
  return (
   <>
  <div className='absolute w-full flex flex-row items-center justify-end z-10 p-10 '>
    <button className='py-2 px-4 bg-gray-700 rounded-3xl text-xl text-white border-2 border-white hover:bg-gray-500'> Hire me </button>
    <i className="ri-more-2-fill text-3xl text-white"></i>
  </div>
   </>
  )
}

export default Header
