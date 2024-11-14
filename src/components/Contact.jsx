import { TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { LoadingButton } from '@mui/lab';

export const Contact = () => {
    return (
        <section id="contacto">
            <h2>Contacto</h2>
            <div>
                <form>
                    <TextField name="name" label="Nombre" variant="outlined" margin="normal" color="success" />
                    <TextField name="lastname" label="Apellido" variant="outlined" margin="normal" color="success" />
                    <TextField name="email" label="Correo electrónico" variant="outlined" margin="normal" color="success" />
                    <TextField name="phone" label="Teléfono" variant="outlined" margin="normal" color="success" />
                    <TextField name="message" label="Mensaje" variant="outlined" margin="normal" color="success" multiline rows={4} />
                </form>
                <LoadingButton
                    endIcon={<SendIcon />}
                    loadingPosition="end"
                    variant="contained"
                    color="success"
                >
                    Enviar
                </LoadingButton>
            </div>
        </section>
    )
}