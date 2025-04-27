import React from 'react';

function Header() {
  return (
    <header className="bg-black p-2 flex items-center justify-between shadow-md rounded-2xl ">
      <div className="flex items-center">
        <img src="https://web.dev/static/articles/building/an-adaptive-favicon/image/example-dark-theme-favico-6a6f6f67bc3e7.png" alt=" Logo" className="h-8 mr-2" /> 
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300">Products</a>
          <a href="#" className="hover:text-gray-300">Company</a>
          <a href="#" className="hover:text-gray-300">Resources</a>
          <a href="#" className="hover:text-gray-300">Blog</a>
        </nav>
        <div className='ml-8 flex rounded-2xl bg-gray-800 p-2'>
            <button className="hidden md:block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Book a Demo</button>
            <img className="h-8 ml-4 mr-2" src="https://web.dev/static/articles/building/an-adaptive-favicon/image/example-dark-theme-favico-6a6f6f67bc3e7.png" alt=" Logo"  />
        </div>
      </div>
    </header>
  );
}

export default Header;