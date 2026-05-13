'use client';

import { useState, useEffect, useCallback } from 'react';
import { API_URL } from '@/constants';

export type ImageData = {
    id: number;
    title: string;
    link: string;
}

export const useImages = () => {
    const [images, setImages] = useState<ImageData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchImages = useCallback(async() => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/images`);
            const data = await response.json();
            setImages(data.images);
        } catch (error) {
            console.error('Error fetching images:', error);
        } finally {
            setLoading(false);
        }
    }, []);
    
    useEffect(() => {
        fetchImages();
    }, [fetchImages]);

    return { images, loading };
}