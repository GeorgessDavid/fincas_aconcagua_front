import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const WhatsAppButton = () => {
    return (
        <div className="whatsapp-button" title="WhatsApp">
            <a><FontAwesomeIcon icon={faWhatsapp} size="2xl" /></a>
        </div>
    );
}