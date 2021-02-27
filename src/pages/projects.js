import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import './projects.css'

const ProjectArray = ({title, array, certification}) => {
  return (
    <>
      <div className='flex justify-between mt-5'>
        <h3>{title}</h3>
        <a href={certification} className='px-2 py-1 bg-blue-700 rounded-lg text-white'>View Certification</a>
      </div>
      <div className="grid grid-cols-5 gap-4 py-8">
        {
          array.map(project => {
            return (
              <div className="project"></div>
            )
          })
        }
      </div>
    </>
  )
}

const Projects = ({ data }) => {
  console.log(data)
  return (
    <>
      <Layout location='projects'>
        <section className='px-8 pb-20 bg-gradient-to-br from-blue-50 to-purple-50'>
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
                <h2 className='font-bold tracking-tight mb-4'>Blog Website</h2>
                <p className='mb-8 max-w-lg text-gray-800'>Technologies used: Gatsby, React, Firebase, Tailwind CSS</p>
                <a href="https://nutrafam.com" className='py-2 px-2.5 shadow bg-blue-700 rounded-lg text-white text-lg transition-all hover:bg-blue-600 active:bg-blue-800'>View</a>
              </div>
            </div>
          </div>
        </section>
        <section className='px-8 py-20'>
          <div className='max-w-screen-2xl mx-auto'>
            <h2 className='font-semibold mb-4'>All Projects</h2>
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
                title='Front End Libraries'
                certification='https://www.freecodecamp.org/certification/pratvar/front-end-libraries'
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
