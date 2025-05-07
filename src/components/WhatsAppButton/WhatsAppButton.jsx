import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import './WhatsAppButton.css';

export const WhatsAppButton = () => {
    const handleRedirect = () => {
        window.open('https://wa.me/+5491167928549', '_blank');
    }

    return (
        <div className="wp-wrapper" onClick={handleRedirect}>
            <div className="wp-wrapper-button">
                <div className="wp-button">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </div>
                <span>Contáctanos</span>
            </div>
        </div>
    );
}