import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Grid } from '@mui/material';
import Icon from '../Icon';
import { useState } from 'react';

const ButtonsStyles = {
    display: 'grid',
    gridTemplateColumns: 'auto 80%',
    placeItems: 'center start',
    textTransform: 'none',
    fontSize: '.8rem',
    color: '#5B5B5B',
    '& .MuiButton-startIcon': {
        marginRight: '20px'
    },

    '&.Mui-disabled': {
        background: '#D7DEE9',
        color: '#5B5B5B'
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
    const [state, setState] = useState(true)
    return (
        <div>
            <Accordion elevation={0} expanded={state} disableGutters>
                <Button
                    startIcon={<Icon source={'/connection.png'} />}
                    endIcon={<ExpandMoreIcon />}
                    sx={StyledListButton}
                    onClick={() => setState(!state)}
                >
                    Transparência
                </Button>

                <AccordionDetails sx={DetailsStyle}>
                    <Button fullWidth href='/relatorio' disabled={route === '/relatorio' ? true : false} sx={ButtonsStyles} startIcon={<Icon source='/money.png' />}>Relatório/Tempo real</Button>
                    <Button fullWidth disabled={route === '/metas' ? true : false} sx={ButtonsStyles} startIcon={<Icon source='/target.png' />}>Metas</Button>
                    <Button fullWidth disabled={route === '/gerar_relatorios' ? true : false} sx={ButtonsStyles} startIcon={<Icon source='/target.png' />}>Gerar relatórios</Button>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}