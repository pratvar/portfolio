import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import './projects.css'

const ProjectArray = ({ type, title, certification, array }) => {
  let content;
  if (type === 'text') content = (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-3 mb-8'>
      {
        array.map(project => {
          return (
            <div className='border flex justify-between items-center bg-gray-50 px-4 py-2 rounded-md hover:bg-white shadow hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-100'>
              <div className="cursor-default">{project.name}</div>
              <a href={project.link} className='hover:underline ml-4 border-l-2 pl-2'>View <i className='fa fa-external-link text-xs'></i></a>
            </div>
          )
        })
      }
    </div>
  )
  else content = (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-3 mb-8">
      {
        array.map(project => {
          return (
            <div className="w-full border group relative bg-gray-50 rounded-lg overflow-hidden shadow transition-all duration-100 transform hover:-translate-y-0.5 hover:shadow-md hover:bg-white">
              <div className="relative w-full h-auto bg-gray-200">
                <Img fluid={project.image} />
                <div className='flex justify-evenly items-center absolute top-0 w-full h-full bg-white bg-opacity-70 opacity-0 group-hover:opacity-100 transition-all duration-100' style={{backdropFilter: 'blur(20px)'}}>
                  <a href={project.link} className='flex items-center px-2 py-1 text-lg text-white rounded-md bg-blue-700 hover:bg-blue-600 active:bg-blue-800'>View<i className='fa fa-external-link text-xs ml-1.5'></i></a>
                  <a href={project.source} className='px-2 py-1 text-lg text-white rounded-md bg-gray-700 hover:bg-gray-600 active:bg-gray-800'>Source<i className='fab fa-github ml-1.5'></i></a>
                </div>
              </div>
              <div className='flex items-center justify-between py-2 px-3 cursor-default'>
                {project.name}
              </div>
            </div>
          )
        })
      }
    </div>
  )
  return (
    <div className='my-20'>
      <div className='flex items-center justify-between my-2'>
        <h3 className='font-bold'>{title}</h3>
        <a href={certification} className='whitespace-nowrap px-2 py-1 ml-4 rounded-md text-white bg-blue-700 hover:bg-blue-600 active:bg-blue-800 transition-all'>View Certification</a>
      </div>
      <hr />
      {content}
    </div>
  )
}

