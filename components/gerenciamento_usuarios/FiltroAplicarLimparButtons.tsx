import { Box, Button } from '@mui/material';

const BoxStyles = {
    display: 'flex',
    justifyContent: 'space-between',
}

const ButtonsStyles = {
    textTransform: 'none',
    paddingTop: '0',
    paddingBottom: '0',
    color: '#6E84A5',
    width: '45%',
    fontWeight: '600',

    '&.MuiButton-root': {
        '&:first-of-type': {
            backgroundColor: '#F1F2F3'
        },
        '&.last-of-type': {
            backgroundColor: '#F1F2F3'
        }
    }
}

export default function AplicarLimpar() {
    return (
        <Box sx={BoxStyles}>
            <Button disableElevation sx={ButtonsStyles} size='small' variant='contained'>Aplicar</Button>
            <Button disableElevation sx={ButtonsStyles} size='small' variant='outlined'>Limpar</Button>
        </Box>
    )
}