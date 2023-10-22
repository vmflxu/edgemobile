import { StaticImageData } from 'next/image';
import { create } from 'zustand';

export type ImgDetail = {
    target: StaticImageData | undefined,
    setTarget: (payload: StaticImageData | undefined) => void,
    clearTarget: () => void,
}
const useImgDetail = create<ImgDetail>((set) => ({
    target: undefined,
    setTarget: (payload: StaticImageData | undefined) => set({
        target: payload,
    }),
    clearTarget: () => set({
        target: undefined
    })
}));

export default useImgDetail;