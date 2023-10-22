"use client"
import { Flex } from '@/style/common/Flex'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import VerticalLine from '../footer/VerticalLine'
import ArticleImg from './ArticleImg'
import store from '@/stores/store'

const ArticleContent = ({
    content,
    images,
    idx,
}: {
    content: string,
    images?: StaticImageData,
    idx: number,
}) => {
    const { setTarget } = store.useImgDetail();
    const { setIsOpenImgDetailModal } = store.useModalStore();
    const imgClickHandler = () => {
        setTarget(images);
        setIsOpenImgDetailModal(true);
    }
    return (
        <Flex.HStack

            className={'font-normal w-full border-b-2 border-b-slate-700 py-4'}>
            {idx % 2 === 1
                ? (
                    <>
                        {!!images && <ArticleImg idx={idx} img={images} onClick={imgClickHandler} />}
                        <VerticalLine />
                        <div className={'w-full px-4 whitespace-pre-line break-words'}>
                            {content}
                        </div>
                    </>
                )
                : (
                    <>
                        <div className={'w-full px-4 whitespace-pre-line break-words'}>
                            {content}
                        </div>
                        <VerticalLine />
                        {!!images && <ArticleImg idx={idx} img={images} onClick={imgClickHandler} />}
                    </>
                )}

        </Flex.HStack>
    )
}

export default ArticleContent