import '../styles/globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Head from 'next/head';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';
import LoadingBar from 'react-top-loading-bar';
import React, { useEffect, useState } from 'react';
import { Router } from 'next/router';

export default function App({ Component, pageProps }) {

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      setProgress(30)
    })
    Router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
  })

  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet='utf-8' />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="shortcut icon" href="/Logo.svg" type="image/x-icon" />
    </Head>
    <LoadingBar color='rgb(2 132 199)' progress={progress} height={3} onLoaderFinished={() => setProgress(0)}/>
    <div className='dark:text-slate-100 dark:bg-gray-900'>
      <Navbar />
      <br className='mt-2' />
      <Component {...pageProps} />
      <Footer />
    </div>
    </>
  )
}
