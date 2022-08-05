import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Router from "next/router";
import { Button, Grid } from '@mui/material';
import Icon from '../Icon';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const ButtonsStyles = {
    display: 'grid',
    gridTemplateColumns: 'auto 80%',
    placeItems: 'center start',
    textTransform: 'none',
    fontSize: '.8rem',
    whiteSpace: 'nowrap',
    color: '#5B5B5B',
    '& .MuiButton-startIcon': {
        marginRight: '20px'
    },

    '&.Mui-disabled': {
        background: '#D7DEE9',
        color: '#5B5B5B'
    },

    '& #text': {
        color: 'red'
    }
}


const DetailsStyle = {
    padding: '10px',
}

const StyledListButton = {
    width: '100%',
    textTransform: 'none',
    color: '#5B5B5B',
    justifyContent: 'space-around',
    margin: 'auto',

    '& .MuiButton-startIcon': {
        marginLeft: '5px'
    },

    '&.Mui-disabled': {
        background: '#D7DEE9',
        color: '#5B5B5B'
    }
}

export default function TransparenciaButton({ route }: any) {
    const [state, setState] = useState({
        route: '',
        expanded: true
    })

    useEffect(() => {
        setState({
            ...state,
            route: Router.pathname,
        })
    }, [])

    return (
        <div>
            <Accordion elevation={0} expanded={state.expanded} disableGutters>
                <Button
                    startIcon={<Icon source={'/connection.png'} />}
                    endIcon={<ExpandMoreIcon />}
                    sx={StyledListButton}
                    onClick={() => setState({
                        ...state,
                        expanded: !state.expanded
                    })}
                >
                    Transparência
                </Button>

                <AccordionDetails sx={DetailsStyle}>
                    <Link href='/relatorioTempoReal'>
                        <Button fullWidth disabled={state.route === '/relatorioTempoReal' ? true : false} sx={ButtonsStyles} startIcon={<Icon source='/money.png' />}>Relatório/Tempo real</Button>
                    </Link>
                    <Link href='/'>
                        <Button fullWidth disabled={state.route === '/metas' ? true : false} sx={ButtonsStyles} startIcon={<Icon source='/target.png' />}>Metas</Button>
                    </Link>
                    <Link href='/gerarRelatorio'>
                        <Button fullWidth disabled={state.route === '/gerarRelatorio' ? true : false} sx={ButtonsStyles} startIcon={<Icon source='/target.png' />}>Gerar relatórios</Button>
                    </Link>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}