import { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material'
import { styled } from '@mui/material/styles';
import { useMediaScroll } from '../hooks/useMediaScroll';
import MenuIcon from '@mui/icons-material/Menu';


export const MobileHeader = () => {
    const [open, setOpen] = useState(false);
    const { scrolled } = useMediaScroll(50);
    const navLinks = [
        { name: 'LOTES', link: '/#lotes' },
        { name: 'GALERIA', link: '/#galeria' },
        { name: 'CONTACTO', link: '/#contacto' },
        { name: 'UBICACIÓN', link: '/#ubicacion' },
    ]

    const handleOpen = () => setOpen(!open);
    // const handleClose = () => setOpen(false);

    // const DrawerHeader = styled('div')(({ theme }) => ({
    //     ...theme.mixins.toolbar,
    //     display: 'flex',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     padding: theme.spacing(0, 1),
    // }));

    const DrawerBody = styled('div')(({ theme }) => ({
        height: '100%',
        ...theme.mixins.toolbar,
    }))

    return (
        <header className={scrolled ? 'scrolled' : null}>
            <a href='/'><img src='/fincas_cut.svg' /></a>
            <IconButton onClick={handleOpen}>
                <MenuIcon sx={[{
                    color: '#005725',
                    fontSize: '2rem'
                }]}/>
            </IconButton>
            <Drawer anchor='top' open={open} sx={{
                position: 'fixed',
                width: 400,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: '100%',
                    top: '6%',
                    boxShadow: 'border-box',
                    backgroundColor: 'white'
                },
            }}>
                <Divider />
                <DrawerBody>
                    <List>
                        {navLinks.map((link, index) => (
                            <ListItem key={index}>
                                <ListItemButton component='a' href={link.link}>
                                    <ListItemText primary={link.name} onClick={handleOpen} sx={[{
                                        color: "#005725",
                                        fontWeight: "bold",
                                        fontSize: "1.5rem",
                                    }]}  />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </DrawerBody>
            </Drawer>
        </header>
    )
}