import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

import favicon from '../images/favicon.svg'
import profile from '../images/profile.png'

import react from '../images/icons/react.svg'
import sass from '../images/icons/sass.svg'
import tailwind from '../images/icons/tailwind.svg'
import gatsby from '../images/icons/gatsby.svg'
import bootstrap from '../images/icons/bootstrap.svg'
import jquery from '../images/icons/jquery.svg'
import d3 from '../images/icons/d3.svg'
import materialui from '../images/icons/material-ui.svg'

import figma from '../images/icons/figma.svg'
import vscode from '../images/icons/vscode.svg'
import adobexd from '../images/icons/adobexd.svg'
import photoshop from '../images/icons/photoshop.svg'
import npm from '../images/icons/npm.svg'
import git from '../images/icons/git.svg'
import webpack from '../images/icons/webpack.svg'

import graphql from '../images/icons/graphql.svg'
import mongodb from '../images/icons/mongodb.svg'
import node from '../images/icons/node.svg'
import express from '../images/icons/express.svg'
import chai from '../images/icons/chai.svg'

import html from '../images/icons/html.svg'
import css from '../images/icons/css.svg'
import javascript from '../images/icons/javascript.svg'
import python from '../images/icons/python-icon.svg'
import cpp from '../images/icons/cpp.svg'
import csharp from '../images/icons/csharp.svg'


