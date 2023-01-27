/* All Imports */

// 1. Css
import '../styles/globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// 2. React and next components
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Router } from 'next/router';

// Our components
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';

// Loading bar component
import LoadingBar from 'react-top-loading-bar';


/* App starts here */
export default function App({ Component, pageProps }) {

  // useState
  const [progress, setProgress] = useState(0)

  // useEffect
  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      setProgress(30)
    })
    Router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
  })

  // Return statement
  return (
    <>
      {/* Head component */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="rgb(30, 41, 59)" />
        <meta charSet='utf-8' />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="shortcut icon" href="/Logo.svg" type="image/x-icon" />
      </Head>

      {/* Loading Bar */}
      <LoadingBar color="rgb(125, 211, 252)" progress={progress} height={3} onLoaderFinished={() => setProgress(0)} />
      <div>

        {/* Navbar */}
        <Navbar />
        <div className="pt-24 max-md:pt-36">
        <Component {...pageProps} />
        {/* Footer */}
        <Footer />
        </div>
      </div>
    </>
  )
}

/* App ends here  */