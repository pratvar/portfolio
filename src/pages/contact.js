import * as React from 'react'
import Layout from '../components/layout'

const ContactForm = () => {

  const [status, setStatus] = React.useState('')

  function submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS")
      } else {
        setStatus("ERROR")
      }
    }
    xhr.send(data)
  }

  return (
    <form className='max-w-sm w-full p-6 rounded-xl bg-white shadow-xl' onSubmit={submitForm} action="https://formspree.io/f/xleogqql" method="POST">
      <h2 className='text-gray-800 font-bold mb-4'>Contact Form</h2>
      <div className='flex flex-col'>
        <label className='mb-0.5' htmlFor="name">Name</label>
        <input className='mb-4 p-2 border rounded bg-gray-50 hover:bg-white' type="text" name="name" id="name" placeholder="Name" />
        <label className='mb-0.5' htmlFor="email">Email</label>
        <input className='mb-4 p-2 border rounded bg-gray-50 hover:bg-white' type="email" name="email" id="email" placeholder="Email" />
        <label className='mb-0.5' htmlFor="message">Message</label>
        <textarea className='mb-4 p-2 h-36 border rounded bg-gray-50 hover:bg-white' name="message" id="message" placeholder="Message..." />
      </div>
      {status === "SUCCESS"
        ? <p>Thanks!</p>
        : <button className='my-1.5 focus:outline-none bg-blue-700 hover:bg-blue-600 active:bg-blue-700 text-white rounded-md px-2 py-1'>Submit</button>}
      {status === "ERROR" && <p>Ooops! There was an error.</p>}
    </form>
  )
}

const Contact = () => {
  return (
    <Layout location='contact'>
      <section className='w-full flex-grow flex items-center bg-blueGrey-50 px-8'>
        <div className='max-w-screen-xl w-full mx-auto py-10 sm:-mt-16 flex flex-col sm:flex-row items-center sm:justify-evenly'>
          <ContactForm />
          <div className='mt-8 sm:mt-0 sm:ml-4 max-w-sm w-full px-6 py-8 sm:py-12 rounded-xl bg-white shadow-xl'>
            <h3 className='text-gray-800 font-bold mb-2 sm:-mt-2'>Email</h3>
            <p className='mb-12'><a className='hover:text-blue-900' href="mailto:pratikvar@pm.me">pratikvar@pm.me</a></p>
            <h3 className='text-gray-800 font-bold my-4'>Social Links</h3>
            <ul className='text-2xl md:text-3xl grid grid-cols-5 sm:grid-cols-3 md:grid-cols-5 sm:gap-4 md:gap-1 mb-3'>
              <li><a className='h-12 w-12 border bg-gray-50 rounded-full flex justify-center items-center transition-all hover:bg-white hover:shadow-md active:bg-gray-100 active:shadow hover:text-blue-800' href="https://facebook.com/pratvar.dev"><i className='fab fa-facebook' /></a></li>
              <li><a className='h-12 w-12 border bg-gray-50 rounded-full flex justify-center items-center transition-all hover:bg-white hover:shadow-md active:bg-gray-100 active:shadow hover:text-lightBlue-500' href="https://twitter.com/pratvar"><i className='fab fa-twitter' /></a></li>
              <li><a className='h-12 w-12 border bg-gray-50 rounded-full flex justify-center items-center transition-all hover:bg-white hover:shadow-md active:bg-gray-100 active:shadow hover:text-blue-800' href="https://linkedin.com/in/pratikvar"><i className='fab fa-linkedin' /></a></li>
              <li><a className='h-12 w-12 border bg-gray-50 rounded-full flex justify-center items-center transition-all hover:bg-white hover:shadow-md active:bg-gray-100 active:shadow hover:text-gray-600' href="https://github.com/pratvar"><i className='fab fa-github' /></a></li>
              <li><a className='h-12 w-12 border bg-gray-50 rounded-full flex justify-center items-center transition-all hover:bg-white hover:shadow-md active:bg-gray-100 active:shadow hover:text-orange-700' href="https://stackoverflow.com/users/5686477/pratik-var"><i className='fab fa-stack-overflow' /></a></li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact