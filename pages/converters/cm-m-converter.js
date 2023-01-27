import Input from '@/components/Input';
import Head from 'next/head';
import React, { useState } from 'react';

export default function Cm_Metre_Convertor() {

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
                <title>ASN Converter - Centimetre / Metre Converter</title>
            </Head>
            <div className="container w-4/5 flex flex-col md:ml-auto mx-auto mt-8 md:mt-0">
                <div id="first-half">
                    <Input value={text1} onChange={handleOnChange1} title="Convert Centimetre to Metre" title2="Type a centimetre value" unit="m" result={Number(text1) / 100} />
                    {text1 !== "" ? <button onClick={() => setText1("")} className="font-bold transition-all mt-5 inline-flex text-slate-800 bg-sky-400 border-0 py-2 px-6 focus:outline-none md:hover:bg-sky-200 rounded text-sm">Clear</button> : ""}
                </div>
                <hr className="border-2 my-4 border-sky-600 w-full" />
                <div id="second-half">
                    <Input value={text2} onChange={handleOnChange2} title="Convert Metre to Centimetre" title2="Type a metre value" unit="cm" result={Number(text2) * 100} />
                    {text2 !== "" ? <button onClick={() => setText2("")} className="font-bold transition-all mt-5 inline-flex text-slate-800 bg-sky-400 border-0 py-2 px-6 focus:outline-none md:hover:bg-sky-200 rounded text-sm">Clear</button> : ""}
                </div>
            </div>
        </>
    )
}
