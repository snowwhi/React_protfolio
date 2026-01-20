import { useRef, useState } from "react";
import '../index.css'
import bgimage from '../assets/bg.avif'
import logo from '../assets/logo.jpg'
import BottomText from './BottomText'
import { useGSAP } from "@gsap/react";
function Background() {
  const TiltText = useRef(null)
  const [xval,SetXval]=useState(0)
  const [yval,Setyval]=useState(0)
  const mouseMoving = (e)=>{
    const rect = TiltText.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25; 
    const y = -(e.clientY - rect.top - rect.height / 2) / 15;
    TiltText.current.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    SetXval(x);
  Setyval(y);
  useGSAP (function (){
      gsap.to(TiltText.current,{
        transform:`rotateX(${y}deg) rotateY(${x}deg)`,
        duration:2,
        ease :Power4.out
      })
  },[xval,yval])
    }
  return (
   <>
   <div  onMouseMove={(e)=>(mouseMoving(e))} className='h-screen w-full bg-white px-2 py-1.5 box-border'> 
    <div  className=' perspective-[1000px]  p-8 h-screen w-full bg-black rounded-3xl bg-right bg-no-repeat'style={{backgroundImage:`url(${bgimage})`}}>
       <img src={logo} className='h-20 w-20 rounded-full ml-10 pt-5'/>
       <div className='mt-25  w-fit perspective-[1000px] ' ref={TiltText}>
     <h1 className='text-[6vw] text-white uppercase font-extrabold leading-[3vw]'>I am <span className='text-7xl text-gray-400 uppercase font-bold'>Baddie</span>™</h1>
     <h1 className='text-[7vw] text-white uppercase font-extrabold leading-[6vw] '>Developer</h1>
     <h1 className='text-[4vw] text-white uppercase font-extrabold leading-[4vw]' >To Hire</h1>
     </div>
       <BottomText/>
    </div>
   </div>
   </>
  )
}

export default Background
