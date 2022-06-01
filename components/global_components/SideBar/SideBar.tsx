import { Box, Grid, Button } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import BarChartIcon from '@mui/icons-material/BarChart';

const BoxStyles = {
    width: '100%',
    paddingInline: '10px',
    paddingTop: '20px',
    paddingBottom: '100px'
}

const ButtonsStyles = {
    display: 'grid',
    gridTemplateColumns: 'auto 80%',
    placeItems: 'center start',
    textTransform: 'none',
    fontSize: '1.05rem',
    paddingInline: '15px 10px',
    color: '#5B5B5B',
    '& .MuiButton-startIcon': {
        marginRight: '20px'
    },

    '&.Mui-disabled': {
        background: '#D7DEE9',
        color: '#5B5B5B'
    }
}

export default function SideBar() {
    return (
        <Box sx={BoxStyles}>
            <Grid container columns={1}>
                <Grid item xs={1}>
                    <Button fullWidth sx={ButtonsStyles} startIcon={<HomeOutlinedIcon />}>Home</Button>
                </Grid>

                <Grid item xs={1}>
                    <Button fullWidth disabled sx={ButtonsStyles} startIcon={<AccountBoxOutlinedIcon />}>Usuários</Button>
                </Grid>

                <Grid item xs={1}>
                    <Button fullWidth sx={ButtonsStyles} startIcon={<MonitorHeartOutlinedIcon />}>Relatórios</Button>
                </Grid>

                <Grid item xs={1}>
                    <Button fullWidth sx={ButtonsStyles} startIcon={<CampaignOutlinedIcon />}>Notícias</Button>
                </Grid>

                <Grid item xs={1}>
                    <Button fullWidth sx={ButtonsStyles} startIcon={<StarBorderRoundedIcon />}>Votação</Button>
                </Grid>

                <Grid item xs={1}>
                    <Button fullWidth sx={ButtonsStyles} startIcon={<BarChartIcon />}>Transparência</Button>
                </Grid>
            </Grid>
        </Box>
    )
}