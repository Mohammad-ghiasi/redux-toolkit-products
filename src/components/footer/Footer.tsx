import { AppBar, Box, Divider, Typography } from "@mui/material";

export default function Footer() {
    return (
        <>
            <Box color="main">
                <hr />
                <Typography sx={{marginTop: "12px"}} align="center" variant="body1">
                    Created by mohammad-ghiasi
                </Typography>
                <Typography align="center" variant="body1">
                    © {new Date().getFullYear()}, Built with
                </Typography>
            </Box>
        </>
    )
}