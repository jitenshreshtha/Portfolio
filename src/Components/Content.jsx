import React from 'react';
import pp from './pp.jpg'

function Content() {
  return (
    <div className='flex justify-between items-center h-screen pb-32'>
        <div className='ml-20'>
            <p className='font-extrabold text-2xl'>Hi, I am Jiten</p>
            <p className='text-slate-600 text-xl'>Computer Engineer & Web Developer</p>
            <p className='text-slate-500 mr-24'>Completed Bachelors in Computer Engineering. Experienced web designer & developer.Proven ability to build high performance, secure, data driven web apps with quality code.</p>

            <button className=' p-3 bg-yellow-400 border-0 rounded-2xl mt-5 hover:bg-yellow-700 hover:text-white'>Contact me</button>
        </div>
        <div className='w-full'> 
            <img src={pp} alt="profile picture" className='border rounded-[500px] h-48 object-cover ml-28'/>
        </div>
    </div>
  )
}

export default Content