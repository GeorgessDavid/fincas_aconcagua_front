import { TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { LoadingButton } from '@mui/lab';
import { useContact } from '../hooks/useContact';
import { useForm } from 'react-hook-form';

export const Contact = () => {
    const { sendContact, loading, errors, resetErrors, disabled } = useContact();
    const { handleSubmit, register } = useForm();

    const onlyNumbers = (e) => {
        const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];

        if (allowedKeys.includes(e.key)) {
            return;
        }

        if (e.key < '0' || e.key > '9') {
            e.preventDefault();
        }
    }

    return (
        <section id="contacto">
            <h2>Contacto</h2>
            <div className="contact-ubication-container">
                <div className="form-container">
                    <form onSubmit={handleSubmit((values) => {
                        sendContact(values)
                    })}>
                        <TextField
                            name="name" label="Nombre *" {...register('name')}
                            variant="outlined" margin="normal" fullWidth color="success"
                            error={!!errors.name} helperText={errors?.name?.msg} onChange={resetErrors} />
                        <TextField
                            name="lastname" label="Apellido *" {...register('lastname')}
                            variant="outlined" margin="normal" fullWidth color="success"
                            error={!!errors.lastname} helperText={errors?.lastname?.msg} onChange={resetErrors} />
                        <TextField
                            name="email" label="Correo electrónico *" {...register('email')}
                            variant="outlined" margin="normal" fullWidth color="success"
                            error={!!errors.email} helperText={errors?.email?.msg} onChange={resetErrors} />
                        <TextField
                            name="phone" label="Teléfono *" {...register('phone')}
                            variant="outlined" margin="normal" fullWidth color="success"
                            error={!!errors.phone} helperText={errors?.phone?.msg} onChange={resetErrors} onKeyDown={onlyNumbers} />
                        <TextField
                            name="message" label="Mensaje *" {...register('message')}
                            variant="outlined" margin="normal" fullWidth color="success" multiline rows={4}
                            error={!!errors.message} helperText={errors?.message?.msg} onChange={resetErrors} />
                        <div className="button-section">
                            <span className="contact-span">* Campos obligatorios.</span>
                            <LoadingButton
                                type="submit"
                                endIcon={<SendIcon />}
                                loading={loading}
                                loadingPosition="end"
                                variant="contained"
                                color="success"
                                disabled={disabled}
                            >
                                Enviar
                            </LoadingButton>
                        </div>
                    </form>
                </div>
                <div id="ubicacion">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d827.630553622692!2d-58.75865083341368!3d-34.41019502215263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDI0JzM2LjkiUyA1OMKwNDUnMjkuMiJX!5e0!3m2!1ses-419!2sar!4v1731697751504!5m2!1ses-419!2sar" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" />
                </div>
            </div>
        </section>
    )
}