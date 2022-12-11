import React, { useEffect, useState } from 'react'
import {RiBarChartGroupedFill, RiBarChartFill} from 'react-icons/ri'
import {FaTrafficLight} from 'react-icons/fa'
import {ImListNumbered} from 'react-icons/im'
import {SiGoogledomains} from 'react-icons/si'
import {MdConnectWithoutContact} from 'react-icons/md'
import Cloudflare from './assets/Cloudflare.jpeg'
import { useNavigate } from "react-router-dom";
export const SideBar = () => {
  const [state, setState] = useState();
  const pathname = window.location.pathname
  useEffect(()=>{
    switch (pathname) {
      case "/":
        setState(PREV=>PREV=1)
        break;
      case "/popular-domains":
        setState(PREV=>PREV=2)
        break;
      case "/attack-layer3":
        setState(PREV=>PREV=3)
        break;
      default:
        break;
    }
  },  [pathname])
  const navigate = useNavigate();

  const handleTraffic =()=>{
    setState(PREV=>PREV=1)
    navigate("/")
  }
  const handleDomains =()=>{
    setState(PREV=>PREV=2)
    navigate("/popular-domains")
  }
  const handleAttack =()=>{
    setState(PREV=>PREV=3)
    navigate("/attack-layer3")
  }
  return (
    <div className='sm:fixed w-full sm:w-[40%] md:w-[35%] lg:w-[30%] xl:w-[25%] h-fit pb-[20px] sm:pb-0 sm:h-screen bg-gradient-to-b from-[#D0650D] to-[#FA790F] text-white text-center items-center justify-center '>
      <div className=' justify-center items-center align-middle text-center mt-[-2px] mb-[15px]' style={{"textAlign":"-webkit-center"}}>
        <div className=' justify-center items-center align-middle text-center w-[250px] md:w-[300px] h-1 bg-white animate-spin'>
          <div className=' h-1 bg-white opacity-[0.7] animate-spin '>
            <div className=' h-1 bg-white opacity-[0.5] animate-spin '>
            </div>
          </div>
        </div>
        <img src={Cloudflare} width={100} alt="Cloudflare-Icon" className=' rounded-md   ' />
        <h1 className=' text-[25px] font-sans font-black '><span className=' text-[#022038] ' >Cloudflare</span> Assessment</h1>
        <div className=' h-1 bg-white opacity-[0.5]'></div>
      </div>
      <div className='flex flex-col items-center text-[20px] font-sans font-bold ' style={{"textAlign":"-webkit-center"}}>
     {state===1?<div className='animate-bounce drop-shadow-lg bg-[#ff7c12] w-full flex flex-col items-center text-[20px] font-sans font-bold cursor-pointer h-[48px] mt-[9px]' style={{"textAlign":"-webkit-center"}}> <h1 className='flex items-center  mt-[7px] '><FaTrafficLight className='mr-[10px]'/> Current Traffic Change <RiBarChartGroupedFill color='#022038' className='ml-[5px]'/></h1></div>:<div onClick={handleTraffic} className='hover:bg-[#ee842c] w-full flex flex-col items-center text-[20px] font-sans font-bold cursor-pointer h-[48px] mt-[9px]' style={{"textAlign":"-webkit-center"}}> <h1 className='flex items-center  mt-[7px] '><FaTrafficLight className='mr-[10px]'/> Current Traffic Change <RiBarChartGroupedFill color='#022038' className='ml-[5px]'/></h1></div>}
      {state===2?<div className=' animate-bounce drop-shadow-lg bg-[#ff7c12] w-full flex flex-col items-center text-[20px] font-sans font-bold cursor-pointer h-[48px] mt-[9px]' style={{"textAlign":"-webkit-center"}}> <h1 className='flex items-center   mt-[7px]'><SiGoogledomains  className='mr-[10px]'/>Popular Domains<ImListNumbered color="#022038" className='ml-[5px]'/></h1></div>:<div onClick={handleDomains} className='hover:bg-[#ee842c] w-full flex flex-col items-center text-[20px] font-sans font-bold cursor-pointer h-[48px] mt-[9px]' style={{"textAlign":"-webkit-center"}}> <h1 className='flex items-center   mt-[7px]'><SiGoogledomains  className='mr-[10px]'/>Popular Domains<ImListNumbered color="#022038" className='ml-[5px]'/></h1></div>}
     {state===3? <div className=' animate-bounce drop-shadow-lg bg-[#ff7c12] w-full flex flex-col items-center text-[20px] font-sans font-bold cursor-pointer h-[48px] mt-[9px]' style={{"textAlign":"-webkit-center"}}>  <h1 className='flex items-center   mt-[7px]'><MdConnectWithoutContact  className='mr-[10px]'/> Layer 3 DDoS Attack<RiBarChartFill color='#022038' className='ml-[5px]'/></h1></div>:<div onClick={handleAttack}  className='hover:bg-[#ee842c] w-full flex flex-col items-center text-[20px] font-sans font-bold cursor-pointer h-[48px] mt-[9px]' style={{"textAlign":"-webkit-center"}}>  <h1 className='flex items-center   mt-[7px]'><MdConnectWithoutContact  className='mr-[10px]'/> Layer 3 DDoS Attack<RiBarChartFill color='#022038' className='ml-[5px]'/></h1></div>}
      </div>
    </div>
  )
}
