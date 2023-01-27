import Head from 'next/head';
import React from 'react';

export default function AboutUs() {
    return (
        <>
        <Head>
            <title>ASN Converter - About Us</title>
        </Head>
        <section className="text-gray-400 body-font">
            <div className="container px-5 py-2 mx-auto">
                <div className="flex flex-col text-center w-full mb-2">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-sky-400">About Us</h1>
                    <p>ASN Converter is a open-sourced converter app specially maded for everyone</p>
                </div>
            </div>
        </section>
        </>
    )
}
