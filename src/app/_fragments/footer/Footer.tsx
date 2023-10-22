import { Flex } from '@/style/common/Flex'
import React from 'react'
import FooterLeftSide from './FooterLeftSide'
import FooterRightSide from './FooterRightSide'
import VerticalLine from './VerticalLine'

const Footer = () => {
    return (
        <footer
            className={'w-full h-[300px] bg-slate-700 text-white'}
        >
            <Flex.HCenter
                className={'w-[1200px] h-full mx-auto py-8 gap-6'}
            >
                <FooterLeftSide />
                <VerticalLine />
                <FooterRightSide />
            </Flex.HCenter>
        </footer>
    )
}

export default Footer