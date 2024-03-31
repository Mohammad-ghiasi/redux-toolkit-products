"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import Link from 'next/link';
import Drawers from '../Drawer';

export default function Navbar() {
    const [open, setOpen] = React.useState(false);


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ display: "flex", justifyContent: "start", }}>
                    <Link href="/">
                        <Typography variant="h6" component="div" >
                            Products
                        </Typography>
                    </Link>
                    <Box className="ms-14">
                        {/* <Link href="/shooping-chart">
                            <Badge color="error" badgeContent={count}>
                                <ShoppingCartIcon />
                            </Badge>
                        </Link> */}
                        <IconButton onClick={()=> setOpen(!open)} aria-label="shopping-chart" sx={{color: "white"}}>
                            <ShoppingCartIcon />
                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>
            <Drawers status={open} setstate={setOpen}/>
        </Box>
    );
}