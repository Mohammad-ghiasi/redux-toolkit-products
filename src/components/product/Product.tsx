// Import necessary modules and components
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Divider } from '@mui/material';
import { ShooseItem } from '@/types/shooItem'; // Import the type for the product data
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addphone } from '@/reduxconfig/slices/productslice'; // Import the Redux action for adding a phone to the shopping cart
import toast, { Toaster } from 'react-hot-toast'; // Import toast notifications

// Define the Product component, which displays a product card with product details and an "Add to Cart" button
export default function Product({ id, name, price, image }: ShooseItem) {
    const dispatch = useDispatch(); // Get the Redux dispatch function to dispatch the addphone action
    const notify = () => { // Define a function to show a toast notification and dispatch the addphone action
        toast.success('phone add to shopping chart!');
        dispatch(addphone({id, name, price, image}));
    };

    // Return the product card component
    return (
        <Card sx={{ maxWidth: 300 }} className="shadow-lg shadow-gray-400">
            {/* Use a Link component to navigate to the Redux page when the product card is clicked */}
            <Link href="/redux">
                <CardActionArea>
                    <CardMedia
                        sx={{ padding: "12px" }}
                        component="img"
                        height="140"
                        image={image}
                        alt={name}
                    />
                    <CardContent className="flex flex-col space-y-3">
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        <Divider />
                        <Typography gutterBottom className='font-bold flex flex-row items-center'>
                            price: {price} <AttachMoneyIcon />
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                {/* Define the "Add to Cart" button, which calls the notify function when clicked */}
                <Button onClick={notify} className="font-bold" size="small" color="primary" variant="contained" startIcon={<AddShoppingCartIcon />} sx={{ marginBottom: "12px" }}>
                    Add to Chart
                </Button>
                <Toaster /> {/* Add a Toaster component to display the toast notification */}
            </CardActions>
        </Card>
    );
}