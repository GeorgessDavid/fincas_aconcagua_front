'use client';

import { useState, useCallback } from 'react';

type Error = {
    message: string;
}

export interface Contact {
    email: string;
    name: string;
    phone: string | number;
    lastname: string;
    message: string;
}

export const useContact = () => {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

    const sendContact = useCallback(async ({ email, name, phone, lastname, message }: Contact) => {
        setError(undefined);
        setSent(false);
        setLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, name, phone, lastname, message })
            });
            
            if(!response.ok && response.status === 400) {
                throw new Error('Datos inválidos. Por favor, verifica la información proporcionada.');  
            }

            if (!response.ok) {
                throw new Error('Error al enviar el mensaje');
            }
            
            setSent(true);
        } catch (err: unknown) {
            setError((err as Error).message || 'Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        sendContact,
        sent,
        loading,
        error
    }

}