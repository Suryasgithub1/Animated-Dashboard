import React from 'react'
import RotatingLoadingSVG from "./RotatingSVG"

const MiddleBarWithApp = () => {
  return (
    <div className='mt-21 flex flex-col'>
    <div>
        <div className="mt-auto flex flex-col items-center space-y-2">
        <div className="bg-gray-700 rounded-full p-2 cursor-pointer hover:bg-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
        </div>
        <div className="bg-gray-700 rounded-full p-2 cursor-pointer hover:bg-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-6-6C6.91 5 5 6.91 5 9v2.158a2.032 2.032 0 01-1.405 1.405L5 17h5m5 0v2m0-2v-2" /></svg>
        </div>
        <div className="bg-gray-700 rounded-full p-2 cursor-pointer hover:bg-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0-16V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2zM15 19v-6a2 2 0 00-2-2H13a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0-16V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2z" /></svg>
        </div>
        <div className="bg-gray-700 rounded-full p-2 cursor-pointer hover:bg-gray-600 ">
          <RotatingLoadingSVG />
        </div>
      </div>
    </div>
    <div className=' mt-13 h-[300px] flex justify-center items-center mb-20'>
      <img
        src="/ArrowDown.png"
        alt="Down Arrow"
      />
    </div>
    </div>
  )
}

export default MiddleBarWithApp