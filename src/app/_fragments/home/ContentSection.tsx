import { Flex } from '@/style/common/Flex'
import React from 'react'
import HomeArticle from './HomeArticle'
import { homeArticleList } from '@/values/homeArticleList'

const ContentSection = () => {
    return (
        <Flex.VCenter as='section' className={'w-[1200px] gap-36'}>
            {homeArticleList.map((item, idx) => {
                return <HomeArticle article={item} key={item.title} idx={idx} />
            })}
        </Flex.VCenter>
    )
}

export default ContentSection