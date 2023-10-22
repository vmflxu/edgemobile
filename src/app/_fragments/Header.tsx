"use client"

import { useScroll } from '@/hooks/useScroll'
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge';

const Header = ({ children }: { children: React.ReactNode }) => {
    const [headerStyle, setHeaderStyle] = useState<string>("flex flex-row justify-center h-[80px] w-full mx-auto overflow-hidden");

    return (
        <header className={headerStyle}>
            {children}
        </header>
    )
}

export default Header