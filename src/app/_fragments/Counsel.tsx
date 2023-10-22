"use client"
import { routes } from '@/values/routeList'
import Link from 'next/link'
import React from 'react'

const Counsel = () => {
    return (
        <div className={'w-fit h-fit bottom-16 right-16 fixed'}>
            <Link
                href={routes[3].url}
                className={'w-fit h-fit px-6 py-4 text-lg md:px-12 md:py-8 rounded-xl md:text-3xl bg-white border-2 border-gray-800 text-gray-800 font-bold shadow-black shadow-lg hover:bg-gray-800 hover:text-white hover:border-white'}>오시는길!</Link>
        </div>
    )
}

export default Counsel