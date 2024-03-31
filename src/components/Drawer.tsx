import { productsType } from '@/reduxconfig/slices/productslice';
import { Box, Drawer, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
                        <Box>
                            <Image
                                alt={product?.image}
                                src={product?.image}
                                width={50}
                                height={60}
                            />
                        </Box>
                    )}
                </Box>
                {phones?.length === 0 ?
                    (<Typography variant='h4' sx={{ color: "gray" }}>There is No Item!</Typography>) : null}
                ali
            </Drawer>
        </>
    )
}


//onClose={toggleDrawer(false)}