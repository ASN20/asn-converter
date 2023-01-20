import React from 'react';
import Head from 'next/head';
import OurConverters from '@/components/OurConverters';

export default function Converters() {
    return (
        <>
            <Head>
                <title>ASN Converter - Converters</title>
            </Head>
            <div>
                <OurConverters />
            </div>
        </>
    )
}
