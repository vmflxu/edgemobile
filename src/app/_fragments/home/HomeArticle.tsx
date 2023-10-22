import { Flex } from '@/style/common/Flex'
import React from 'react'
import ArticleTitle from './ArticleTitle'
import ArticleContent from './ArticleContent'
import { HomeArticle } from '@/values/homeArticleList'

const HomeArticle = ({ article, idx }: { article: HomeArticle, idx: number }) => {
    return (
        <Flex.VStack as='article' className={'w-full'}>
            <ArticleTitle title={article.title} />
            <ArticleContent
                content={article.content}
                images={article.pictures}
                idx={idx}
            />
        </Flex.VStack>
    )
}

export default HomeArticle