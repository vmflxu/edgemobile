import { headerImages } from '@/values/headerImages'
import Image from 'next/image'
import React from 'react'

const HomeImages = () => {
    return (
        <div className={'w-full h-[800px] z-0 relative'}>
            {headerImages.map((item, idx) => {
                return <Image
                    key={idx}
                    src={item}
                    objectFit={'cover'}
                    alt={`bg_${idx}`}
                    priority={true}
                    fill
                />
            })}
        </div>
    )
}

export default HomeImages