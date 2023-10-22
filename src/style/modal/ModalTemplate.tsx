"use client"
import React, { useState } from 'react'
import { Flex } from '../common/Flex'

const ModalTemplate = ({
    isOpen,
    onClose,
    children,
}: {
    isOpen: boolean,
    onClose: (p: boolean) => void,
    children: React.ReactNode
}) => {
    // const [modalStyle, setModalStyle] = useState<string>('w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.5)] z-[5000] fixed');
    const onCloseModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.currentTarget === e.target && onClose(false);
    }
    return (
        <>
            {isOpen && <Flex.Center
                className={'w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.5)] z-[5000] fixed'}
                onClick={onCloseModal}>
                <Flex.Center className={'w-fit h-fit p-8 bg-white rounded-2xl'}                >
                    {children}
                </Flex.Center>
            </Flex.Center>}
        </>
    )
}

export default ModalTemplate