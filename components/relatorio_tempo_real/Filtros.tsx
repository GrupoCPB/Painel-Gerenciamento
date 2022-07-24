import { Box, Checkbox, FormControl, FormLabel, Radio, RadioGroup, FormControlLabel, FormGroup, Typography, Button } from '@mui/material';
import AplicarLimpar from '../global_components/FiltroAplicarLimparButtons';

const BoxStyles = {
    marginTop: '18px',
    marginBottom: '18px',
    borderRadius: '4px',
    width: '100%',
    backgroundColor: 'white',
    height: 'auto',
}

const FormGroupStyles = {
    width: '100%',
    paddingInline: '13px 10px',
    paddingTop: '13px',
    paddingBottom: '10px',
    '& label': {
        fontSize: '14px',
        fontWeight: '600'
    },
    '&:not(&:last-of-type)': {
        borderBottom: 'solid 1px #D7DEE9',
    }
}

const InputsStyle = {
    '& .MuiTypography-root': {
        fontWeight: '600',
        color: '#757373cf',
        fontSize: '13px',
    },
    '&:not(&:first-of-type)': {
        marginTop: '-10px'
    }
}

const ButtonStyles = {
    textTransform: 'none',
    fontWeight: '600',
    marginBottom: '20px',
    
    '&.MuiButton-root': {
        backgroundColor: '#F03355',
        marginTop: '5px'
    }
}

export default function FiltroPainel() {
    return (
        <Box component='aside' sx={BoxStyles}>
            <Typography variant='h6' textAlign={'center'} pb={1} pt={1} sx={{ borderBottom: '1px solid #D7DEE9', color: '#757373', fontWeight: '600' }}>
                Filtros
            </Typography>

            <FormGroup sx={FormGroupStyles}>
                <FormLabel>RENDIMENTOS</FormLabel>
                <RadioGroup defaultValue="Bloqueado" >
                    <FormControlLabel value="Ativo" sx={InputsStyle} control={<Radio size='small' />} label="Entradas" />
                    <FormControlLabel value="Bloqueado" sx={InputsStyle} control={<Radio size='small' />} label="Saídas" />
                </RadioGroup>
                <AplicarLimpar/>

            </FormGroup>

            <FormControl sx={FormGroupStyles}>
                <FormLabel sx={{marginBottom: '10px'}}>ITENS</FormLabel>
                <FormControlLabel sx={InputsStyle} control={<Checkbox size='small' value='Alimentos' />} label='Alimentos' />
                <FormControlLabel sx={InputsStyle} control={<Checkbox size='small' value='Dinheiro' />} label='Dinheiro' />
                <FormControlLabel sx={InputsStyle} control={<Checkbox size='small' value='Roupas' />} label='Roupas' />
                <FormControlLabel sx={InputsStyle} control={<Checkbox size='small' value='Outros' />} label='Outros' />
                <AplicarLimpar/>
            </FormControl>

            <FormGroup sx={FormGroupStyles}>
                <FormLabel>LIMPAR FILTROS</FormLabel>
                <Typography fontSize={'12px'} fontWeight={600} color='#757373cf' mt={1} mb={1}>
                    Essa ação remove todos os filtros aplicados.
                </Typography>
                <Button disableElevation variant='contained' sx={ButtonStyles}>Limpar filtros</Button>
            </FormGroup>
        </Box>
    )
}