/**
 * Navbar component that renders a header with the application's title and a shopping cart icon.
 * The shopping cart icon displays the number of items in the cart (phones) using the 'phones' state.
 * When the icon is clicked, the drawer component is toggled.
 * The component also uses the 'useSelector' hook to get the 'counter' state from the Redux store.
 *
 * @component
 * @example
 * <Navbar />
 *
 * @returns {JSX.Element} - Rendered Navbar component.
 */

import React from 'react';
import { Box, AppBar, Toolbar, Typography, Badge, IconButton } from '@mui/material';
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Drawers from '../darwer/Drawer';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const phones = useSelector((state: any) => state.counter?.value);

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
                        <IconButton disabled={phones?.length === 0} onClick={() => setOpen(!open)} aria-label="shopping-chart" sx={{ color: "white" }}>
                            <Badge color="error" badgeContent={phones?.length}>
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawers status={open} setstate={setOpen} />
        </Box>
    );
};

export default Navbar;