import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

import favicon from '../images/favicon.svg'

const Contact = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        <script src="https://kit.fontawesome.com/775cd725b8.js" crossOrigin="anonymous"></script>
        <title>Pratik Var | Contact</title>
      </Helmet>
      <Layout location='contact'>
        <section className='min-h-screen'>

        </section>
      </Layout>
    </>
  )
}

export default Contact