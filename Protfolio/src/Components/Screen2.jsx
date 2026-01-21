import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all' 
import '../index.css'
  gsap.registerPlugin(ScrollTrigger);
function Screen2() {

   useGSAP(function (){
    gsap.from('.RotateText',{
      transform:'rotateX(-90deg)',
      opacity:0,
      duration:2,
      stagger:1,
      scrollTrigger:{
        trigger:'.RotateText',
        start:'top 60%',
        end:'top -100%',
        scrub:2,
   
   }})
   })
  return (
   <>
   <div className='bg-white text-black text-center p-5'>
     <h1 className='mt-5 w-full p-1 flex justify-center text-xl font-bold '>© Developed By Khadija | All Copyright reserved</h1>
   </div>
   <div className='perspective-[1000px]'>
    <h1  className='RotateText  origin-[33%_75%] text-[13vw] font-extrabold tracking-tight text-center leading-[15vw]'>IMPACTFULL</h1>
   </div>
      <div className='perspective-[1000px]'>
    <h1 className='RotateText origin-[33%_75%]  text-[13vw] font-extrabold tracking-tight text-center leading-[15vw] '>Development</h1>
   </div>
 <div className='perspective-[1000px]'>
    <h1 className='RotateText origin-[33%_75%]  text-[13vw] font-extrabold tracking-tight text-center leading-[15vw]'>IS THE</h1>
   </div>
    <div className='perspective-[1000px]'>
    <h1 className='RotateText origin-[33%_75%] text-[13vw] font-extrabold tracking-tight text-center leading-[15vw]'>ONE</h1>
   </div>
    <div className='perspective-[1000px]'>
    <h1 className='RotateText origin-[33%_75%] text-[13vw] font-extrabold tracking-tight text-center leading-[15vw]'>THAT</h1>
   </div>
    <div className='perspective-[1000px]'>
    <h1 className='RotateText origin-[33%_75%] text-[13vw] font-extrabold tracking-tight text-center leading-[15vw]'>WORKS</h1>
   </div>
   </>
  )
}

export default Screen2
