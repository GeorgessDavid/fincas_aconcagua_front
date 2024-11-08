import propTypes from 'prop-types';
import { useState } from 'react';
import { Backdrop } from '@mui/material';

export const Image = ({ alt, srcSet }) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    return (
        <>
            <img alt={alt} srcSet={srcSet} onClick={handleOpen} />
            <Backdrop
                open={open}
                onClick={handleClose}
                sx={(theme) => ({
                    backgroundColor: '#212526d3', zIndex: theme.zIndex.drawer + 1
                })}
            >
                <img className="image-opened" alt={alt} srcSet={srcSet} />
            </Backdrop>
        </>
    );
}

Image.propTypes = {
    alt: propTypes.string.isRequired,
    srcSet: propTypes.string.isRequired
}