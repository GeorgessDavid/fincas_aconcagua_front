import { TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { LoadingButton } from '@mui/lab';
import { useContact } from '../hooks/useContact';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

export const Contact = () => {
    const { sendContact, loading, errors, resetErrors, disabled, sent } = useContact();
    const { handleSubmit, register, reset } = useForm();

    const onlyNumbers = (e) => {
        const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];

        if (allowedKeys.includes(e.key)) {
            return;
        }

        if (e.key < '0' || e.key > '9') {
            e.preventDefault();
        }
    }

    useEffect(() => {
        if (sent) {
            reset();
            resetErrors();
        }
    }, [sent, reset, resetErrors])
    return (
        <section id="contacto">
            <h2>Contacto</h2>
            <div className="contact-ubication-container">
                <div className="form-container">
                    <form onSubmit={handleSubmit((values) => {
                        sendContact(values)
                        if (sent) {
                            reset()
                        }
                    })}>
                        <TextField
                            name="name" label="Nombre"
                            autoComplete="new-name"
                            variant="outlined" margin="normal" fullWidth color="success"
                            required
                            error={!!errors.name} helperText={errors?.name?.msg}
                            {...register('name', {
                                onChange: () => {
                                    resetErrors();
                                }
                            })}
                        />
                        <TextField
                            name="lastname" label="Apellido"
                            autoComplete="new-lastname"
                            required
                            variant="outlined" margin="normal" fullWidth color="success"
                            error={!!errors.lastname} helperText={errors?.lastname?.msg}
                            {...register('lastname', {
                                onChange: () => {
                                    resetErrors();
                                }
                            })}

                        />
                        <TextField
                            name="email" label="Correo electrónico"
                            required
                            autoComplete="new-email"
                            variant="outlined" margin="normal" fullWidth color="success"
                            error={!!errors.email} helperText={errors?.email?.msg}
                            {...register('email', {
                                onChange: () => {
                                    resetErrors();
                                }
                            })}
                        />
                        <TextField
                            name="phone" label="Teléfono"
                            autoComplete="new-phone"
                            required
                            variant="outlined" margin="normal" fullWidth color="success"
                            error={!!errors.phone} helperText={errors?.phone?.msg} onKeyDown={onlyNumbers} 
                            {...register('phone', {
                                onChange: () =>{
                                    resetErrors();
                                }
                            })} 
                            />
                        <TextField
                            name="message" label="Mensaje"
                            autoComplete="new-message"
                            required
                            variant="outlined" margin="normal" fullWidth color="success" multiline rows={4}
                            error={!!errors.message} helperText={errors?.message?.msg} 
                            {...register('message', {
                                onChange: () =>{
                                    resetErrors();
                                }
                            })} 
                            />
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