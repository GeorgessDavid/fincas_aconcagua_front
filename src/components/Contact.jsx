import { TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { LoadingButton } from '@mui/lab';

export const Contact = () => {
    return (
        <section id="contacto">
            <h2>Contacto</h2>
            <div>
                <div className="form-container">
                    <form>
                        <TextField name="name" label="Nombre *" variant="outlined" margin="normal" fullWidth color="success" />
                        <TextField name="lastname" label="Apellido *" variant="outlined" margin="normal" fullWidth color="success" />
                        <TextField name="email" label="Correo electrónico *" variant="outlined" margin="normal" fullWidth color="success" />
                        <TextField name="phone" label="Teléfono *" variant="outlined" margin="normal" fullWidth color="success" />
                        <TextField name="message" label="Mensaje *" variant="outlined" margin="normal" fullWidth color="success" multiline rows={4} />
                    </form>
                    <div className="button-section">
                        <span className="contact-span">* Campos obligatorios.</span>
                        <LoadingButton
                            endIcon={<SendIcon />}
                            loadingPosition="end"
                            variant="contained"
                            color="success"
                        >
                            Enviar
                        </LoadingButton>
                    </div>
                </div>
                <div className="contact-text">
                    <p>
                        En Fincas de Aconcagua, estamos aquí para ayudarte a dar el próximo paso hacia una vida tranquila y en armonía con la naturaleza. Ya sea que quieras conocer más detalles sobre los lotes disponibles, el proceso de adquisición, o simplemente necesitas más información sobre el proyecto, nuestro equipo está a tu disposición.
                        <br/>
                        <br/>
                        Completa el formulario de contacto, y uno de nuestros asesores se pondrá en contacto contigo a la brevedad para responder todas tus preguntas. También puedes comunicarte directamente por teléfono o correo electrónico. ¡Estamos emocionados de ser parte de esta nueva etapa en tu vida!
                    </p>
                </div>
            </div>
        </section>
    )
}