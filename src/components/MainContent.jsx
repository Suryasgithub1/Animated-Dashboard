import {useState, useEffect} from 'react';
import {motion} from "motion/react"


function MainContent() {

  const [isRed, setIsRed] = useState(false);
  const [alertNumber, setAlertNumber] = useState(0);

  useEffect(() => {
    let intervalTimer;

    const incrementAlertNumber = () => {
      setAlertNumber(prevAlertNumber => {
        const newValue = prevAlertNumber + 1;
        if (newValue >= 3) {
          clearInterval(intervalTimer); // Clear the interval when target is reached
        }
        return newValue;
      });
    };

    intervalTimer = setInterval(incrementAlertNumber, 2000);

    return () => clearInterval(intervalTimer); // Cleanup on unmount
  }, []);
  
  function RepeatingRedBorderAnimation(){
    setIsRed(!isRed)
  }

    useEffect(() => {
      const intervalId = setInterval(() => {
        RepeatingRedBorderAnimation()
      }, 2000); 
      return () => clearInterval(intervalId);
    }, [isRed]); 
  
  return (
    <main className="flex-1 p-4 relative">
      <div className=" mx-auto">
        <motion.div 
        animate ={{
          y:0
        }}
        initial={{
          y:150
        }}
        transition={{
          
          duration:4
        }}
        className="mb-4 absolute right-8 justify-items-end">
          <h2 className="text-4xl font-semibold text-blue-700">Without Simbian</h2>
          <p className=" text-sm text-blue-700">If this sounds all too familiar, you might want to...</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-4xl focus:outline-none focus:shadow-outline mt-4">Book a Demo</button>
        </motion.div>

        <div className= "flex flex-col ">
          <div className="bg-blue-300/60 rounded-lg shadow-md p-6 w-fit mb-3 mt-34">
            <div className="w-75 flex items-center">
              <svg className="w-6 h-6 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-6-6C6.91 5 5 6.91 5 9v2.158a2.032 2.032 0 01-1.405 1.405L5 17h5m5 0v2m0-2v-2" /></svg>
              <h3 className="text-lg font-semibold text-white">Ignored Alerts</h3>
              <div className="text-3xl font-bold text-blue-500 ml-3 ">193</div>    
          <div>
        </div>
        </div>    
        
        <div className="mt-2 flex items-center space-y-2 bg-blue-800/20 rounded-xl px-2 pt-2">
        <div className="bg-white rounded-xl p-2 cursor-pointer hover:bg-blue-800/20">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
        </div>
        <div className="bg-white rounded-xl p-2 cursor-pointer hover:bg-blue-800/20">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-6-6C6.91 5 5 6.91 5 9v2.158a2.032 2.032 0 01-1.405 1.405L5 17h5m5 0v2m0-2v-2" /></svg>
        </div>
        <div className="bg-white rounded-xl p-2 cursor-pointer hover:bg-blue-800/20">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0-16V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2zM15 19v-6a2 2 0 00-2-2H13a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0-16V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2z" /></svg>
        </div>
        <div className="bg-white rounded-xl p-2 cursor-pointer hover:bg-blue-800/20">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1c-1.657 0-3-1.343-3-3s1.343-3 3-3h.097a3 3 0 00.5 0m5 3a3 3 0 00-3-3H5a3 3 0 00-3 3v11a3 3 0 003 3h12a3 3 0 003-3v-3.21a1 1 0 00-.15-.664l-1.562-4.686a1 1 0 00-.64-.327l-2.062-.516z" /></svg>
        </div>
        <div className="bg-white rounded-xl p-2 cursor-pointer hover:bg-blue-800/20">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-6-6C6.91 5 5 6.91 5 9v2.158a2.032 2.032 0 01-1.405 1.405L5 17h5m5 0v2m0-2v-2" /></svg>
        </div>
        <div className="bg-white rounded-xl p-2 cursor-pointer hover:bg-blue-800/20">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0-16V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2zM15 19v-6a2 2 0 00-2-2H13a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0-16V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2z" /></svg>
        </div>
        <motion.div 
          animate = {{
            y:305,
            x:-240
          }}

          transition = {{
            duration: 1.5,
            delay:4
          }}

        className="bg-white rounded-xl p-2 cursor-pointer hover:bg-blue-800/20">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l1.414 1.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7l3-3m16 4v5a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l1.414 1.414a1 1 0 01.293.707V9l-2 2m4-2v-1m6 4h.01M21 12a1 1 0 00-1-1h-4a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4zm-4-3v1m4-1v1m-5 1v1m-12 7H3m2.391-6.778a2 2 0 00-.424-.177l-1.675-.417m-1.675.417c-.228.057-.451.17-.678.333A1.916 1.916 0 002.5 10.5m1.675-4.167c.228-.057.451-.17.678-.333a1.916 1.916 0 001.675-.417m-1.675.417l1.675.417m3.773-1.94a2.009 2.009 0 00-1.424-.724l-4.023.805m-4.023-.805a2.009 2.009 0 001.424.724l4.023-.805m4.023.805c.228.057.451.17.678.333a1.916 1.916 0 001.675.417m-1.675-.417l-1.675-.417" /></svg>
        </motion.div>
      </div>
          </div>

          <div className="bg-blue-300/60 rounded-lg shadow-md p-6 w-fit mb-3">
            <div className=" w-75 flex items-center ">
              <svg className="w-6 h-6 text-yellow-500 mr-2" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
              <h3 className="text-lg font-semibold text-white">Wrongly Closed</h3>
              <div className="text-3xl font-bold text-blue-500 ml-3">23</div>
            </div>
            
        <div>
        <div className="mt-2 flex items-center space-y-2 bg-blue-800/20 rounded-xl px-2 pt-2">
        <div className="bg-white rounded-xl p-2 cursor-pointer hover:bg-blue-800/20">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
        </div>
        <div className="bg-white rounded-xl p-2 cursor-pointer hover:bg-blue-800/20">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-6-6C6.91 5 5 6.91 5 9v2.158a2.032 2.032 0 01-1.405 1.405L5 17h5m5 0v2m0-2v-2" /></svg>
        </div>
        <div className="bg-white rounded-xl p-2 cursor-pointer hover:bg-blue-800/20">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0-16V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2zM15 19v-6a2 2 0 00-2-2H13a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0-16V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2z" /></svg>
        </div>
        <div className="bg-white rounded-xl p-2 cursor-pointer hover:bg-blue-800/20">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1c-1.657 0-3-1.343-3-3s1.343-3 3-3h.097a3 3 0 00.5 0m5 3a3 3 0 00-3-3H5a3 3 0 00-3 3v11a3 3 0 003 3h12a3 3 0 003-3v-3.21a1 1 0 00-.15-.664l-1.562-4.686a1 1 0 00-.64-.327l-2.062-.516z" /></svg>
        </div>
        <div className="bg-white rounded-xl p-2 cursor-pointer hover:bg-blue-800/20">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
        </div>
        <motion.div 
          animate={{
             x:[0, -197, -187, -177],
             y:154
          }}
          transition={{
            delay:3,
            duration:2,
            times: [0, 0.85, 0.95,1]
          }}
          className="bg-white rounded-xl p-2 cursor-pointer hover:bg-blue-800/20 mt-[-9px]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>        </motion.div>
        <motion.div 
          animate={{
            x:[0, -240, -220, -190],
            y:150
          }}
          transition={{
            duration:3,
            delay:1,
            times: [0, 0.85, 0.95, 1]
          }}
          className="bg-white rounded-xl p-2 cursor-pointer hover:bg-blue-800/20 mt-[-9px]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1c-1.657 0-3-1.343-3-3s1.343-3 3-3h.097a3 3 0 00.5 0m5 3a3 3 0 00-3-3H5a3 3 0 00-3 3v11a3 3 0 003 3h12a3 3 0 003-3v-3.21a1 1 0 00-.15-.664l-1.562-4.686a1 1 0 00-.64-.327l-2.062-.516z" /></svg>        </motion.div>
      </div>
    </div>
          </div>

          <motion.div 

          animate={{
            backgroundColor: isRed ? '#A31F34' : '#A8D0FA',
            color:isRed ? 'red' : 'white',
            stroke:isRed ? 'red' : 'white',
            borderWidth: isRed ? '2px' : '0px',
          }}
          transition={{ duration: 2 }}
          
          className="bg-blue-200/25 rounded-lg shadow-md p-6 w-fit mb-3">
            <div className=" w-75 flex items-center ">
              <svg className="w-6 h-6 text-red-500 mr-2" fill="none"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h3 className="text-lg font-semibold ">Active Threats</h3>
              <div className="text-3xl font-bold ml-3">{alertNumber}</div>
            </div>
            <div className="mt-auto flex items-center space-y-2 bg-white/20 rounded-xl px-2">
              <motion.div animate={{opacity:0}}className="bg-white rounded-xl mt-2 p-2 cursor-pointer hover:bg-blue-800/20">
                <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;