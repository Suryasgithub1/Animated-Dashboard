import {motion} from "motion/react"


function SidebarWithApp() {

  return (
    <motion.div 

    animate={{
      x:950,
      opacity:[1,0,0,1]
    }}
    
    transition={{
      delay:1,
      duration:2,
      times: [0, 0.2, 0.99, 1],
    }}
    
    className=" p-6 flex flex-col mt-[190px]">
    <div>
      <motion.div 
        initial={{
          y:800
        }}
        animate ={{
          y:-10,
          opacity:[1]
        }}
        transition={{
          delay:0.5,
          duration:6,
          //times:[0,0.99,1]
        }}
        className='flex absolute' >
      <div className="w-[720px] bg-blue-200/40 rounded-md p-4 h-20 z-100 justify-center ">
      <div className='flex items-center'>
        <div className=" items-center">
        <svg className="mr-4" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="8" stroke="green" strokeWidth="2" fill="none"/>
          <path d="M6 10 L 10 14 L 14 6" stroke="green" strokeWidth="2" fill="none"/>
        </svg>
        </div>
        <div >
          <h3 className="text-sm text-white font-semibold mb-1">Triaged & Reported</h3>
          <p className="text-xs text-white ">The SOC Agent handled investigation and reporting.</p>
        </div>
      </div>  
      </div>
        <div>
          <img className='relative w-[420px] left-[-665px] top-[-90px] z-0 ' src="ArrowLeft.png" alt="" />
        </div>
    </motion.div>
      </div>

      <div className=" mt-[160px] flex flex-col space-y-4">
        <div className="bg-blue-200/40 rounded-md p-4 w-[350px] flex">
          <div className="flex items-center mb-1">
            <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 2h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          </div>
          <div className='ml-2'>
            <h3 className="text-sm font-semibold text-white">Less noise</h3>
            <p className="text-xs text-white">90% of alerts resolved automatically, 24/7</p>
          </div>
        </div>
        <div className="bg-blue-200/40 bg-opacity-50 rounded-md p-4 w-[350px] flex">
          <div className=" flex items-center mb-1">
            <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="green" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div className='ml-2'>
          <h3 className="text-sm  text-white font-semibold">Holistic insight</h3>
          <p className="text-xs text-white">Correlate alerts and your environment into the big picture</p>
          </div>
          
        </div>
        <div className="bg-blue-200/40 bg-opacity-50 rounded-md p-4 w-[350px] flex">
          <div className="flex  text-white items-center mb-1">
          <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="green" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l-7-7m0 0l7-7m-7 7h18m-15.9-2.558a8 8 0 1115.9 0m-15.9 0l-3.332 3.332c-.8.8-2.1 1.333-3.464 1.333h3.464m-3.464-1.333l3.332-3.332m0 0l6.664 6.664m-6.664-6.664l-3.332-3.332c-.8-.8-2.1-1.333-3.464-1.333h3.464m-3.464 1.333l3.332 3.332m0 0l6.664-6.664" /></svg>
          </div>
          <div className='ml-2'>
          <h3 className="text-sm text-white font-semibold">Adapts automatically</h3>
          <p className="text-xs text-white ">No SOAR needed. Investigate every alert, including new ones, with best of Simbian's knowledge and yours.</p>
          </div>
        </div>
      </div> 
    </motion.div>
  );
}

export default SidebarWithApp;