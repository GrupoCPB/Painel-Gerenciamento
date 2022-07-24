import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from "@mui/material/Button";
import Icon from "../Icon";
import Router from "next/router";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import TransparenciaButton from './TransparenciaButton';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: '-200px',
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
    backgroundColor: '#E5E5E5'
}));

const StyledListButton = {
    width: '90%',
    margin: '4px auto',
    textTransform: 'none',
    justifyContent: 'flex-start',
    padding: '10px',
    color: '#5B5B5B',
    '& .MuiButton-startIcon': {
        marginLeft: '0',
        marginRight: '15px'
    },
    '&.Mui-disabled': {
        background: '#D7DEE9',
        color: '#5B5B5B'
    }
}

class Item {
    title: string;
    url: string;
    icon: string;
    constructor(title: string, url: string, icon: string) {
        this.title = title,
            this.url = url,
            this.icon = icon
    }
}

const items = [
    new Item('Home', '/', '/home.png'),
    new Item('Usuários', '/users', '/support.png'),
    new Item('Relatórios', '/relatorio', '/report.png'),
    new Item('Notícias', '/noticias', '/megaphone.png'),
    new Item('Votação', '/votacao', '/rate.png'),
    new Item('Transparêcnia', '/votacao', '/rate.png'),
]

const ListItemButton = ({ text, icon, pageURL, click, routerPath }: any) => {
    const [state, setState] = useState('')

    useEffect(() => {
        setState(Router.pathname)
    }, [])

    return (
        <>
            <Link href={pageURL}>
                <Button
                    startIcon={<Icon source={icon} />}
                    sx={StyledListButton}
                    disabled={state === pageURL ? true : false}
                >
                    {text}
                </Button>
            </Link>
        </>
    )
}

export default function SideBar({ isOpen, children }: any) {
    const pathRef = useRef('')
    useEffect(() => {
        pathRef.current = Router.pathname;
    }, [])

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                sx={{
                    width: '200px',
                    flexShrink: 0,
                    height: '100vh',
                    transform: 'translateY(10px)',
                    '& .MuiDrawer-paper': {
                        width: '200px',
                        boxSizing: 'border-box',
                        border: 0
                    },
                }}
                variant="persistent"
                open={isOpen}

            >
                <List>
                    {items.map((el) => (
                        <ListItem key={Math.random() * 1000} disablePadding sx={{ display: 'flex' }}>
                            {
                                (() => {
                                    switch (el.title) {
                                        case 'Home':
                                            return <ListItemButton text={el.title} icon={el.icon} pageURL={el.url} />
                                            break;

                                        case 'Usuários':
                                            return <ListItemButton text={el.title} icon={el.icon} pageURL={el.url} />
                                            break;

                                        case 'Relatórios':
                                            return <ListItemButton text={el.title} icon={el.icon} pageURL={el.url} />
                                            break;

                                        case 'Notícias':
                                            return <ListItemButton text={el.title} icon={el.icon} pageURL={el.url} />
                                            break;

                                        case 'Votação':
                                            return <ListItemButton text={el.title} icon={el.icon} pageURL={el.url} />
                                            break;

                                        case 'Transparêcnia':
                                            return <TransparenciaButton route={el.url} />

                                        default:
                                            break;
                                    }
                                })()
                            }
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={isOpen}>
                {children}
            </Main>
        </Box >
    );
}
