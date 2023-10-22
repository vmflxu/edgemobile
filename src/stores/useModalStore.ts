import { create } from 'zustand';

export type ModalStore = {
    isOpenImgDetailModal: boolean,
    setIsOpenImgDetailModal: (payload: boolean) => void,
}
const useModalStore = create<ModalStore>((set) => ({
    isOpenImgDetailModal: false,
    setIsOpenImgDetailModal: (payload: boolean) => set({
        isOpenImgDetailModal: payload,
    }),
}));

export default useModalStore;