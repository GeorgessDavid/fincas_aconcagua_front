import { useState, useCallback } from 'react';
import { toast }  from 'react-toastify';


export const useContact = () => {
    const [errors, setErrors ] = useState({});
    const [loading, setLoading] = useState(false);
    const [status, setStatus ] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const sendContact = useCallback(async ({email, name, lastname, phone, message}) => {
        setLoading(true);
        try {
            setDisabled(true);
            const response = await fetch('https://api.fincasdeaconcagua.com.ar/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, name, lastname, phone, message}),
            });
            const data = await response.json();

            if(response.status != 201){
                const notify = () => toast.warning('Error! Los datos enviados tienen errores. Por favor, revisa los campos.');
                notify();
                setErrors(data.errors);
            }

            if(response.status === 201){
                const notify = () => toast.success('Mensaje enviado con éxito.');
                notify();
            }

            setStatus(data.status);
        } catch (error) {
            const notify = () => toast.error('Error al enviar el mensaje');
            notify();
            console.error(error);
            setErrors(error);
        }finally{
            setLoading(false);
            setTimeout(() => {
                setDisabled(false)
            }, 10000)
        }
    },[])

    const resetErrors = () => {setErrors({})}

    return {
        errors,
        loading,
        status,
        sendContact,
        resetErrors,
        disabled
    }
} 