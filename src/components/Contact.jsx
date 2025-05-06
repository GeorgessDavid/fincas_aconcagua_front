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
                            name="name" label="Nombre" 
                            onChange={resetErrors}
                            {...register('name')} required
                            variant="outlined" margin="normal" fullWidth color="success" 
                            error={!!errors.name} helperText={errors?.name?.msg} 
                        />
                        <TextField
                            name="lastname" label="Apellido" 
                            onChange={resetErrors}
                            {...register('lastname')} required
                            variant="outlined" margin="normal" fullWidth color="success" 
                            error={!!errors.lastname} helperText={errors?.lastname?.msg}  />
                        <TextField
                            name="email" label="Correo electrónico" 
                            onChange={resetErrors}
                            {...register('email')} required
                            variant="outlined" margin="normal" fullWidth color="success"
                            error={!!errors.email} helperText={errors?.email?.msg}  />
                        <TextField
                            name="phone" label="Teléfono" 
                            onChange={resetErrors}
                            {...register('phone')} required
                            variant="outlined" margin="normal" fullWidth color="success"
                            error={!!errors.phone} helperText={errors?.phone?.msg}  onKeyDown={onlyNumbers} />
                        <TextField
                            name="message" label="Mensaje" 
                            onChange={resetErrors}
                            {...register('message')} required
                            variant="outlined" margin="normal" fullWidth color="success" multiline rows={4}
                            error={!!errors.message} helperText={errors?.message?.msg}  />
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