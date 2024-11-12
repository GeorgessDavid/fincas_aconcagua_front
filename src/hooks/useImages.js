import { useState, useEffect } from 'react';

export const useImages = () => {
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);
    const [count, setCount] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('https://api.fincasdeaconcagua.com.ar/images');
                const data = await response.json();
                setImages(data.images);
                setCount(data.count)
            } catch (err) {
                setError(err);
                console.error(err)
            } finally {
                setLoading(false);
            }
        }
        fetchImages();
    },[]);

    return { loading, images, error, count };
}