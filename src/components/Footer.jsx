import { YouTube, Facebook, Instagram, LinkedIn } from '@mui/icons-material';
// import { TikTok } from './TikTok';

export const Footer = () => {
    return (
        <footer>
            <div className="footerContainer">
                <div className="logoContainer">
                    <img src="fincas_cut_white.png" alt="fincas_cut_white.png" />
                    <span>Un proyecto de <strong>Urbanizadora Tres Pinos S.A.</strong></span>
                </div>
                <div className="socialContainer">
                    <div>
                        <Facebook />
                        <a href='https://www.facebook.com/fincasdeaconcagua' target='_blank'>Fincas de Aconcagua</a>
                    </div>
                    <div>
                        <Instagram />
                        <a href='https://www.instagram.com/fincasdeaconcagua' target='_blank'>fincasdeaconcagua</a>
                    </div>
                    <div>
                        <YouTube />
                        <a href='#' target='_blank'>Fincas de Aconcagua</a>
                    </div>
                    <div>
                        <LinkedIn />
                        <a href='#' target='_blank'>Fincas de Aconcagua</a>
                    </div>
                </div>
            </div>
            <div className="foqo">
                <span>Powered by</span>
                <img src="/foqo.png" alt="foqo.png" />
            </div>
        </footer>
    )
}