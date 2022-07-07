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

const SummaryStyle = {
    paddingInline: '11px 10px',
    color: '#5B5B5B',
    fontSize: '13px',
    fontWeight: '600',
    fontFamily: 'Helvetica'
}

const DetailsStyle = {
    padding: '0',
}

export default function TransparenciaButton({ route }: any) {
    const [state, setState] = useState(true)
    return (
        <div>
            <Accordion elevation={0} expanded={state} disableGutters>
                <AccordionSummary onClick={() => setState(!state)}
                    expandIcon={<ExpandMoreIcon sx={{ transform: 'translateY(-2px)' }} />}
                    sx={SummaryStyle}
                >
                    <Grid container justifyContent={'space-evenly'} columns={4}>
                        <Grid item sx={{ width: '100%' }} xs={1}>
                            <Icon source='/connection.png' />
                        </Grid>
                        <Grid item sx={{ width: '100%' }} xs={3}>
                            Transparencia
                        </Grid>
                    </Grid>
                </AccordionSummary>

                <AccordionDetails sx={DetailsStyle}>
                    <Button fullWidth href='/relatorio' disabled={route === '/relatorio' ? true : false} sx={ButtonsStyles} startIcon={<Icon source='/money.png' />}>Relatório/Tempo real</Button>
                    <Button fullWidth disabled={route === '/metas' ? true : false} sx={ButtonsStyles} startIcon={<Icon source='/target.png' />}>Metas</Button>
                    <Button fullWidth disabled={route === '/gerar_relatorios' ? true : false} sx={ButtonsStyles} startIcon={<Icon source='/target.png' />}>Gerar relatórios</Button>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}