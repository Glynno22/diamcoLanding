import React from 'react'
import { useState, useEffect } from 'react';

export default function Repere() {
    const [width, setWidth] = useState(window.innerWidth);
     useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);


  return (
    <div className='absolute h-full top-0 w-full justify-around grid grid-cols-2  sm:grid-cols-4  md:grid-cols-6  lg:grid-cols-10  xl:grid-cols-12 gap-[20px] px-[80px]  -z-10'>
   
       
        <div className="bg-red-100 opacity-40 flex items-center justify-center min-w-[80px]">{width}</div>
        <div className="bg-red-100 opacity-40 flex items-center justify-center min-w-[80px]">{width/12}</div>
        {width >= 640 && <div className="bg-red-100 opacity-40 flex items-center justify-center min-w-[80px]">{width/12}</div>}
        {width >= 640 && <div className="bg-red-100 opacity-40 flex items-center justify-center min-w-[80px]">{width/12}</div>}
        {width >= 768 && <div className="bg-red-100 opacity-40 flex items-center justify-center min-w-[80px]">{width/12}</div>}
        {width >= 768 && <div className="bg-red-100 opacity-40 flex items-center justify-center min-w-[80px]">{width/12}</div>}
        {width >= 1024 && <div className="bg-red-100 opacity-40 flex items-center justify-center min-w-[80px]">{width/12}</div>}
        {width >= 1024 && <div className="bg-red-100 opacity-40 flex items-center justify-center min-w-[80px]">{width/12}</div>}
        {width >= 1024 && <div className="bg-red-100 opacity-40 flex items-center justify-center min-w-[80px]">{width/12}</div>}
        {width >= 1024 && <div className="bg-red-100 opacity-40 flex items-center justify-center min-w-[80px]">{width/12}</div>}
        {width >= 1280 && <div className="bg-red-100 opacity-40 flex items-center justify-center min-w-[80px]">{width/12}</div>}
        {width >= 1280 && <div className="bg-red-100 opacity-40 flex items-center justify-center min-w-[80px]">{width/12}</div>}
        
        
    </div>
  )
}
