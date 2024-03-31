"use client"
import { decrement, increment, incrementByAmount } from "@/reduxconfig/slices/numberslice";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function Redux(): JSX.Element {
    const count = useSelector((state: any) => state.counter?.value)
    const dispatch = useDispatch()
    return (
        <>
            <Typography variant="h5">
                Redux page...
            </Typography>

            <div>
                <div>
                    <button
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>
                    <button
                        aria-label="Increment value"
                        onClick={() => dispatch(incrementByAmount(12))}
                    >
                        Increment
                    </button>
                    <span>{count}</span>
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </>
    )
}