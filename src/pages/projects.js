import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Img from 'gatsby-image'

const Project = () => {
  return (
    <div className='w-96 h-96 bg-white rounded-lg '>

    </div>
  )
}

const Projects = ({ data }) => {
  return (
    <>
      <Layout location='projects'>
        <section className='min-h-screen bg-gradient-to-tl from-purple-50 to-blue-50 shadow-inner'>
          <div className='max-w-screen-xl mx-auto py-10'>
            <h2 className='font-bold tracking-tight'>Recent Projects</h2>
            {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
            <div className='grid grid-cols-3 gap-5 w-full py-16'>
              <Project />
              <Project />
              <Project />
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
    file(relativePath: { eq: "project1.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
