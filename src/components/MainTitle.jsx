import React from 'react'
export const MainTitle = ({title}) => {
  return (
    <div className='sm:fixed z-10 flex flex-col w-full'>
    <div className='bg-white drop-shadow-md h-fit pb-5 pt-[30px]   w-full sm:w-[60%] md:w-[65%] lg:w-[70%] xl:w-[75%]'>
      <h1 className='drop-shadow-md text-center font-bold text-[28px]'>{title}</h1>
    </div>
    <div className='w-[90%] sm:w-[70%] md:w-[65%] lg:w-[70%] xl:w-[75%] h-1 bg-[#022038] opacity-5 '></div>
  </div>
  )
}
