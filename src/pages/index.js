import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import favicon from '../images/favicon.svg'
import profile from '../images/profile.png'

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
        <script src="https://kit.fontawesome.com/775cd725b8.js" crossOrigin="anonymous"></script>
        <title>Pratik Var | Front-End Developer</title>
      </Helmet>
      <Layout>
        <section id='hero' className='w-full px-8 py-16 bg-gradient-to-br from-purple-50 to-blue-50 z-0'>
          <div className="flex flex-col items-center md:flex-row max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-screen-md px-6 lg:px-10 md:gap-6 lg:gap-10 mx-auto md:my-36 rounded-3xl shadow-xl bg-white">
            <div className='flex flex-col gap-6 items-center transform -translate-y-6 w-max'>
              <img src={profile} alt="Profile Photo" className='w-40 sm:w-48 md:w-72 lg:w-80' />
            </div>
            <div className="flex flex-col mb-8 md:mb-0 md:py-8 items-center md:items-start text-center md:text-left">
              <p className='text-gray-800'>Hi, I'm</p>
              <h1 className='font-semibold'>Pratik Var</h1>
              <h3 className='text-gray-800'>a front-end developer</h3>
              <p className='py-6 text-gray-500'>
                I design and build websites with beautiful and responsive UIs.
              </p>
              <ul className='flex gap-2'>
                <li>
                  <a className='group flex items-center p-2 rounded-full border text-gray-700 hover:bg-gray-50 hover:shadow transition-all duration-100 active:bg-gray-100' href="https://github.com/pratvar" target='_blank' rel='noreferrer'>
                  <i class="fab fa-github text-2xl"></i></a>
                </li>
                <li>
                  <a className='group flex items-center p-2 rounded-full border text-blue-400 hover:bg-gray-50 hover:shadow transition-all duration-100 active:bg-gray-100' href="https://twitter.com/pratvar" target='_blank' rel='noreferrer'>
                  <i class="fab fa-twitter text-2xl"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default IndexPage
