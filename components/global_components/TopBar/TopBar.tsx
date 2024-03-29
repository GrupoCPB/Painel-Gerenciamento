import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import OngSelection from './OngSelection';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#F8F8F8',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '60%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    right: '0',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: '1em',
        paddingRight: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '60%',
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
    },
    width: '100%'
}));

const StyledGridItem = {
    // border: 'solid 1px red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '64px',

    '&.CPBStudio': {
        background: '#F8F8F8',
        color: '#5B5B5B',
        paddingInline: '15px 35px'
    },

    '&.search': {
        justifyContent: 'start'
    },

    '&.ongSelectionDiv': {
        borderLeft: 'solid 1px #E2E2E2',
        borderRight: 'solid 1px #E2E2E2',
        height: '54px',
        alignSelf: 'center'
    },

    '&.userIconDiv': {
        alignItems: 'center',
        'span': {
            marginLeft: '10px',
            fontWeight: '600',
            color: '#5B5B5B'
        },

    },
}

export default function TopBar({toggleSideMenu, isOpen}:any) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0}>
                <Toolbar disableGutters sx={{ backgroundColor: 'white', color: '#5B5B5B' }}>
                    <Grid container columns={10}>
                        <Grid item sx={StyledGridItem} className='CPBStudio' xs={1.5}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={toggleSideMenu}
                            >
                                {isOpen ? <Close sx={{pointerEvents: 'none'}} /> : <MenuIcon sx={{pointerEvents: 'none'}} />}
                            </IconButton>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                CPB Studio
                            </Typography>
                        </Grid>

                        <Grid item sx={StyledGridItem} xs={4.5} className='search'>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Digite o que procura..."
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </Grid>

                        <Grid item sx={StyledGridItem} className='ongSelectionDiv' xs={2}>
                            <OngSelection />
                        </Grid>

                        <Grid item sx={StyledGridItem} className='userIconDiv' xs={2} display={{ xs: 'none', md: 'flex' }}>
                            <Box sx={{ height: '30px' }}>
                                <Image src='/user_image.png' alt='user' width={30} height={30}></Image>
                            </Box>
                            <span>Ana Silva</span>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box >
    );
}


