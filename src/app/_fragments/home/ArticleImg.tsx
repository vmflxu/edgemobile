import { Flex } from '@/style/common/Flex'
import Image, { StaticImageData } from 'next/image'
import React, { PropsWithRef } from 'react'

export type ArticleImg<T extends React.ElementType> = {
    img: StaticImageData,
    idx: number,
} & React.ComponentPropsWithoutRef<T>
const ArticleImg = <T extends React.ElementType = "img">({
    img,
    idx,
    ...props
}: ArticleImg<T>) => {
    return (
        <div className={'w-full overflow-x-hidden px-4 flex-0'} >
            {
                !!img && <Flex.HStack className={'w-full overflow-x-hidden'}>
                    <Image
                        key={idx}
                        src={img}
                        alt={`${idx}`}
                        className={'cursor-pointer'}
                        {...props}
                    />
                </Flex.HStack>
            }
        </div>
    )
}

export default ArticleImg