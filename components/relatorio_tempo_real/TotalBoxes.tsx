import {Box, Typography} from '@mui/material';


const BoxStyles = {
    '&.arrecadado': {
        backgroundColor: '#37AEB0'
    },
    '&.utilizado': {
        backgroundColor: '#F97778'
    },
    '&.rendimentos': {
        backgroundColor: '#F9C87F'
    },
    '&.disponivel': {
        backgroundColor: '#43ACCD'
    },

    borderRadius: '7px'
}

const TypographyStyles = {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: '14px',

    '&:first-of-type': {
        paddingTop: '1vw',
        paddingBottom: '0.5vw'
    },
    '&:last-of-type': {
        paddingBottom: '1vw'
    }
}

export default function TotalBoxes({type}:any) {
    return(
        <Box sx={BoxStyles} className={type === 'disponível' ? 'disponivel' : type}>
            <Typography component='p' sx={TypographyStyles}>
                Total {type === 'rendimentos' ? 'de rendimentos' : type}
            </Typography>
            <Typography sx={TypographyStyles}>
                R$ 13.505,00
            </Typography>
        </Box>
    )
}