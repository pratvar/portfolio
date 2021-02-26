import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Img from 'gatsby-image'
import './projects.css'

const Projects = ({ data }) => {
  console.log(data)
  return (
    <>
      <Layout location='projects'>
        <section className='px-8 pb-20'>
          <div className='max-w-screen-2xl w-full mx-auto py-16'>
            <h2 className='font-bold tracking-tight mb-10'>Recent Projects</h2>
            <div className='flex gap-28 w-full'>
              <div className='flex items-center gap-4'>
                <div className='h-10 w-10 flex items-center justify-center rounded-full shadow-md bg-grey-50 transition-all active:bg-gray-100 hover:shadow-lg cursor-pointer'>
                  <i className="fas fa-chevron-left"></i>
                </div>
                {/* <div className="flex items-center"> */}
                  {/* <div className="project left">
                    <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} className='img' />
                  </div> */}
                  <div className="-ml-4">
                    <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} className='img-active' />
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
                <h2 className='font-semibold tracking-tight mb-4'>Blog Website</h2>
                <p className='mb-8 max-w-lg text-gray-800'>Technologies used: Gatsby, React, Firebase, Tailwind CSS</p>
                <a href="https://nutrafam.com" className='py-2 px-2.5 shadow bg-blue-700 rounded-lg text-white text-lg transition-all hover:bg-blue-600 active:bg-blue-800'>View</a>
              </div>
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
