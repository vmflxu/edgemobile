"use client"

import { useScroll } from '@/hooks/useScroll'
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge';

const Header = ({ children }: { children: React.ReactNode }) => {
    const [headerStyle, setHeaderStyle] = useState<string>("flex flex-row justify-center h-fit w-full mx-auto overflow-hidden absolute");
    const scrollY = useScroll();
    const basisStyle = 'flex flex-row justify-center h-[80px] w-full mx-auto overflow-hidden'
    useEffect(() => {
        scrollY >= 80 && console.log(scrollY);
        if (scrollY > 80) {
            setHeaderStyle(twMerge(basisStyle, "top-0 z-500 fixed"));
        } else {
            setHeaderStyle(twMerge(basisStyle, "absolute"));
        }
        console.log(headerStyle);
    }, [scrollY])
    return (
        <header className={headerStyle}>
            {children}
        </header>
    )
}

export default Header