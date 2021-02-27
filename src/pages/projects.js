import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import './projects.css'

const RecentProjects = () => {

}

const ProjectArray = ({ type, title, certification, array }) => {
  let content;
  if (type === 'text') content = (
    <div className='grid grid-cols-2 gap-4 py-3 mb-8'>
      {
        array.map(project => {
          return (
            <div className='flex justify-between items-center bg-gray-50 px-4 py-2 rounded-md hover:bg-gray-100 shadow'>
              {project.name}
              <a href={project.link} className='hover:underline'>View <i className='fa fa-external-link text-xs'></i></a>
            </div>
          )
        })
      }
    </div>
  )
  else content = (
    <div className="grid grid-cols-5 gap-4 py-3 mb-8">
      {
        array.map(project => {
          return (
            <div className="project bg-gray-50 rounded-lg overflow-hidden shadow">
              <div className="w-full bg-gray-200 h-44"></div>
              <div className='flex items-center justify-between py-2 px-3'>
                {project.name}
              </div>
            </div>
          )
        })
      }
    </div>
  )
  return (
    <div>
      <div className='flex items-center justify-between my-2'>
        <h3>{title}</h3>
        <a href={certification} className='px-2 py-1 rounded-md text-white bg-blue-700 hover:bg-blue-600 active:bg-blue-800 transition-all'>View Certification</a>
      </div>
      <hr />
      {content}
    </div>
  )
}

const Projects = ({ data }) => {
  console.log(data)
  return (
    <>
      <Layout location='projects'>
        <section className='px-8 pb-20 bg-gradient-to-br from-lightGreen-50 to-teal-50'>
          <div className='max-w-screen-2xl w-full mx-auto py-16'>
            <h2 className='font-semibold tracking-tight mb-10'>Recent Projects</h2>
            <div className='flex gap-28 w-full'>
              <div className='flex items-center gap-4'>
                <div className='h-10 w-10 flex items-center justify-center rounded-full shadow-md bg-grey-50 transition-all active:bg-gray-100 hover:shadow-lg cursor-pointer'>
                  <i className="fas fa-chevron-left"></i>
                </div>
                {/* <div className="flex items-center"> */}
                {/* <div className="project left">
                    <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} className='img' />
                  </div> */}
                <div className="-ml-4 recent-img">
                  <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
                </div>
                {/* <div className="project right">
                    <Img fluid={data.allFile.edges[2].node.childImageSharp.fluid} className='img' />
                  </div> */}
                {/* </div> */}
                <div className='h-10 w-10 flex items-center justify-center rounded-full shadow-md bg-grey-50 transition-all active:bg-gray-100 hover:shadow-lg cursor-pointer'>
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
              <div className='pt-10'>
                <h2 className='font-bold tracking-tight mb-4'>A Blogging Website</h2>
                <p className='mb-8 max-w-lg text-gray-800'>Technologies used: Gatsby, React, Firebase, Tailwind CSS</p>
                <div className="flex">
                  <a className='flex items-center py-1 px-2.5 shadow bg-blue-700 rounded-md text-lg text-white transition-all hover:bg-blue-600 active:bg-blue-800' href="https://nutrafam.com">View<i className='ml-2 text-sm fa fa-external-link'></i></a>
                  <a className='flex items-center py-1 px-2.5 shadow bg-gray-700 rounded-md text-lg text-white transition-all hover:bg-gray-600 active:bg-gray-800 ml-3' href="https://github.com/pratvar/nutrafam">Source<i className='ml-2 fab fa-github'></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='px-8 py-20'>
          <div className='max-w-screen-2xl mx-auto'>
            <h2 className='font-semibold my-4'>All Projects</h2>
            <p className='text-gray-800'>These are some of the projects I made while learning through <code><a href="https://freecodecamp.org" className='hover:underline'>freeCodeCamp<i className='transform translate-x-0.5 translate-y-0.5 mr-1 text-2xl fab fa-free-code-camp'></i></a></code>.</p>
            <div className="py-12 px-6">
              <ProjectArray
                title='Responsive Web Design'
                certification='https://www.freecodecamp.org/certification/pratvar/responsive-web-design'
                array={[
                  {
                    name: 'Tribute Page',
                    link: 'https://pratvar.github.io/fCC-projects/html-css/tribute-page',
                    source: 'https://github.com/pratvar/fCC-projects/tree/master/html-css/tribute-page',
                  },
                  {
                    name: 'Survey Form',
                    link: 'https://pratvar.github.io/fCC-projects/html-css/survey-form',
                    source: 'https://github.com/pratvar/fCC-projects/tree/master/html-css/survey-form',
                  },
                  {
                    name: 'Product Landing Page',
                    link: 'https://pratvar.github.io/fCC-projects/html-css/product-landing-page',
                    source: 'https://github.com/pratvar/fCC-projects/tree/master/html-css/product-landing-page',
                  },
                  {
                    name: 'Technical Documentation Page',
                    link: 'https://pratvar.github.io/fCC-projects/html-css/technical-documentation-page',
                    source: 'https://github.com/pratvar/fCC-projects/tree/master/html-css/technical-documentation-page',
                  },
                  {
                    name: 'Personal Portfolio Webpage',
                    link: 'https://pratvar.github.io/fCC-projects/html-css/personal-portfolio-webpage',
                    source: 'https://github.com/pratvar/fCC-projects/tree/master/html-css/personal-portfolio-webpage',
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
                  },
                  {
                    name: 'Markdown Previewer',
                    link: 'https://pratvar.github.io/fCC-projects/frontend-libs/markdown-previewer',
                    source: 'https://github.com/pratvar/fCC-projects/tree/master/frontend-libs/markdown-previewer',
                  },
                  {
                    name: 'Drum Machine',
                    link: 'https://pratvar.github.io/fCC-projects/frontend-libs/drum-machine',
                    source: 'https://github.com/pratvar/fCC-projects/tree/master/frontend-libs/drum-machine',
                  },
                  {
                    name: 'JavaScript Calculator',
                    link: 'https://pratvar.github.io/fCC-projects/frontend-libs/js-calculator',
                    source: 'https://github.com/pratvar/fCC-projects/tree/master/frontend-libs/js-calculator',
                  },
                  {
                    name: '25 + 5 Clock',
                    link: 'https://pratvar.github.io/fCC-projects/frontend-libs/pomodoro-timer',
                    source: 'https://github.com/pratvar/fCC-projects/tree/master/frontend-libs/pomodoro-timer',
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
                  },
                  {
                    name: 'Scatterplot Graph',
                    link: 'https://pratvar.github.io/fCC-projects/data-visualization/scatterplot-graph',
                    source: 'https://github.com/pratvar/fCC-projects/tree/master/data-visualization/scatterplot-graph',
                  },
                  {
                    name: 'Heat Map',
                    link: 'https://pratvar.github.io/fCC-projects/data-visualization/heat-map',
                    source: 'https://github.com/pratvar/fCC-projects/tree/master/data-visualization/heat-map',
                  },
                  {
                    name: 'Choropleth Map',
                    link: 'https://pratvar.github.io/fCC-projects/data-visualization/choropleth-map',
                    source: 'https://github.com/pratvar/fCC-projects/tree/master/data-visualization/choropleth-map',
                  },
                  {
                    name: 'Treemap Diagram',
                    link: 'https://pratvar.github.io/fCC-projects/data-visualization/treemap-diagram',
                    source: 'https://github.com/pratvar/fCC-projects/tree/master/data-visualization/treemap-diagram',
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
    </>
  )
}

export default Projects

export const query = graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "projects"}}) {
      edges {
        node {
          base
          childImageSharp {
            fluid(maxWidth: 650, quality: 100) {
              base64
              aspectRatio
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
