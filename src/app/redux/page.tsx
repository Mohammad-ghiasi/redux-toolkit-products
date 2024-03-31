"use client"
// import {  } from "@/reduxconfig/slices/productslice";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function Redux(): JSX.Element {
    const count = useSelector((state: any) => state.counter?.value)
    // console.log(count);
    
    // const dispatch = useDispatch()
    return (
        <>
            <Typography variant="h5">
                Redux page...
            </Typography>
        </>
    )
}