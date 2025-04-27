import { useState, useEffect } from 'react';
import { motion, animate } from "framer-motion";



function MainContent() {

  const [title, setTitle] = useState(false);
  const [alertNumber, setAlertNumber] = useState(3);
  const [count] = useState(23);
  const [animatedCount, setAnimatedCount] = useState(23);
  const [count1] = useState(193);
  const [animatedCount1, setAnimatedCount1] = useState();

  useEffect(() => {
      animate(count, 0, { 
      duration: 3,
      delay:4, 
      onUpdate: (value) => {
        setAnimatedCount(Math.floor(value)); 
      },
    });
  }, [count]);


  useEffect(() => {
    animate(count1, 0, { 
    duration: 3,
    delay:4, 
    onUpdate: (value) => {
      setAnimatedCount1(Math.floor(value)); 
    },
  });
}, [count]);


  useEffect ( () => {
    setTimeout(() => {
      setTitle(true);
    }, 3500)
  }, [])

  useEffect(() => {
    let intervalTimer;

    const decrementAlertNumber = () => {
      setAlertNumber(prevAlertNumber => {
        const newValue = prevAlertNumber - 1;
        if (newValue <= 0) {
          clearInterval(intervalTimer); 
        }
        return newValue;
      });
    };

    intervalTimer = setInterval(decrementAlertNumber, 2000);

    return () => clearInterval(intervalTimer); 
  }, []);
    
  return (
    <motion.div 
    
    animate = {{
      x: -950
    }}

    transition={{
      delay:1,
      duration:2
    }}

    className="flex-1 p-4">
      <div className=" mx-auto">
        
        {title ? (
            <div className=" mt-1 left-8">
              <h2 className="text-4xl font-semibold text-left text-white">With Simbian</h2>
              <p className="text-gray-400 text-sm text-left text-white" >Relax our AI agents will handle </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-4xl focus:outline-none focus:shadow-outline mt-4">Book a Demo</button>
            </div>
          ) : (
          
            <div className=" right-8 justify-items-end">
              <h2 className="text-4xl font-semibold">Without Simbian</h2>
              <p className="text-gray-400 text-sm">If this sounds all too familiar, you might want to...</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-4xl focus:outline-none focus:shadow-outline mt-4">Book a Demo</button>
            </div>
          )}
       
        <div className= "flex flex-col">
          <div className="  bg-blue-200/25 rounded-lg shadow-md p-6 w-fit mb-3 mt-4">
            <div className=" w-75 flex items-center ">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-6-6C6.91 5 5 6.91 5 9v2.158a2.032 2.032 0 01-1.405 1.405L5 17h5m5 0v2m0-2v-2" /></svg>
              <h3 className="text-lg  text-white font-semibold ">Ignored Alerts</h3>
              <div className="text-3xl font-bold text-green-500 ml-3 ">{animatedCount1}</div>
            </div>
            
            
            <div className="mt-2 flex items-center space-y-2 bg-blue-200/40 rounded-xl px-2 pt-2">
            <motion.div 
              animate={{
                opacity:0
              }}
              transition={{
                delay:6,
                duration:1
              }}
              className="bg-white rounded-xl p-2 cursor-pointer hover:bg-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
            </motion.div>
            <motion.div 
              animate={{
                opacity:0
              }}
              transition={{
                delay:5,
                duration:1
              }}
               className="bg-white rounded-xl p-2 cursor-pointer hover:bg-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-6-6C6.91 5 5 6.91 5 9v2.158a2.032 2.032 0 01-1.405 1.405L5 17h5m5 0v2m0-2v-2" /></svg>
            </motion.div>
            <motion.div 
              animate={{
                opacity:0
              }}
              transition={{
                delay:4,
                duration:1
              }}
            className="bg-white rounded-xl p-2 cursor-pointer hover:bg-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0-16V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2zM15 19v-6a2 2 0 00-2-2H13a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0-16V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2z" /></svg>
            </motion.div>
            <motion.div 
              animate={{
                opacity:0
              }}
              transition={{
                delay:3,
                duration:1
              }}
              className="bg-white rounded-xl p-2 cursor-pointer hover:bg-gray-600 mt-[-8px]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1c-1.657 0-3-1.343-3-3s1.343-3 3-3h.097a3 3 0 00.5 0m5 3a3 3 0 00-3-3H5a3 3 0 00-3 3v11a3 3 0 003 3h12a3 3 0 003-3v-3.21a1 1 0 00-.15-.664l-1.562-4.686a1 1 0 00-.64-.327l-2.062-.516z" /></svg>
            </motion.div>
          </div>
          </div>

          <div className=" bg-blue-200/25 rounded-lg shadow-md p-6 w-fit mb-3">
            <div className=" w-75 flex items-center ">
              <svg className="w-6 h-6 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
              <h3 className="text-lg font-semibold text-white ">Wrongly Closed</h3>
              <motion.div
                className="text-3xl font-bold text-green-500 ml-3">
                 {animatedCount} 
              </motion.div>
            </div>

            <div>
            <div className="mt-2 flex items-center space-y-2 bg-blue-200/40 rounded-xl px-2 pt-2">
            <motion.div 
              animate={{
                opacity:0
              }}
              transition={{
                delay:6,
                duration:1
              }}
              className="bg-white rounded-xl p-2 cursor-pointer hover:bg-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
            </motion.div>
            <motion.div 
              animate={{
                opacity:0
              }}
              transition={{
                delay:5,
                duration:1
              }}
               className="bg-white rounded-xl p-2 cursor-pointer hover:bg-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-6-6C6.91 5 5 6.91 5 9v2.158a2.032 2.032 0 01-1.405 1.405L5 17h5m5 0v2m0-2v-2" /></svg>
            </motion.div>
            <motion.div 
              animate={{
                opacity:0
              }}
              transition={{
                delay:4,
                duration:1
              }}
            className="bg-white rounded-xl p-2 cursor-pointer hover:bg-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0-16V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2zM15 19v-6a2 2 0 00-2-2H13a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0-16V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2z" /></svg>
            </motion.div>
            <motion.div 
              animate={{
                opacity:0
              }}
              transition={{
                delay:3.5,
                duration:1
              }}
              className="bg-white rounded-xl p-2 cursor-pointer hover:bg-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1c-1.657 0-3-1.343-3-3s1.343-3 3-3h.097a3 3 0 00.5 0m5 3a3 3 0 00-3-3H5a3 3 0 00-3 3v11a3 3 0 003 3h12a3 3 0 003-3v-3.21a1 1 0 00-.15-.664l-1.562-4.686a1 1 0 00-.64-.327l-2.062-.516z" /></svg>
            </motion.div>
            <motion.div 
              animate={{
                opacity:0
              }}
              transition={{
                delay:3,
                duration:1
              }}
              className="bg-white rounded-xl p-2 cursor-pointer hover:bg-gray-600 mt-[-8px]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1c-1.657 0-3-1.343-3-3s1.343-3 3-3h.097a3 3 0 00.5 0m5 3a3 3 0 00-3-3H5a3 3 0 00-3 3v11a3 3 0 003 3h12a3 3 0 003-3v-3.21a1 1 0 00-.15-.664l-1.562-4.686a1 1 0 00-.64-.327l-2.062-.516z" /></svg>
            </motion.div>
          </div>
          </div>
          </div>

          <div className=" bg-blue-200/25 rounded-lg shadow-md p-6 w-fit mb-3">
            <div className="flex items-center ">
              <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h3 className="text-lg font-semibold text-white">Active Threats</h3>
              <div className="text-3xl font-bold text-green-500 ml-3">{alertNumber}</div>
            </div>

            <div className=" w-75 mt-auto flex items-center space-y-2 bg-blue-200/40 rounded-xl px-2">
            <motion.div 
              animate={{
                opacity:0
              }}
              transition={{
                delay:6,
                duration:1
              }}
              className="bg-white rounded-xl p-2 cursor-pointer hover:bg-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
            </motion.div>
            <motion.div 
              animate={{
                opacity:0
              }}
              transition={{
                delay:4,
                duration:1
              }}
            className="bg-white rounded-xl p-2 cursor-pointer hover:bg-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0-16V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2zM15 19v-6a2 2 0 00-2-2H13a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0-16V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2z" /></svg>
            </motion.div>
            <motion.div 
              animate={{
                opacity:0
              }}
              transition={{
                delay:3,
                duration:1
              }}
              className="bg-white rounded-xl p-2 cursor-pointer hover:bg-gray-600 mt-[-8px]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1c-1.657 0-3-1.343-3-3s1.343-3 3-3h.097a3 3 0 00.5 0m5 3a3 3 0 00-3-3H5a3 3 0 00-3 3v11a3 3 0 003 3h12a3 3 0 003-3v-3.21a1 1 0 00-.15-.664l-1.562-4.686a1 1 0 00-.64-.327l-2.062-.516z" /></svg>
            </motion.div>

            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default MainContent;