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
            </div>
        </section>
    )
}