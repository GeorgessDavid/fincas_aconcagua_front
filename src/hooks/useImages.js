import { useState, useEffect } from 'react';

export const useImages = () => {
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);
    const [count, setCount] = useState([]);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(10)
        const fetchImages = async () => {
            setProgress(30)
            try {
                setProgress(50)
                const response = await fetch('https://api.fincasdeaconcagua.com.ar/images');
                setProgress(80)
                const data = await response.json();
                setProgress(100)
                setImages(data.images);
                setCount(data.count)
            } catch (err) {
                setProgress(100)
                setError(err);
                console.error(err)
            } finally {
                setLoading(false);
            }
        }
        fetchImages();
    },[]);

    return { loading, images, error, count, progress };
}