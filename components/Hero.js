import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero(){
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-sky-600">Welcome to ASN Converter
                        </h1>
                        <p className="mb-8 leading-relaxed">Use <strong>ASN Converter</strong> to make things easier</p>
                        <div className="flex justify-center">
                            <Link href="/converters" className="transition-all mr-5 inline-flex text-white bg-sky-600 border-0 py-2 px-6 focus:outline-none hover:bg-sky-800 rounded text-sm">Try our converters</Link>
                            <Link href="/about-us" className="transition-all inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-sm">About Us</Link>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image src={"/hero-image.webp"} draggable={false} className="object-cover object-center rounded" width={720} height={480} alt="hero image" />
                    </div>
                </div>
            </section>
        </div>
    )
}