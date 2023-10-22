import { Flex } from '@/style/common/Flex'
import React from 'react'

const FooterLeftSide = () => {
    return (
        <Flex.VStack as={'section'} className='flex-col'>
            <div className={'font-light'}>사업자등록번호: 123-45-67890</div>
            <div className={'font-light'}>대표이사: 홍길동</div>
            <div className={'font-light'}>이메일: abcd1234@gmail.com</div>
            <div className={'font-light'}>주소: 경기도 ㅇㅇ시 XX구 YY로 47</div>
            <div className={'font-light'}>대표전화: 010-123-1234</div>
        </Flex.VStack>
    )
}

export default FooterLeftSide