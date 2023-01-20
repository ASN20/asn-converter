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
            title: "Metre / Killometre Converter",
            href: "/m-km-converter",
            keyNo: 3
        }
    ]
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-2 mx-auto">
                <div className="flex flex-col text-center w-full mb-2">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-sky-600">Our Converters</h1>
                </div>
                <div className="flex flex-wrap -mt-2">
                    {Converters.map((item) => {
                        return (
                            <div key={item.keyNo} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                    <span alt="team" className="w-16 h-16 bg-gray-100 object-cover overflow-hidden flex justify-center object-center rounded-full mr-4">
                                        <i className="bi-arrow-left-right text-center text-6xl text-sky-600"></i>
                                    </span>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 title-font font-medium mb-4">{item.title}</h2>
                                        <Link href={`/converters${item.href}`} className="transition-all inline-flex text-white bg-sky-600 border-0 py-2 px-4 focus:outline-none hover:bg-sky-800 rounded text-sm">Open</Link>
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
