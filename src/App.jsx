import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './index.css'; 
import MiddleBar from './components/MiddleBar.jsx';
import MainContentWithApp from "./components/MainContentWithApp.jsx"
import SidebarWithApp from './components/SideBarWithApp.jsx';
import MiddleBarWithApp from "./components/MiddleBarWithApp.jsx"

function App() {
  const [showOtherScreen, setShowOtherScreen] = useState(false);
  const [showAnimationScreen] = useState(true);

  useEffect (()=> {
    setTimeout (() => {
      setShowOtherScreen(true)
    }, 20000)
  }, [])

  return (
    <>
      {!showOtherScreen ? (
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/749564/pexels-photo-749564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]    bg-cover bg-center opacity-30 z-[-1]">
          </div>
          <div className=" mt-1 absolute w-fit text-white font-sans min-h right-0 mr-4">
            <Header />
          </div>
          <div className='mt-25 grid grid-cols-5'>
            <div className='col-span-2' ><Sidebar /></div>
            <div className='col-span-1 ' ><MiddleBar /></div>
            <div className='col-span-2' ><MainContent /></div>
          </div>
        </div>
      ) : (
        (!showAnimationScreen ? "Showing Animation" : 
          <div className="relative w-full overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/749564/pexels-photo-749564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]    bg-cover bg-center opacity-70 z-[-1]">
          </div>
          <div className=" mt-1 absolute w-fit text-white font-sans min-h right-0 mr-4">
            <Header />
          </div>
          <div className='mt-25 grid grid-cols-5'>
            <div className='col-span-2' ><SidebarWithApp /></div>
            <div className='col-span-1 ' ><MiddleBarWithApp /></div>
            <div className='col-span-2' ><MainContentWithApp /></div>
          </div>
        </div>
        )
      )}
    </>
    
    
  );
}

export default App;