import { useState } from 'react';

export const useMediaScroll = (query) => {
    const [scrolled, setScrolled ] = useState(false);

    window.onscroll = () => {
        if (window.scrollY > query) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    return {scrolled};
}