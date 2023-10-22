import { headerImages } from '@/values/headerImages'
import Image from 'next/image'
import HomeImages from './_fragments/HomeImages'
import { Flex } from '@/style/common/Flex'
import ContentSection from './_fragments/home/ContentSection'
import PictureModal from './_fragments/modal/ImgDetailModal'

export default function Home() {
  return (
    <>
      <HomeImages />
      <Flex.HStack className={'w-full h-fit pb-16'}>
        <aside className={'invisible flex-1 md:visible'}></aside>
        <ContentSection />
        <aside className={'invisible flex-1 md:visible'}></aside>
      </Flex.HStack>
      <PictureModal />
    </>
  )
}
