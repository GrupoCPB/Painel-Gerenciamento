import { Container, FormControl, Typography, RadioGroup, FormLabel, Radio, FormControlLabel } from "@mui/material";
import SquareRadioButton from "../components/gerar_relatorio/SquareRadioButton";

const ContainerStyles = {
    background: 'white',
    borderRadius: '4px',
    paddingTop: '30px',
    paddingBottom: '50px',
    height: '100%',

    '& .MuiOutlinedInput-root': {
        padding: '0'
    }
}

export default function GerarRelatorio() {
    return (
        <Container sx={ContainerStyles}>
            <Typography variant='h5' fontWeight={600} mb={3} color='#5B5B5B'>
                Gerar relatorios
            </Typography>

            <Typography variant='body1' fontWeight={600} mb={4} color='#5B5B5B'>
                Escolha o tipo de relatório que deseja gerar
            </Typography>

            <FormControl sx={{width: '100%'}}>
                <FormLabel>
                    <Typography variant='body1' fontWeight={600} mb={1} mt={2} color='#5B5B5B'>
                    Tipo de relatório
                    </Typography>
                </FormLabel>
                <RadioGroup
                    defaultValue="Entrada"
                    row
                >
                    <FormControlLabel value="Entrada" control={<Radio size="small" />} label="Entrada" />
                    <FormControlLabel value="Saída" control={<Radio size="small" />} label="Saída" />
                </RadioGroup>

                <FormLabel>
                    <Typography variant='body1' fontWeight={600} mb={1} mt={3} color='#5B5B5B'>
                        Período
                    </Typography>
                </FormLabel>

                <RadioGroup
                    defaultValue="Últimos 30 dias"
                    row
                >
                    <SquareRadioButton text="Últimos 30 dias" />
                    <SquareRadioButton text="Por mês"  />
                    <SquareRadioButton text="Personalizado" />
                </RadioGroup>

            </FormControl>
        </Container>
    )
}