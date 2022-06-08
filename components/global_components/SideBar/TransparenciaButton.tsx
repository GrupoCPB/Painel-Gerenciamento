import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Grid } from '@mui/material';
import Icon from '../Icon';

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

export default function TransparenciaButton() {
    return (
        <div>
            <Accordion elevation={0} disableGutters>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{transform: 'translateY(-2px)'}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={SummaryStyle}
                    className='aaaaaaaaaaaaaaaaaaaaa'
                >
                    <Grid container justifyContent={'space-evenly'} columns={4}>
                        <Grid item sx={{ width: '100%'}} xs={1}>
                            <Icon source='/connection.png' />
                        </Grid>
                        <Grid item sx={{ width: '100%'}} xs={3}>
                            Transparencia
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails sx={DetailsStyle}>
                    <Button fullWidth sx={ButtonsStyles} startIcon={<Icon source='/money.png' />}>Relatório/Tempo real</Button>
                    <Button fullWidth sx={ButtonsStyles} startIcon={<Icon source='/target.png' />}>Metas</Button>
                    <Button fullWidth sx={ButtonsStyles} startIcon={<Icon source='/target.png' />}>Gerar relatórios</Button>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}