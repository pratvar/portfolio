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

      <footer className=' px-6 py-8 sm:px-8 sm:py-16 md:px-14 bg-gray-50'>
        <div className='flex flex-col-reverse items-center gap-6 sm:flex-row justify-between max-w-screen-xl mx-auto'>
          <p className='text-gray-500'>© 2021 Pratik Var</p>
          <p className='font-semibold'>Designed and coded by Pratik.</p>
        </div>
      </footer>
    </>
  )
}

export default Layout;