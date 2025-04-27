import {useState} from 'react';
import {motion} from "motion/react"


function Sidebar() {

  return (
    <div className=" w-fit p-6 flex flex-col mt-[260px]">
    <div>
    <motion.div
      animate={{
        y: -100,
        opacity: [0,1,1,1,1,0],
      }}
      transition={{
        duration: 6,
      }}
      initial={{
        y:100
      }}
      className='flex absolute' 
    >
      <div className="w-[450px] bg-gray-700 rounded-md p-4 h-20">
        <h3 className="text-sm font-semibold mb-1">Asking ChatGPT</h3>
        <p className="text-xs text-gray-400">What does this PowerShell command even mean?</p>
      </div>  
        <img className='relative w-[516px] right-27 top-[-218px]' src="/DarkBlueLine.png" alt="" />
    </motion.div>

    <motion.div
      animate ={{
        y:-100,
        opacity:[0,1,1,1,1,0]
      }}
      initial ={{
        y:-50,
        opacity:0
      }}
      transition={{
        delay:4,
        duration:6,
      }}
      className='flex absolute' 
    >
      <div className="w-[450px] bg-gray-700 rounded-md p-4 h-20">
        <h3 className="text-sm font-semibold mb-1">Asking Supervisor</h3>
        <p className="text-xs text-gray-400">The analyst is learning and needs some help...</p>
      </div>  
        <img className='relative w-[516px] right-27 top-[-218px]' src="/DarkBlueLine.png" alt="" />
    </motion.div>
      

      <motion.div 
        animate ={{
          y:-100,
          opacity:[0,1,1,1,1,0]
        }}
        initial ={{
          y:-50,
          opacity:0
        }}
        transition={{
          delay:8,
          duration:6,
        }}
        className='flex absolute' 
    >
      <div className="w-[450px] bg-gray-700 rounded-md p-4 h-20">
        <h3 className="text-sm font-semibold mb-1">Oops!</h3>
        <p className="text-xs text-gray-400">Mistook this one as a false positive. You are just a human...</p>
      </div>  
        <img className='relative w-[516px] right-27 top-[-218px]' src="/DarkBlueLine.png" alt="" />
      </motion.div>

       <motion.div 
        animate ={{
          y:-80,
          opacity:[0,1,1,1,1,0]
        }}
        initial ={{
          y:-50,
          opacity:0
        }}
        transition={{
          delay:12,
          duration:5,
        }}
        className='flex absolute' >
      <div className="w-[450px] bg-gray-700 rounded-md p-4 h-20">
        <h3 className="text-sm font-semibold mb-1">Missed it!</h3>
        <p className="text-xs text-gray-400">We have more alerts than time to triage them...</p>
      </div>  
        <img className='relative w-[516px] right-27 top-[-218px]' src="/DarkBlueLine.png" alt="" />
      </motion.div>

      <motion.div 
        animate ={{
          y:-80,
          opacity:[0,1,1,1,1,1]
        }}
        initial ={{
          y:-50,
          opacity:0
        }}
        transition={{
          delay:15,
          duration:6,
        }}
        className='flex absolute' >
      <div className="w-[450px] bg-gray-700 rounded-md p-4 h-20">
        <h3 className="text-sm font-semibold mb-1">Waiting for analyst</h3>
        <p className="text-xs text-gray-400">Analyst is dealing with other problems, hold on</p>
      </div>  
        <img className='relative w-[516px] right-27 top-[-218px]' src="/DarkBlueLine.png" alt="" />
      </motion.div>

      </div>

      <div className=" mt-[110px] flex flex-col space-y-4">
        <div
        className="bg-red-700 bg-opacity-50 rounded-md p-4 w-[350px]">
          <div className="flex items-center mb-1">
            <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 2h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <h3 className="text-sm font-semibold">Wasting valuable analyst time on false positives</h3>
          </div>
        </div>
        <div className="bg-yellow-700 bg-opacity-50 rounded-md p-4 w-[350px]">
          <div className="flex items-center mb-1">
            <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <h3 className="text-sm font-semibold">Processing one alert at a time, missing the big picture</h3>
          </div>
        </div>
        <div className="bg-blue-700 bg-opacity-50 rounded-md p-4 w-[350px]">
          <div className="flex items-center mb-1">
          <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l-7-7m0 0l7-7m-7 7h18m-15.9-2.558a8 8 0 1115.9 0m-15.9 0l-3.332 3.332c-.8.8-2.1 1.333-3.464 1.333h3.464m-3.464-1.333l3.332-3.332m0 0l6.664 6.664m-6.664-6.664l-3.332-3.332c-.8-.8-2.1-1.333-3.464-1.333h3.464m-3.464 1.333l3.332 3.332m0 0l6.664-6.664" /></svg>
            <h3 className="text-sm font-semibold">More time fixing SOAR automation, less time on real threats</h3>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Sidebar;