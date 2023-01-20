import React, { useState } from 'react';
import Input from '@/components/Input';
import Head from 'next/head';

export default function MmCmConverter() {

    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");

    const handleOnChange1 = (e) => {
        setText1(e.target.value);
    }

    const handleOnChange2 = (e) => {
        setText2(e.target.value);
    }

    return (
        <>
            <Head>
                <title>ASN Converter - Millimetre / Centimetre Converter</title>
            </Head>
            <div className="container w-4/5 flex flex-col md:ml-auto mx-auto mt-8 md:mt-0">
                <div id="first-half">
                    <Input type="number" value={text1} onChange={handleOnChange1} title="Convert Millimetre to Centimetre" title2="Type a millimetre value" result={`${Number(text1) / 10}cm`} />
                </div>
                <hr className="border-2 my-4 border-sky-600 w-full" />
                <div id="second-half">
                    <Input type="number" value={text2} onChange={handleOnChange2} title="Convert Centimetre to Millimetre" title2="Type a centimetre value" result={`${Number(text2) * 10}mm`} />
                </div>
            </div>
        </>
    )
}
