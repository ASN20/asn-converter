import React from 'react'

export default function Input(props) {

    let { onChange, value, title, title2, result, unit } = props;
    return (
        <>
            <h2 className="text-gray-400 text-lg font-medium title-font">{title}</h2>
            <div className="relative">
                <label for="input" className="leading-7 text-sm text-gray-500">{title2}</label><br />
                <input type="number" placeholder={title2} id="input" value={value} onChange={onChange} className="bg-slate-800 text-gray-400 placeholder:bg-slate-800 placeholder:text-gray-400 w-full rounded border border-sky-400 focus:opacity-75 focus:border-sky-200 focus:ring-4 focus:ring-sky-200 text-base outline-none py-1 px-3 mr-4 mt-1 leading-8 transition-all duration-200 ease-in-out" />
                <span className='text-gray-400'>= {result} <i className='font-serif'>{unit}</i></span>
            </div>

        </>
    )
}
