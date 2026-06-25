'use client';

import { useState, useEffect } from 'react';
import { API_URL } from '@/constants';

export type ImageData = {
    id: number;
    title: string;
    link: string;
}

export const useImages = (quantity: number) => {
    const [images, setImages] = useState<ImageData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const controller = new AbortController();
        const load = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_URL}/images?max=${quantity}`, { signal: controller.signal });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const data = await response.json();
                setImages(data.images);
            } catch (error) {
                if ((error as { name: string }).name !== 'AbortError') {
                    console.error('Error fetching images:', error);
                }
            } finally {
                setLoading(false);
            }
        };

        void load();

        return () => controller.abort();
    }, [quantity]);

    return { images, loading };
}