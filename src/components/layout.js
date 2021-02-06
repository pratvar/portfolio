import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <header className='bg-white'>
        <nav className='relative w-full shadow-md'>
          <ul className='flex max-w-screen-2xl w-full mx-auto justify-center md:justify-end gap-3 px-8 py-4 md:px-16 md:py-6 sm:text-lg'>
            <li><a href="#" className={`px-3.5 py-2 rounded-full hover:bg-blue-500 hover:shadow-md hover:text-white active:bg-blue-800 transition-all duration-100 ${true ? 'font-semibold' : ''}`}>About</a></li>
            <li><a href="#" className={`px-3.5 py-2 rounded-full hover:bg-blue-500 hover:shadow-md hover:text-white active:bg-blue-800 transition-all duration-100`}>Projects</a></li>
            <li><a href="#" className={`px-3.5 py-2 rounded-full hover:bg-blue-500 hover:shadow-md hover:text-white active:bg-blue-800 transition-all duration-100`}>Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main>{children}</main>

      <footer></footer>
    </>
  )
}

export default Layout;