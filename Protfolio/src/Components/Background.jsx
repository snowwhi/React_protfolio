
import '../index.css'
import bgimage from '../assets/bg.avif'
import logo from '../assets/logo.jpg'
import TiltText from './TiltText'
import BottomText from './BottomText'
function Background() {
  return (
   <>
   <div className='h-screen w-full bg-white px-2 py-1.5 box-border'> 
    <div  className=' p-8 h-screen w-full bg-black rounded-3xl bg-right bg-no-repeat'style={{backgroundImage:`url(${bgimage})`}}>
       <img src={logo} className='h-20 w-20 rounded-full ml-10 pt-5'/>
       <TiltText/>
       <BottomText/>
    </div>
   </div>
   </>
  )
}

export default Background
