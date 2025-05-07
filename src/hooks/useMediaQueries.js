import { useState, useEffect } from 'react';

export const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false); // Evita un estado inicial undefined.

    useEffect(() => {
        if (typeof window === 'undefined') return; // Asegura que estamos en el cliente.
        
        const mediaQueryList = window.matchMedia(query);
        const listener = (e) => setMatches(e.matches);

        setMatches(mediaQueryList.matches); // Configura el estado inicial.
        mediaQueryList.addEventListener('change', listener);

        return () => mediaQueryList.removeEventListener('change', listener);
    }, [query]);
    
    return matches;
};
