import Link from 'next/link';
import React from 'react';

export default function OurConverters() {

    const Converters = [
        {
            title: "Centimetre / Metre Converter",
            href: "/cm-m-converter",
            keyNo: 1
        },
        {
            title: "Millimetre / Centimetre Converter",
            href: "/mm-cm-converter",
            keyNo: 2
        },
        {
            title: "Metre / Kilometre Converter",
            href: "/m-km-converter",
            keyNo: 3
        },
        {
            title: "Millimetre / Metre Converter",
            href: "/mm-m-converter",
            keyNo: 4
        },
        {
            title: "Millimetre / Kilometre Converter",
            href: "/mm-km-converter",
            keyNo: 5
        },
        {
            title: "Centimetre / Kilometre Converter",
            href: "/cm-km-converter",
            keyNo: 6
        },
        {
            title: "Millilitre / Litre Converter",
            href: "/ml-l-converter",
            keyNo: 7
        }
    ]
    return (
        <section className="text-gray-400 body-font">
            <div className="container px-5 py-2 mx-auto">
                <div className="flex flex-col text-center w-full mb-2">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-sky-400">Our Converters</h1>
                </div>
                <div className="flex flex-wrap justify-center items-center -mt-2">
                    {Converters.map((item) => {
                        return (
                            <div key={item.keyNo} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex items-center justify-center bg-slate-800 border-sky-400 border p-4 rounded-2xl">
                                    <span className="w-16 h-16 border border-sky-400 bg-slate-900 object-cover overflow-hidden flex justify-center object-center rounded-full mr-4">
                                        <i className="bi-arrow-left-right text-center text-6xl text-sky-400"></i>
                                    </span>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-400 title-font font-medium mb-4">{item.title}</h2>
                                        <Link href={`/converters${item.href}`} className="font-bold transition-all inline-flex text-slate-800 bg-sky-400 border-0 py-2 px-4 focus:outline-none md:hover:bg-sky-200 rounded text-sm">Open</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
