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
            <div>
                <p>
                En Fincas de Aconcagua, estamos aquí para ayudarte a dar el próximo paso hacia una vida tranquila y en armonía con la naturaleza. Ya sea que quieras conocer más detalles sobre los lotes disponibles, el proceso de adquisición, o simplemente necesitas más información sobre el proyecto, nuestro equipo está a tu disposición.

Completa el formulario de contacto, y uno de nuestros asesores se pondrá en contacto contigo a la brevedad para responder todas tus preguntas. También puedes comunicarte directamente por teléfono o correo electrónico. ¡Estamos emocionados de ser parte de esta nueva etapa en tu vida!
                </p>
            </div>
        </section>
    )
}