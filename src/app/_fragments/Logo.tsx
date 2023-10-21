import Image from 'next/image'
import React from 'react'
import logo from '$/images/common/logo.png'

const Logo = () => {
    return (
        <div className={'flex flex-row w-fit justify-between items-center h-full gap-4'}>
            <div className='w-fit h-fit sm:visible'>
                <Image
                    src={logo}
                    width={'32'}
                    height={'32'}
                    alt='로고'
                />
            </div>
            {/* <div className='w-fit h-fit sm:hidden'>
                <Image
                    src={logo}
                    width={'16'}
                    height={'16'}
                    alt='로고'
                />
            </div> */}
            <div className={'flex flex-row font-bold text-sm sm:text-lg md:text-xl items-center'}>
                <span className={'min-w-fit'}>엣지</span>
                <span className={'invisible sm:visible'}>이동식주택</span>
            </div>
        </div>
    )
}

export default Logo