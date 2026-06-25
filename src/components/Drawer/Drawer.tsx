'use client';

import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, WhatsApp, Mail } from "@/assets/constants/links";

type NavData = {
    title: string;
    path: string;
}

type DrawerProps = {
    navData: NavData[];
}
const DrawerMenu = ({ navData }: DrawerProps) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    return (
        <div>
            <IconButton onClick={handleOpen}>
                <span className="material-symbols-outlined text-primary! text-4xl! cursor-pointer">menu</span>
            </IconButton>
            <Drawer
                sx={{
                    '& .MuiDrawer-paper': {
                        width: '70%',
                        boxSizing: 'border-box'
                    }
                }}
                anchor='left'
                open={open}>
                <DrawerHeader>
                    <div className='flex items-center gap-2'>
                        <Image src="/fincas_logo.webp" alt="logo" width={100} height={100} className="h-auto" />
                    </div>
                    <IconButton onClick={handleClose}>
                        <CloseIcon sx={{ color: '#005725' }} />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <DrawerBody>
                    <List>
                        {navData.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemButton component={Link} href={item.path}>
                                    <ListItemText primary={item.title} sx={[{
                                        color: '#005725',
                                        textTransform: "uppercase",
                                        fontSize: "1.5rem"
                                    }]} onClick={handleClose} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </DrawerBody>
                <Divider />
                <DrawerFooter>
                    <div className='flex items-center gap-2'>
                        <Link href={Instagram} target='_blank'><InstagramIcon sx={[{ color: '#005725', margin: "0 0.5rem", fontSize: "2rem" }]} /></Link>
                        <Link href={Facebook} target='_blank'><FacebookIcon sx={[{ color: '#005725', margin: "0 0.5rem", fontSize: "2rem" }]} /></Link>
                        <Link href={WhatsApp} target='_blank'><WhatsAppIcon sx={[{ color: '#005725', margin: "0 0.5rem", fontSize: "2rem" }]} /></Link>
                        <Link href={Mail} target="_blank"><MailIcon sx={[{ color: '#005725', margin: "0 0.5rem", fontSize: "2rem" }]} /></Link>
                    </div>
                </DrawerFooter>
            </Drawer>
        </div>
    )
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
}));

const DrawerBody = styled('div')(({ theme }) => ({
    height: "100%",
    ...theme.mixins.toolbar,

}));

const DrawerFooter = styled('div')(({ theme }) => ({
    display: 'flex',
    position: 'relative',
    bottom: 0,
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'center',
}));

export default DrawerMenu;
