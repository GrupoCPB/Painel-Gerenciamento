import { Box, Grid, Button } from "@mui/material";
import Router from "next/router";
import { useEffect, useRef, useState } from "react";
import Icon from "../Icon";
import TransparenciaButton from "./TransparenciaButton";

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
    paddingInline: '15px 10px',
    color: '#5B5B5B',
    fontSize: '13px',
    fontWeight: '600',

    '& .MuiButton-startIcon': {
        marginRight: '20px'
    },

    '&.Mui-disabled': {
        background: '#D7DEE9',
        color: '#5B5B5B'
    }
}

export default function SideBar({ isOpen }: any) {
    const [state, setState] = useState('')
    useEffect(() => {
        setState(Router.pathname)
    }, [])


    return (
        <Box sx={BoxStyles} className={`${isOpen ? 'open' : 'closed'}`}>
            <Grid container columns={1} borderBottom={'solid 1px #F9FAFD'} pb={5}>
                <Grid item xs={1}>
                    <Button fullWidth href="/" disabled={state === '/' ? true : false} sx={ButtonsStyles} startIcon={<Icon source='/home.png' />}>Home</Button>
                </Grid>

                <Grid item xs={1}>
                    <Button fullWidth href="/users" disabled={state === '/users' ? true : false} sx={ButtonsStyles} startIcon={<Icon source='/support.png' />}>Usuários</Button>
                </Grid>

                <Grid item xs={1}>
                    <Button fullWidth disabled={state === '/relatorios' ? true : false} sx={ButtonsStyles} startIcon={<Icon source='/report.png' />}>Relatórios</Button>
                </Grid>

                <Grid item xs={1}>
                    <Button fullWidth disabled={state === '/noticias' ? true : false} sx={ButtonsStyles} startIcon={<Icon source='/megaphone.png' />}>Notícias</Button>
                </Grid>

                <Grid item xs={1}>
                    <Button fullWidth disabled={state === '/votacao' ? true : false} sx={ButtonsStyles} startIcon={<Icon source='/rate.png' />}>Votação</Button>
                </Grid>

                <Grid item xs={1}>
                    <TransparenciaButton route={state}/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item pt={2}>
                    <Button fullWidth sx={ButtonsStyles} startIcon={<Icon source='/settings.png' width={40} height={40} />}>Configurações</Button>
                </Grid>
            </Grid>
        </Box>
    )
}