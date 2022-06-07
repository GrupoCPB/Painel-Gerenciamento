import { Box, Grid, Button } from "@mui/material";
import { useEffect } from "react";
import Icon from "../Icon";

const BoxStyles = {
    paddingInline: '10px',
    paddingTop: '20px',
    paddingBottom: '100px',
    transition: 'transform 0.3s ease',
    '&.open': {
        transform: 'scaleX(1)',
    },
    '&.closed': {
        transform: 'scaleX(0)',
    },
}

const ButtonsStyles = {
    display: 'grid',
    gridTemplateColumns: 'auto 80%',
    placeItems: 'center start',
    textTransform: 'none',
    fontSize: '1.05rem',
    paddingInline: '15px 10px',
    color: '#5B5B5B',
    '& .MuiButton-startIcon': {
        marginRight: '20px'
    },

    '&.Mui-disabled': {
        background: '#D7DEE9',
        color: '#5B5B5B'
    }
}

export default function SideBar({ isOpen }: any) {
    return (
        <Box sx={BoxStyles} className={`${isOpen ? 'open' : 'closed'}`}>
            <Grid container columns={1}>
                <Grid item xs={1}>
                    <Button fullWidth sx={ButtonsStyles} startIcon={<Icon source='/home.png' />}>Home</Button>
                </Grid>

                <Grid item xs={1}>
                    <Button fullWidth disabled sx={ButtonsStyles} startIcon={<Icon source='/support.png' />}>Usuários</Button>
                </Grid>

                <Grid item xs={1}>
                    <Button fullWidth sx={ButtonsStyles} startIcon={<Icon source='/report.png' />}>Relatórios</Button>
                </Grid>

                <Grid item xs={1}>
                    <Button fullWidth sx={ButtonsStyles} startIcon={<Icon source='/megaphone.png' />}>Notícias</Button>
                </Grid>

                <Grid item xs={1}>
                    <Button fullWidth sx={ButtonsStyles} startIcon={<Icon source='/rate.png' />}>Votação</Button>
                </Grid>

                <Grid item xs={1}>
                    <Button fullWidth sx={ButtonsStyles} startIcon={<Icon source='/connection.png' />}>Transparência</Button>
                </Grid>
            </Grid>
        </Box>
    )
}