import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import favicon from '../images/favicon.svg'

const Layout = ({ location, description, children }) => {
  let title, url;
  switch (location) {
    case 'about': title = 'Pratik Var | Front-End Developer'; break;
    case 'projects': title = 'Projects | Pratik Var'; break;
    case 'contact': title = 'Contact | Pratik Var'; break;
    default: title = 'Pratik Var';
  }
  if (location === 'about') {
    title = 'Pratik Var | Front-End Developer'
    url = 'https://pratvar.com'
  } else if (location === 'projects') {
    title = 'Projects | Pratik Var'
    url = 'https://pratvar.com/projects'
  } else if (location === 'contact') {
    title = 'Contact | Pratik Var'
    url = 'https://pratvar.com/contact'
  }

  let image = 'https://pratvar.com/images/profile.jpg'

  return (
    <div className='flex flex-col min-h-screen'>
      <Helmet title={title}>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        <script src="https://kit.fontawesome.com/775cd725b8.js" crossOrigin="anonymous"></script>
        <meta property="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        {description && <meta property="og:description" content={description} />}
        <meta property="og:image" content={image} />

        <meta property="twitter:creator" content="@pratvar" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        {description && <meta property="twitter:description" content={description} />}
        <meta property="og:image" content={image} />

      </Helmet>
      <nav className='bg-white bg-opacity-70 fixed w-full z-50 shadow-md select-none' style={{ backdropFilter: 'saturate(180%) blur(20px)' }}>
        <ul className='flex max-w-screen-2xl w-full mx-auto justify-center md:justify-end gap-3 px-8 py-4 md:px-16 sm:text-lg'>
          <li><Link to="/" className={`px-3.5 py-2 rounded-full transition-all duration-100 ${location === 'about' ? 'font-bold' : 'hover:bg-blue-600 hover:shadow-md hover:text-white active:bg-blue-800'}`}>About</Link></li>
          <li><Link to="/projects" className={`px-3.5 py-2 rounded-full transition-all duration-100 ${location === 'projects' ? 'font-bold' : 'hover:bg-blue-600 hover:shadow-md hover:text-white active:bg-blue-800'}`}>Projects</Link></li>
          <li><Link to="/contact" className={`px-3.5 py-2 rounded-full transition-all duration-100 ${location === 'contact' ? 'font-bold' : 'hover:bg-blue-600 hover:shadow-md hover:text-white active:bg-blue-800'}`}>Contact</Link></li>
        </ul>
      </nav>

      <main className='pt-14 flex-grow w-full flex flex-col'>{children}</main>

      <footer className='px-6 py-8 sm:px-8 sm:py-16 md:px-14 bg-gray-50'>
        <div className='flex flex-col-reverse items-center gap-6 sm:flex-row justify-between max-w-screen-xl mx-auto'>
          <p className='text-gray-700'>© 2021 Pratik Var</p>
          <p className='font-semibold'>Designed and coded by Pratik.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout