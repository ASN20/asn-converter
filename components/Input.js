import React from 'react'

export default function Input(props) {

    let { type, onChange, value, title, title2, result } = props;
    return (
        <>
            <h2 className="text-gray-900 text-lg font-medium title-font">{title}</h2>
            <div className="relative">
                <label for="input" className="leading-7 text-sm text-gray-600">{title2}</label><br />
                <input type={type} placeholder={title2} id="input" value={value} onChange={onChange} className="max-sm:w-36 w-96 bg-white rounded border border-gray-300 focus:border-sky-600 focus:ring-4 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 mr-4 mt-1 leading-8 transition-all duration-200 ease-in-out" />
                <span>= {result}</span>
            </div>
        </>
    )
}
