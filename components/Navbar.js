import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
    let loc = useRouter();

    return (
        <header className="bg-slate-800 text-gray-400 body-font shadow-sky-400 shadow-2xl fixed w-full z-50">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-sky-400 md:hover:text-sky-200 transition-all mb-4 md:mb-0">
                    <span className='w-8 h-10 text-slate-800 p-2 bg-sky-400 md:hover:bg-sky-200 transition-colors rounded'>
                        <i className="bi-arrow-left-right m-auto"></i>
                    </span>
                    <span className="ml-3 text-xl">ASN Converter</span>
                </Link>
                <hr className='max-md:container max-md:mb-2 max-md:border-x max-md:border-y max-md:border-sky-400' />
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-right">
                    <Link href="/" className={`mx-2 transition-all md:hover:font-bold md:hover:text-sky-200 ${loc.pathname === "/" ? "text-sky-200 font-bold" : ""}`}><i className="bi bi-house-door-fill"></i> Home</Link>
                    <Link href="/converters" className={`mx-2 transition-all md:hover:font-bold md:hover:text-sky-200 ${loc.pathname === "/converters" ? "text-sky-200 font-bold" : ""}`}><i className="bi bi-arrow-down-up"></i> Converters</Link>
                    <Link href="/about-us" className={`mx-2 transition-all md:hover:font-bold md:hover:text-sky-200 ${loc.pathname === "/about-us" ? "text-sky-200 font-bold" : ""}`}><i className="bi bi-person-fill"></i> About Us</Link>
                </nav>
            </div>
        </header>
    )
}
