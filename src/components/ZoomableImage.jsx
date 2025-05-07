import { useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogContent, Box } from '@mui/material';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function ZoomableImage({ src, alt = 'Imagen', height = '200px', width = 'auto', style = {} }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Box
                sx={{
                    cursor: 'pointer',
                    display: 'flex',
                    overflow: 'hidden',
                    borderRadius: 2,
                    justifyContent: 'center',
                    margin: '1rem'
                }}
                onClick={() => setOpen(true)}
            >
                <img src={src} alt={alt} height={height} width={width} style={style} />
            </Box>

            <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xl">
                <DialogContent sx={{ textAlign: 'center', p: 2 }}>
                    <Zoom>
                        <img
                            src={src}
                            alt={alt}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '80vh',
                                borderRadius: '8px',
                            }}
                        />
                    </Zoom>
                </DialogContent>
            </Dialog>
        </>
    );
}

ZoomableImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    style: PropTypes.object,
};

ZoomableImage.defaultProps = {
    alt: 'Imagen',
    height: '200px',
    width: 'auto',
    style: {},
};

export default ZoomableImage;
