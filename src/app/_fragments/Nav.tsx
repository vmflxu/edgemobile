import { routes } from '@/values/routeList'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const Nav = () => {
    return (
        <div className={'flex flex-row justify-center h-80px w-full mx-auto overflow-hidden'}>
            <nav className={'flex flex-row z-10 w-full h-full mx-auto bg-white items-center'}>
                <div className={'flex flex-row w-full md:flex-row md:w-[1200px] justify-between mx-auto h-[60px] items-center'}>
                    <Logo />
                    <ul className={'flex flex-row md:gap-8 bg-white w-fit sm:gap-4 lg:gap-16 sm:text-sm md:text-base text-sm gap-4'}>
                        {routes.map(item => <li key={item.title}>
                            <Link
                                href={item.url}
                                className={'hover:text-blue-500'}
                            >{item.title}</Link>
                        </li>)}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav