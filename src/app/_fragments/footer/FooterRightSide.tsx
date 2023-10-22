import { Flex } from '@/style/common/Flex'
import React from 'react'

const FooterRightSide = () => {
    return (
        <Flex.VStack as={'section'} className='flex-col flex-1'>
            <div className={'font-light'}>농막, 가설건축물, 공장 건축 전문</div>
            <div className={'font-light'}>기초공사부터 설치까지 한방에!</div>
            <div className={'font-light'}>저렴한 철골구조 농막부터 프리미엄 목조농막까지!</div>
            <div className={'font-light'}>언제든 마음 편히 연락주세요!</div>
            <div className={'font-light'}>010-123-1234 김철수 실장</div>
        </Flex.VStack>
    );
}

export default FooterRightSide