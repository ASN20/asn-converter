import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero(){
    return (
        <div>
            <section className="text-gray-400 body-font">
                <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-sky-400">Welcome to ASN Converter
                        </h1>
                        <p className="mb-8 leading-relaxed">Use <strong>ASN Converter</strong> to make things easier</p>
                        <div className="flex justify-center">
                            <Link href="/converters" className="font-bold transition-all mr-5 inline-flex text-slate-800 bg-sky-400 border-0 py-2 px-6 focus:outline-none md:hover:bg-sky-200 rounded text-sm"><i className="bi bi-arrow-down-up mr-1"></i> Try our converters</Link>
                            <Link href="/about-us" className="font-bold transition-all inline-flex text-slate-800 bg-gray-400 border-0 py-2 px-6 focus:outline-none md:hover:bg-gray-200 rounded text-sm"><i className="bi bi-person-fill mr-1"></i> About Us</Link>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 max-md:hidden">
                        <Image src={"/hero-image.webp"} draggable={false} className="object-cover object-center rounded-2xl border-2 border-sky-400" width={720} height={480} alt="hero image" />
                    </div>
                </div>
            </section>
        </div>
    )
}