'use client'
import store from '@/stores/store'
import ModalTemplate from '@/style/modal/ModalTemplate'
import Image from 'next/image'
import React from 'react'

const ImgDetailModal = () => {
    const { isOpenImgDetailModal, setIsOpenImgDetailModal } = store.useModalStore();
    const { target } = store.useImgDetail();

    return (
        <ModalTemplate
            isOpen={isOpenImgDetailModal}
            onClose={setIsOpenImgDetailModal}
        >
            {!!target && <Image src={target} alt="Selected" width={600} height={600} className={'rounded-2xl shadow-basic shadow-slate-500'} />}
        </ModalTemplate>
    )
}

export default ImgDetailModal