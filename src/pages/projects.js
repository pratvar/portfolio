import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

import favicon from '../images/favicon.svg'

const Projects = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        <script src="https://kit.fontawesome.com/775cd725b8.js" crossOrigin="anonymous"></script>
        <title>Pratik Var | Projects</title>
      </Helmet>
      <Layout location='projects'>
        <section className='min-h-screen'>

        </section>
      </Layout>
    </>
  )
}

export default Projects