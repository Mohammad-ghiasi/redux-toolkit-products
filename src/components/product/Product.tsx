import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Divider } from '@mui/material';
import { ShooseItem } from '@/types/shooItem';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Link from 'next/link';

export default function Product({ id, name, price, image }: ShooseItem) {
    return (

        <Card sx={{ maxWidth: 300 }} className="shadow-lg shadow-gray-400">
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
                <Button className="font-bold" size="small" color="primary" variant="contained" startIcon={<AddShoppingCartIcon />} sx={{ marginBottom: "12px" }}>
                    Add to Chart
                </Button>
            </CardActions>
        </Card>
    );
}