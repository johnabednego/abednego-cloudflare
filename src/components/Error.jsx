import React from 'react'

export const Error = ({error}) => {
    return (
        <>
        <div className='flex items-center justify-center w-10 h-10 p-2 bg-white rounded-full shadow-lg animate-bounce dark:bg-slate-800 ring-1 ring-slate-900/5 dark:ring-slate-200/20'>
            <svg className='w-6 h-6 text-[#022038]' fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
        <div className='flex items-center justify-center mt-[30px]'>
            <span className='relative inline-flex'>
                <button type='button' className='inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-red-400 transition duration-150 ease-in-out bg-white rounded-md shadow cursor-not-allowed dark:bg-slate-800 ring-1 ring-slate-900/10 dark:ring-slate-200/20' disabled >
                     {error}
                </button>
                <span className='absolute top-0 right-0 flex w-3 h-3 -mt-1 -mr-1'>
                    <span className='absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-sky-400'></span>
                    <span className='relative inline-flex w-3 h-3 rounded-full bg-sky-500'></span>
                </span>
            </span>
        </div>

        </>
    )
}
