import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Icon from '../global_components/Icon';
import FiltroPainel from './FiltroPainel';
import UsersTable from './UsersTable';

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
    '&.MuiButton-root': {
        backgroundColor: '#6E84A5'
    }
}

export default function Main() {
    return (
        <Grid container columns={20}>
            <Grid item xs={15.8}>
                <Container component='main' maxWidth='lg' sx={MainStyles}>
                    <Box>
                        <Grid container columns={10} mb={2}>
                            <Grid item display='flex' flexDirection='column' xs={7}>
                                <Typography variant='h5' fontWeight={600} color='#5B5B5B'>Gerenciamento de Usuários</Typography>
                                <span className='icon-span'>Exibindo usuários em ordem alfabética <Icon source='/usersOrderIcon.png' width={24} height={24} /></span>
                            </Grid>

                            <Grid item xs={3} display='flex' justifyContent='flex-end' alignItems='start'>
                                <Button sx={ButtonStyles} disableElevation variant='contained'>+ Adicionar novo usuário</Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <UsersTable />
                    </Box>
                </Container>
            </Grid>

            <Grid item xs={3.5}>
                <FiltroPainel />
            </Grid>
        </Grid>
    )
}