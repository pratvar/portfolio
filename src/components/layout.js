import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <nav className='relative w-full shadow-lg z-10'>
          <ul className='flex max-w-screen-2xl w-full mx-auto justify-center md:justify-end gap-4 px-8 py-4 md:px-16 md:py-6 sm:text-lg text-gray-700'>
            <li><a href="#" className='hover:bg-gray-100 active:bg-gray-200 rounded-lg px-3 py-2 transition-all duration-100 bg-gray-100'>About</a></li>
            <li><a href="#" className='hover:bg-gray-100 active:bg-gray-200 rounded-lg px-3 py-2 transition-all duration-100 '>Projects</a></li>
            <li><a href="#" className='hover:bg-gray-100 active:bg-gray-200 rounded-lg px-3 py-2 transition-all duration-100 '>Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main>{children}</main>

      <footer></footer>
    </>
  )
}

export default Layout;