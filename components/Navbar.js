import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {

    let loc = useRouter();
    return (
        <header className="bg-slate-100 text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-sky-600 md:hover:text-sky-800 transition-all mb-4 md:mb-0">
                    <span className='w-8 h-10 text-white p-2 bg-sky-600 md:hover:bg-sky-800  transition-colors rounded'>
                        <i className="bi-arrow-left-right m-auto"></i>
                    </span>
                    <span className="ml-3 text-xl">ASN Converter</span>
                </Link>
                <hr className='max-md:container max-md:mb-2 max-md:border-x max-md:border-y max-md:border-sky-900' />
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-right">
                    <Link href="/" className={`mx-2 md:transition-all md:hover:font-bold md:hover:text-sky-800 ${loc.pathname === "/" ? "text-sky-800 font-bold" : ""}`}>Home</Link>
                    <Link href="/converters" className={`mx-2 md:transition-all md:hover:font-bold md:hover:text-sky-800 ${loc.pathname === "/converters" ? "text-sky-800 font-bold" : ""}`}>Converters</Link>
                    <Link href="/about-us" className={`mx-2 md:transition-all md:hover:font-bold md:hover:text-sky-800 ${loc.pathname === "/about-us" ? "text-sky-800 font-bold" : ""}`}>About Us</Link>
                </nav>
            </div>
        </header>
    )
}
