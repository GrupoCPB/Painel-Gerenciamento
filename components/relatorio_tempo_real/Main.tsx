import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Filtro from './Filtros';
import RelatorioTable from './RelatorioTable';
import ToggleButtons from './Toggle';
import TotalBoxes from './TotalBoxes';

const MainStyles = {
    background: 'white',
    margin: '18px',
    borderRadius: '4px',
    paddingTop: '30px',
    paddingBottom: '50px',
    width: '95%',

    '& .icon-span': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        color: '#757373'
    }
}

const ButtonStyles = {
    textTransform: 'none',
    fontWeight: '600',

    '&.MuiButton-root': {
        backgroundColor: '#6E84A5',
        width: 'max-content',
        '&.MuiButton-outlined': {
            backgroundColor: 'white',
            marginLeft: '10px'
        }
    }
}

export default function Main() {
    return (
        <Grid container columns={20}>
            <Grid item xs={15.8}>
                <Container component='main' maxWidth='lg' sx={MainStyles}>
                    <Box>
                        <Grid container columns={10} mb={2} justifyContent='space-between'>
                            <Grid item display='flex' flexDirection='column'>
                                <Typography variant='h5' fontWeight={600} color='#5B5B5B'>Relatório em tempo real</Typography>
                            </Grid>

                            <Grid item xs={'auto'} display='flex' justifyContent='space-between'>
                                <Button sx={ButtonStyles} startIcon={<Image src='/plus-circle.png' alt='a' width={20} height={20} />} disableElevation variant='contained'>Nova doação</Button>
                                <Button sx={ButtonStyles} startIcon={<Image src='/plus-circle (1).png' alt='a' width={20} height={20} />} disableElevation variant='outlined'>Nova despesa</Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid container columns={7}>
                            <Grid item xs={'auto'}>
                                <Typography component='span' fontWeight={600} fontSize={16} color='#5B5B5B'>Faturamento total</Typography>
                            </Grid>
                            <Grid item xs={'auto'} display='flex' alignItems='center'>
                                <ToggleButtons />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mt={2} mb={5}>
                        <Grid container columns={9} justifyContent='space-between'>
                            {['arrecadado', 'utilizado', 'rendimentos', 'disponível'].map(el => {
                                return (
                                    <Grid item xs={2.15} key={Math.random() * 1000}>
                                        <TotalBoxes type={el} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                    <Box>
                        <RelatorioTable />
                    </Box>
                </Container>
            </Grid>

            <Grid item xs={3.5}>
                <Filtro />
            </Grid>
        </Grid>
    )
}
