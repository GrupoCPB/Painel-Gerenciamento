/* eslint-disable @next/next/no-img-element */
import { Grid, MenuItem } from "@mui/material";

type CustomMenuItemType = {
    value: string,
    source: string
}

export default function CustomMenuItem({ value, source }: CustomMenuItemType) {
    return (
        <>
            <Grid container columns={10}>
                <Grid item xs={2} display='flex' justifyContent='center'>
                    <img src={source} alt='logo'></img>
                </Grid>

                <Grid item xs={8} sx={{ fontWeight: '600', color: '#7A798B' }}>
                    {value}
                </Grid>
            </Grid>
        </>
    )
}