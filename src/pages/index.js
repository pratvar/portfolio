import * as React from "react"
import { Helmet } from "react-helmet"
import favicon from '../images/favicon.svg'

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
        <title>Pratik Var | Front-End Developer</title>
      </Helmet>
      <nav>
        <ul className='flex'>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </nav>
      <main>
        asdf
      </main>
    </>
  )
}

export default IndexPage