const Projects = ({ data }) => {

  const recentProjects = [
    {
      title: 'A Blogging Website',
      desc: 'Technologies used: Gatsby, React, Tailwind CSS.',
      link: 'https://nutrafam.com/',
      source: 'https://github.com/pratvar/nutrafam',
    },
    {
      title: 'My Porfolio Website',
      desc: (<>Yep, the one you're looking at right now.<br/>Technologies used: Gatsby, React, Tailwind CSS.</>),
      source: 'https://github.com/pratvar/portfolio',
    }
  ]
  
  const [active, setActive] = React.useState(0)

  function handleChange() {
    document.querySelector('#slides').children[0].classList.toggle('hidden')
    document.querySelector('#slides').children[1].classList.toggle('hidden')
    active === 0 ? setActive(1) : setActive(0)
  }

  return (
    <Layout location='projects'>
      <section id='recent-projects' className='px-8 pb-10 sm:pb-20 bg-gradient-to-br from-lightGreen-50 to-teal-50'>
        <div className='max-w-screen-2xl w-full mx-auto py-16'>
          <h2 className='font-semibold tracking-tight mb-10'>Recent Projects</h2>
          <div className='flex flex-col lg:justify-evenly lg:flex-row items-center lg:items-start gap-4 lg:gap-8 w-full'>
            <div className='flex items-center gap-4'>
              <button onClick={handleChange} className='focus:outline-none h-6 w-6 sm:h-10 sm:w-10 text-sm sm:text-lg flex items-center justify-center rounded-full shadow-md bg-grey-50 transition-all active:bg-gray-100 hover:shadow-lg cursor-pointer'>
                <i className="fas fa-chevron-left"></i>
              </button>
              <div id='slides'>
                <Img fluid={data.recentProjects.edges[0].node.childImageSharp.fluid} className="-ml-4 image" />
                <Img fluid={data.recentProjects.edges[1].node.childImageSharp.fluid} className="-ml-4 image hidden" />
              </div>
              <button onClick={handleChange} className='focus:outline-none h-6 w-6 sm:h-10 sm:w-10 text-sm sm:text-lg flex items-center justify-center rounded-full shadow-md bg-grey-50 transition-all active:bg-gray-100 hover:shadow-lg cursor-pointer'>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <div className='pt-10 lg:pt-2 xl:pt-10'>
              <h2 className='font-bold tracking-tight mb-4'>{recentProjects[active].title}</h2>
              <p className='mb-8 max-w-lg text-gray-800'>{recentProjects[active].desc}</p>
              <div className="flex">
                {
                  recentProjects[active].link &&
                  <a className='flex items-center py-1 px-2.5 shadow bg-blue-700 rounded-md sm:text-lg text-white transition-all hover:bg-blue-600 active:bg-blue-800 mr-3' href={recentProjects[active].link}>View<i className='ml-2 text-xs sm:text-sm fa fa-external-link'></i></a>
                }
                <a className='flex items-center py-1 px-2.5 shadow bg-gray-700 rounded-md sm:text-lg text-white transition-all hover:bg-gray-600 active:bg-gray-800' href={recentProjects[active].source}>Source<i className='ml-2 fab fa-github'></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='px-4 sm:px-8 py-20'>
        <div className='max-w-screen-2xl mx-auto'>
          <h2 className='font-semibold my-4'>All Projects</h2>
          <p className='text-gray-800'>These are some of the projects I made while learning through <code><a href="https://freecodecamp.org" className='hover:underline whitespace-nowrap'>freeCodeCamp<i className='transform translate-x-0.5 translate-y-0.5 mr-1 text-2xl fab fa-free-code-camp'></i></a></code>.</p>
          <div className="py-0 sm:py-4 md:px-6">
            <ProjectArray
              title='Responsive Web Design'
              certification='https://www.freecodecamp.org/certification/pratvar/responsive-web-design'
              array={[
                {
                  name: 'Tribute Page',
                  link: 'https://pratvar.github.io/fCC-projects/html-css/tribute-page',
                  source: 'https://github.com/pratvar/fCC-projects/tree/master/html-css/tribute-page',
                  image: data.allProjects.edges.find(el => el.node.base === '1.png').node.childImageSharp.fluid,
                },
                {
                  name: 'Survey Form',
                  link: 'https://pratvar.github.io/fCC-projects/html-css/survey-form',
                  source: 'https://github.com/pratvar/fCC-projects/tree/master/html-css/survey-form',
                  image: data.allProjects.edges.find(el => el.node.base === '2.png').node.childImageSharp.fluid,
                },
                {
                  name: 'Product Landing Page',
                  link: 'https://pratvar.github.io/fCC-projects/html-css/product-landing-page',
                  source: 'https://github.com/pratvar/fCC-projects/tree/master/html-css/product-landing-page',
                  image: data.allProjects.edges.find(el => el.node.base === '3.png').node.childImageSharp.fluid,
                },
                {
                  name: 'Technical Documentation Page',
                  link: 'https://pratvar.github.io/fCC-projects/html-css/technical-documentation-page',
                  source: 'https://github.com/pratvar/fCC-projects/tree/master/html-css/technical-documentation-page',
                  image: data.allProjects.edges.find(el => el.node.base === '4.png').node.childImageSharp.fluid,
                },
                {
                  name: 'Personal Portfolio Webpage',
                  link: 'https://pratvar.github.io/fCC-projects/html-css/personal-portfolio-webpage',
                  source: 'https://github.com/pratvar/fCC-projects/tree/master/html-css/personal-portfolio-webpage',
                  image: data.allProjects.edges.find(el => el.node.base === '5.png').node.childImageSharp.fluid,
                },
              ]}
            />
            <ProjectArray
              type='text'
              title='Javascript Algorithms and Data Structures'
              certification='https://www.freecodecamp.org/certification/pratvar/javascript-algorithms-and-data-structures'
              array={[
                {
                  name: 'Palindrome Checker',
                  link: 'https://github.com/pratvar/fCC-projects/blob/master/javascript/palindrome-checker.js',
                },
                {
                  name: 'Romal Numeral Converter',
                  link: 'https://github.com/pratvar/fCC-projects/blob/master/javascript/roman-numeral-converter.js',
                },
                {
                  name: 'Caesars Cipher',
                  link: 'https://github.com/pratvar/fCC-projects/blob/master/javascript/caesars-cipher.js',
                },
                {
                  name: 'Telephone Number Validator',
                  link: 'https://github.com/pratvar/fCC-projects/blob/master/javascript/telephone-number-validator.js',
                },
                {
                  name: 'Cash Register',
                  link: 'https://github.com/pratvar/fCC-projects/blob/master/javascript/cash-register.js',
                },
              ]}
            />
            <ProjectArray
              title='Front End Libraries'
              certification='https://www.freecodecamp.org/certification/pratvar/front-end-libraries'
              array={[
                {
                  name: 'Random Quote Machine',
                  link: 'https://pratvar.github.io/fCC-projects/frontend-libs/random-quote',
                  source: 'https://github.com/pratvar/fCC-projects/tree/master/frontend-libs/random-quote',
                  image: data.allProjects.edges.find(el => el.node.base === '6.png').node.childImageSharp.fluid,
                },
                {
                  name: 'Markdown Previewer',
                  link: 'https://pratvar.github.io/fCC-projects/frontend-libs/markdown-previewer',
                  source: 'https://github.com/pratvar/fCC-projects/tree/master/frontend-libs/markdown-previewer',
                  image: data.allProjects.edges.find(el => el.node.base === '7.png').node.childImageSharp.fluid,
                },
                {
                  name: 'Drum Machine',
                  link: 'https://pratvar.github.io/fCC-projects/frontend-libs/drum-machine',
                  source: 'https://github.com/pratvar/fCC-projects/tree/master/frontend-libs/drum-machine',
                  image: data.allProjects.edges.find(el => el.node.base === '8.png').node.childImageSharp.fluid,
                },
                {
                  name: 'JavaScript Calculator',
                  link: 'https://pratvar.github.io/fCC-projects/frontend-libs/js-calculator',
                  source: 'https://github.com/pratvar/fCC-projects/tree/master/frontend-libs/js-calculator',
                  image: data.allProjects.edges.find(el => el.node.base === '9.png').node.childImageSharp.fluid,
                },
                {
                  name: '25 + 5 Clock',
                  link: 'https://pratvar.github.io/fCC-projects/frontend-libs/pomodoro-timer',
                  source: 'https://github.com/pratvar/fCC-projects/tree/master/frontend-libs/pomodoro-timer',
                  image: data.allProjects.edges.find(el => el.node.base === '10.png').node.childImageSharp.fluid,
                },
              ]}
            />
            <ProjectArray
              title='Data Visualization'
              certification='https://www.freecodecamp.org/certification/pratvar/data-visualization'
              array={[
                {
                  name: 'Bar Chart',
                  link: 'https://pratvar.github.io/fCC-projects/data-visualization/bar-chart',
                  source: 'https://github.com/pratvar/fCC-projects/tree/master/data-visualization/bar-chart',
                  image: data.allProjects.edges.find(el => el.node.base === '11.png').node.childImageSharp.fluid,
                },
                {
                  name: 'Scatterplot Graph',
                  link: 'https://pratvar.github.io/fCC-projects/data-visualization/scatterplot-graph',
                  source: 'https://github.com/pratvar/fCC-projects/tree/master/data-visualization/scatterplot-graph',
                  image: data.allProjects.edges.find(el => el.node.base === '12.png').node.childImageSharp.fluid,
                },
                {
                  name: 'Heat Map',
                  link: 'https://pratvar.github.io/fCC-projects/data-visualization/heat-map',
                  source: 'https://github.com/pratvar/fCC-projects/tree/master/data-visualization/heat-map',
                  image: data.allProjects.edges.find(el => el.node.base === '13.png').node.childImageSharp.fluid,
                },
                {
                  name: 'Choropleth Map',
                  link: 'https://pratvar.github.io/fCC-projects/data-visualization/choropleth-map',
                  source: 'https://github.com/pratvar/fCC-projects/tree/master/data-visualization/choropleth-map',
                  image: data.allProjects.edges.find(el => el.node.base === '14.png').node.childImageSharp.fluid,
                },
                {
                  name: 'Treemap Diagram',
                  link: 'https://pratvar.github.io/fCC-projects/data-visualization/treemap',
                  source: 'https://github.com/pratvar/fCC-projects/tree/master/data-visualization/treemap',
                  image: data.allProjects.edges.find(el => el.node.base === '15.png').node.childImageSharp.fluid,
                },
              ]}
            />
            <ProjectArray
              type='text'
              title='APIs and Microservices'
              certification='https://www.freecodecamp.org/certification/pratvar/apis-and-microservices'
              array={[
                {
                  name: 'Timestamp Microservice',
                  link: 'https://repl.it/@pratvar/boilerplate-project-timestamp',
                },
                {
                  name: 'Request Header Parser Microservice',
                  link: 'https://repl.it/@pratvar/boilerplate-project-headerparser',
                },
                {
                  name: 'URL Shortener Microservice',
                  link: 'https://repl.it/@pratvar/boilerplate-project-urlshortener',
                },
                {
                  name: 'Exercise Tracker',
                  link: 'https://repl.it/@pratvar/boilerplate-project-exercisetracker',
                },
                {
                  name: 'File Metadata Microservice',
                  link: 'https://repl.it/@pratvar/boilerplate-project-filemetadata',
                },
              ]}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query {
    recentProjects: allFile(filter: {name: {regex: "/project/"}, relativeDirectory: {eq: "projects"}}) {
      edges {
        node {
          base
          childImageSharp {
            fluid(maxWidth: 650, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
    allProjects: allFile(filter: {name: {regex: "/^[0-9]+/"}, relativeDirectory: {eq: "projects"}}) {
      edges {
        node {
          base
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`
