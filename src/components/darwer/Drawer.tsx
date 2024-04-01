"use client"
import { deletephone, productsType } from '@/reduxconfig/slices/productslice';
import { Box, Button, Drawer, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DeleteIcon from '@mui/icons-material/Delete';

interface propValue {
    status: boolean;
    setstate: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface item {
    id: number;
    name: string;
    price: number;
    image: string;
}
export default function Drawers({ status, setstate }: propValue) {
    const phones = useSelector((state: any) => state.counter?.value);
    
    const dispatch = useDispatch()
    return (
        <>
            <Drawer open={status} anchor={'right'} onClose={() => setstate(!status)}>
                <Box>
                    {phones?.map((product: item) =>
                        <Box key={product.id} className="flex flex-col md:flex-row-reverse max-md:space-y-4 items-center justify-between space-x-3 my-4 mx-2 shadow-md ">
                            <Box className="w-[175px] h-[160px] relative">
                                <Image
                                    alt={product?.image}
                                    src={product?.image}
                                    // width={150}
                                    // height={150}
                                    fill
                                    loading='lazy'
                                />
                            </Box>
                            <Typography variant='h6' sx={{ color: "gray" }}>
                                {product?.name}
                            </Typography>
                            <Typography variant='h6' >
                                {product?.price}
                            </Typography>
                            <Box className="flex justify-center flex-col-reverse md:flex-row">
                                <IconButton onClick={() => {dispatch(deletephone(product.id))}} color="error">
                                    <DeleteIcon />
                                </IconButton>
                                <Button variant='outlined' color='primary' startIcon={<AttachMoneyIcon />}>Payment</Button>
                            </Box>
                        </Box>

                    )}
                </Box>
                {phones?.length === 0 ?
                    (<Typography variant='h4' sx={{ color: "gray" }}>There is No Item!</Typography>) : null}
            </Drawer>
        </>
    )
}


// moh