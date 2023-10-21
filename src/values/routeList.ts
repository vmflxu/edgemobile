export type RouteInfo = {
    title: string,
    url: string,
}
export const routes: RouteInfo[] = [
    {
        title: '처음으로',
        url: '/',
    },
    {
        title: '회사소개',
        url: '/about',
    },
    {
        title: '작업방식',
        url: '/manufacture',
    },
    {
        title: '상품소개',
        url: '/products',
    },
    {
        title: '상담문의',
        url: '/contact',
    },
]