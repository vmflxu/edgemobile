import { useEffect, useState } from "react"

export const useScroll = () => {
    const [bodyOffset, setBodyOffset] = useState<DOMRect>(
        document.body.getBoundingClientRect()
    );

    const [scrollY, setScrollY] = useState(bodyOffset.top);

    const listener = () => {
        setBodyOffset(document.body.getBoundingClientRect());
        setScrollY(-bodyOffset.top);
    }

    useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    });

    return scrollY;
}