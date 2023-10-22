import { StaticImageData } from "next/image"
import home0 from '$/images/home/home0.jpg';
import home1 from '$/images/home/home1.jpg';
import home2 from '$/images/home/home2.jpg';
import home4 from '$/images/home/home4.jpg';

export type HomeArticle = {
    title: string,
    content: string,
    guideUrl?: string,
    pictures?: StaticImageData,
}

export const homeArticleList: HomeArticle[] = [
    {
        title: "- 엣지이동식주택이 생각하는 건축이란?",
        content: `겨울에는 따뜻해야 하고, 여름에는 시원해야 합니다. 
        오래되지 않았다면 자잘한 문제가 없이 건축물 내의 모든 시설을 누릴 수 있어야 합니다.
        '남'이 사용한다는 생각을 버리고, '내'가 사용한다는 입장에서 제품을 제작하고,
        현장에 설치하는 것이 가장 본질적이고 중요한 가치라고 생각합니다.
        외관은 깔끔하고 아름답고 유지보수가 잘 되어야 합니다. 
        값싼 자재로 마진을 남기기 보다는 적절한 품질로 하나의 구매를 더 이끌고 싶습니다.`,
        guideUrl: "/about",
        pictures: home0,
    },
    {
        title: "- 엣지이동식주택은 어떤식으로 작업을 할까요?",
        content: `먼저 고객님의 요구사항을 귀 기울여 듣습니다.
        저렴한 가격을 원하시는 고객에게는 가성비 상품을 소개드리며, 추가적으로 원하시는 옵션과 용도 등을 들어 적용합니다.
        하지만, 저렴한 가격은 그만큼 단열의 한계가 있거나 부족한 부분이 있습니다.
        이러한 부분에 대해서 잘 아시고, 좀 더 고급진 제품을 원하시는 고객님은
        추가적인 요구사항을 반영하여 가격을 책정하고 납품합니다.
        같은 가격이면 가장 좋은 자재를 사용해서 하자가 없도록 노력합니다.
        흔한 '가격 후려치기'를 거부합니다. 30년 건축 경력의 대표님의 깐깐함은 이 동네에서 유명합니다.`,
        guideUrl: "/manufacture",
        pictures: home4,
    },
]