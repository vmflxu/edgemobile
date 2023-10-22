import { Flex } from '@/style/common/Flex'
import React from 'react'
import about_1 from '$/images/about/about_1.jpg'
import Image from 'next/image'

const About = () => {
    return (
        <Flex.VCenter className={'w-full h-fit py-16 bg-slate-800'}>
            <Flex.HStack className={'text-5xl font-extrabold w-[1200px] text-white'}>엣지이동식주택을 소개합니다!</Flex.HStack>
            <Flex.HStack className={'w-[1200px] h-[600px] text-white mt-16 gap-2'}>
                <Flex.VStack className={'w-full h-full gap-2'}>
                    <div className='h-full bg-gray-600 relative'>
                        <Image src='/images/about/about_1.jpg' objectFit={'cover'} alt='1' fill />
                    </div>
                </Flex.VStack>
                <Flex.HStack className={'w-full h-full gap-2'}>
                    <Flex.VStack className={'w-full h-full gap-2'}>
                        <div className='h-full bg-gray-600 relative'>
                            <Image src='/images/about/about_2.jpg' objectFit={'cover'} alt='2' fill />
                        </div>
                        <div className='h-full bg-gray-600 relative'>
                            <Image src='/images/about/about_3.jpg' objectFit={'cover'} alt='3' fill />
                        </div>
                    </Flex.VStack>
                </Flex.HStack>
            </Flex.HStack>

            <div className={'w-[1200px] text-3xl font-semibold text-white mt-12 whitespace-pre-line'}>
                저희 엣지이동식주택은 상가, 주택, 공장 등의 다양한 건물들을 지어온 30년 경력의 건축사입니다.<br />
                철골조, 목조, 철근콘크리트조 등, 골조에 따라 적합한 자재와 구조를 제안합니다.<br />
                <br />
                30여년간 다양한 건물을 지어왔고, 최근에는 농막과 이동식주택에 역량을 집중하고 있습니다.<br />
                귀농, 주말농장, 별장 등을 고려하시는 분들에게는,<br />
                큰 돈으로 건물을 짓는 리스크를 줄일 수 있는 좋은 기회가 될 것입니다.<br />
                <br /><br />친절하게 상담해드리겠습니다! 부담없이 전화주세요!
                <br />
                <span className={'text-red-300'}>엣지이동식주택: 010-0000-0000</span>
            </div>
        </Flex.VCenter >
    )
}

export default About