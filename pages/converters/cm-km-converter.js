import React, { useState } from 'react';
import Input from '@/components/Input';
import Head from 'next/head';


export default function MmMetreConverter() {

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
                <title>ASN Converter - Centimetre / Kilometre Converter</title>
            </Head>
            <div className="container w-4/5 flex flex-col md:ml-auto mx-auto mt-8 md:mt-0">
                <div id="first-half">
                    <Input value={text1} onChange={handleOnChange1} title="Convert Centimetre to Kilometre" title2="Type a Centimetre value" unit="km" result={Number(text1) / 100000} />
                    {text1 !== "" ? <button onClick={() => setText1("")} className="font-bold transition-all mt-5 inline-flex text-slate-800 bg-sky-400 border-0 py-2 px-6 focus:outline-none md:hover:bg-sky-200 rounded text-sm">Clear</button> : ""}
                </div>
                <hr className="border-2 my-4 border-sky-600 w-full" />
                <div id="second-half">
                    <Input value={text2} onChange={handleOnChange2} title="Convert Kilometre to Centimetre" title2="Type a Kilometre value" unit="cm" result={Number(text2) * 100000} />
                    {text2 !== "" ? <button onClick={() => setText2("")} className="font-bold transition-all mt-5 inline-flex text-slate-800 bg-sky-400 border-0 py-2 px-6 focus:outline-none md:hover:bg-sky-200 rounded text-sm">Clear</button> : ""}
                </div>
            </div>
        </>
    )
}