const IndexPage = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        <script src="https://kit.fontawesome.com/775cd725b8.js" crossOrigin="anonymous"></script>
        <title>Pratik Var | Front-End Developer</title>
      </Helmet>
      <Layout>
        <section id='hero' className='w-full px-4 py-4 md:py-10 bg-transparent bg-gradient-to-br from-purple-50 to-blue-50 bg-fixed bg-no-repeat'>
          <div className="flex flex-col md:flex-row max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-screen-md items-center px-8 lg:px-10 md:gap-8 lg:gap-10 mx-auto my-12 md:my-28 lg:my-36 rounded-3xl shadow-xl bg-white">
            <div className='flex flex-col gap-6 items-center transform -translate-y-5 md:-translate-y-9 w-max h-48 sm:h-60 md:h-auto'>
              <img src={profile} alt="Profile Photo" className='w-40 sm:w-48 md:w-96' />
            </div>
            <div className="flex flex-col mb-8 md:mb-0 md:py-8 items-center md:items-start text-center md:text-left">
              {/* <p className='text-gray-800'>Hi, I'm</p> */}
              <h1 className='md:my-1'>Hi, I'm <span className='font-extrabold'>Pratik Var</span></h1>
              <h3 className='text-gray-800 my-1'>a front-end developer</h3>
              <p className='flex gap-2 items-center text-blueGrey-500 mt-1 text-base lg:text-lg'><i className="fa fa-map-marked-alt"></i>Gurgaon, India</p>
              <p className='py-6 text-gray-500'>
                I design and build websites with beautiful and responsive UIs.
              </p>
              <ul className='flex gap-2'>
                <li>
                  <a href="https://github.com/pratvar" target='_blank' rel='noreferrer'
                    className='h-10 w-10 flex items-center justify-center rounded-full border text-gray-700 hover:bg-gray-50 hover:shadow transition-all duration-100 active:bg-gray-100'>
                    <i className="fab fa-github text-2xl"></i></a>
                </li>
                <li>
                  <a href="https://twitter.com/pratvar" target='_blank' rel='noreferrer'
                    className='h-10 w-10 flex items-center justify-center rounded-full border text-blue-400 hover:bg-gray-50 hover:shadow transition-all duration-100 active:bg-gray-100'>
                    <i className="fab fa-twitter text-xl"></i></a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/pratikvar" target='_blank' rel='noreferrer'
                    className='h-10 w-10 flex items-center justify-center rounded-full border text-blue-700 hover:bg-gray-50 hover:shadow transition-all duration-100 active:bg-gray-100'>
                    <i className="fab fa-linkedin text-2xl"></i></a>
                </li>
                <li>
                  <a href='#' target='_blank' rel='noreferrer'
                    className='h-10 w-10 flex items-center justify-center rounded-full border text-gray-700 hover:bg-gray-50 hover:shadow transition-all duration-100 active:bg-gray-100'>
                    <i className="fa fa-business-time text-lg"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div onClick={() => { document.querySelector('#more').scrollIntoView(true) }} className="group flex flex-col items-center w-max mx-auto cursor-pointer text-blueGrey-600 hover:text-blueGrey-700">
            <p className='my-0.5'>know more</p>
            <i className="fas fa-chevron-down transform group-hover:translate-y-1 transition-all duration-200"></i>
          </div>
        </section>
        <section id='more' className='px-6 py-8 w-full bg-white'>
          <div className='flex flex-col items-center text-center sm:items-start sm:text-left gap-16 md:gap-24 max-w-screen-xl mx-auto my-16 md:my-24'>
            <h3 className='w-max mx-auto'>Here are my skills, and tools that I work with.</h3>
            <div className='flex w-full flex-col sm:flex-row justify-between items-center gap-6 sm:gap-12 lg:gap-16 px-2 sm:px-8 lg:px-16'>
              <div className='max-w-md sm:max-w-xs flex-shrink-0 md:flex-shrink md:max-w-2xl w-full'>
                <h2 className='mb-2 sm:mb-4 lg:mb-6'>I primarily use
                  <span className='text-lightBlue-500'> <i className="fab fa-react mr-1"></i>React</span>,
                  <span className='text-purple-400'> Sass</span> and
                  <span className='text-teal-500'> Tailwind CSS</span>
                </h2>
                <p className='text-gray-500'>and I've also worked with
                  <span className='text-black'> Gatsby</span>, and many libraries including
                  <span className='text-black'> Bootstrap</span>,
                  <span className='text-black'> jQuery</span>,
                  <span className='text-black'> D3</span> and
                  <span className='text-black'> Material-UI</span>.
                </p>
              </div>
              <div className='flex max-w-xs w-full flex-wrap md:flex-shrink-0 justify-evenly items-center gap-6 sm:gap-4 md:gap-5 px-9 py-6 sm:p-6 lg:p-8 bg-gradient-to-br from-green-50 to-lightBlue-50 rounded-xl shadow-inner'>
                <img className='h-8 my-1 md:h-10 md:my-2' src={react} alt="React" />
                <img className='h-8 my-1 md:h-10 md:my-2' src={sass} alt="Sass" />
                <img className='h-8 my-1 md:h-10 md:my-2' src={tailwind} alt="Tailwind" />
                <img className='h-6 my-1 md:h-8 md:my-2' src={gatsby} alt="Gatsby" />
                <img className='h-6 my-1 md:h-8 md:my-2' src={bootstrap} alt="Bootstrap" />
                <img className='h-9 my-1 md:h-11 md:my-2' src={jquery} alt="jQuery" />
                <img className='h-6 my-1 md:h-8 md:my-2' src={d3} alt="D3" />
                <img className='h-6 my-1 md:h-8 md:my-2' src={materialui} alt="Material-UI" />
              </div>
            </div>
            <div className="flex w-full flex-col sm:flex-row-reverse justify-between items-center gap-6 sm:gap-12 lg:gap-16 px-2 sm:px-8 lg:px-16">
              <div className='max-w-md sm:max-w-xs flex-shrink-0 md:flex-shrink md:max-w-2xl w-full'>
                <h2 className="mb-2 sm:mb-4 lg:mb-6">I design in 
                  <span className='text-pink-600'> <i className="fab fa-figma mr-1"></i>Figma</span>, and code in
                  <span className='text-blue-600'> VS Code</span>.
                </h2>
                <p className="text-gray-500">I occasionally use
                  <span className='text-black'> Adobe XD</span> and 
                  <span className='text-black'> Photoshop</span> as well. My dev tools include
                  <span className='text-black'> npm</span>,
                  <span className='text-black'> Git</span> and
                  <span className='text-black'> Webpack</span>.
                </p>
              </div>
              <div className='flex max-w-xs w-full flex-wrap md:flex-shrink-0 justify-evenly items-center gap-6 sm:gap-4 md:gap-5 px-9 py-6 sm:p-4 lg:p-8 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl shadow-inner'>
                <img className='h-6 my-1 md:h-8 md:my-2' src={figma} alt="Figma"/>
                <img className='h-6 my-1 md:h-8 md:my-2' src={vscode} alt="VS Code"/>
                <img className='h-7 my-1 md:h-9 md:my-2' src={adobexd} alt="Adobe XD"/>
                <img className='h-7 my-1 md:h-9 md:my-2' src={photoshop} alt="Photoshop"/>
                <img className='h-6 my-1 md:h-8 md:my-2' src={npm} alt="npm"/>
                <img className='h-7 my-1 md:h-9 md:my-2' src={git} alt="Git"/>
                <img className='h-9 my-1 md:h-11 md:my-2' src={webpack} alt="Webpack"/>
              </div>
            </div>
            <div className='flex w-full flex-col sm:flex-row justify-between items-center gap-6 sm:gap-12 lg:gap-16 px-2 sm:px-8 lg:px-16'>
              <div className='max-w-md sm:max-w-xs flex-shrink-0 md:flex-shrink md:max-w-2xl w-full'>
                <h2 className='mb-2 sm:mb-4 lg:mb-6'>Working with APIs</h2>
                <p className='text-gray-500'>has made me familiar with a few back-end technologies like
                  <span className='text-black'> GraphQL</span>,
                  <span className='text-black'> MongoDB</span>,
                  <span className='text-black'> Node.js</span>,
                  <span className='text-black'> Express</span> and
                  <span className='text-black'> Chai</span>.
                </p>
              </div>
              <div className='flex max-w-xs w-full flex-wrap md:flex-shrink-0 justify-evenly items-center gap-6 sm:gap-4 md:gap-5 px-9 py-6 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-blueGrey-50 rounded-xl shadow-inner'>
                <img className='h-8 my-1 md:h-10 md:my-2' src={graphql} alt="GraphQL" />
                <img className='h-8 my-1 md:h-10 md:my-2' src={mongodb} alt="MongoDB" />
                <img className='h-8 my-1 md:h-10 md:my-2' src={node} alt="Node.js" />
                <img className='h-11 my-1 md:h-14 md:my-2' src={express} alt="Express" />
                <img className='h-8 my-1 md:h-10 md:my-2' src={chai} alt="Chai" />
              </div>
            </div>
            <div className="flex w-full flex-col sm:flex-row-reverse justify-between items-center gap-6 sm:gap-12 lg:gap-16 px-2 sm:px-8 lg:px-16">
              <div className='max-w-md sm:max-w-xs flex-shrink-0 md:flex-shrink md:max-w-2xl w-full'>
                <h2 className="mb-2 sm:mb-4 lg:mb-6">Other than HTML, CSS and JavaScript,</h2>
                <p className="text-gray-500">I have a working knowledge of
                  <span className='text-black'> Python</span>,
                  <span className='text-black'> C++</span>, and
                  <span className='text-black'> C#</span>.
                </p>
              </div>
              <div className='flex max-w-xs w-full flex-wrap md:flex-shrink-0 justify-evenly items-center gap-6 sm:gap-4 md:gap-5 px-9 py-6 sm:p-4 lg:p-8 bg-gradient-to-bl from-cyan-50 to-orange-50 rounded-xl shadow-inner'>
                <img className='mx-4 sm:mx-2 h-9 my-1 md:h-11 md:my-2' src={html} alt="Figma"/>
                <img className='mx-4 sm:mx-2 h-9 my-1 md:h-11 md:my-2' src={css} alt="VS Code"/>
                <img className='mx-4 sm:mx-2 h-7 my-1 md:h-9 md:my-2' src={javascript} alt="Adobe XD"/>
                <img className='mx-4 sm:mx-2 h-7 my-1 md:h-9 md:my-2' src={python} alt="Photoshop"/>
                <img className='mx-4 sm:mx-2 h-7 my-1 md:h-9 md:my-2' src={cpp} alt="npm"/>
                <img className='mx-4 sm:mx-2 h-8 my-1 md:h-10 md:my-2' src={csharp} alt="Git"/>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default IndexPage
