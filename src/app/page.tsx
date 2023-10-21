import { headerImages } from '@/values/headerImages'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen h-[2000px]">
      <div className={'w-full'}>
        <Image
          src={headerImages[0]}
          objectFit={'cover'}
          sizes={"100%"}
          alt='bg'
        />
      </div>
    </main>
  )
}
