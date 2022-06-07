import type { AppProps } from 'next/app';
import '../styles/globals.css'
import TopBar from '../components/global_components/TopBar/TopBar';
import SideBar from '../components/global_components/SideBar/SideBar';
import { Grid } from '@mui/material';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setState] = useState(true);

  function toggleSideMenu(ev: any) {
    setState(!isOpen)
  }

  if (isOpen) {
    return (
      <>
        <TopBar toggleSideMenu={toggleSideMenu} />
        <Grid container columns={10} sx={{ height: 'calc(100vh - 64px)' }}>
          <Grid item xs={1.5}>
            <SideBar isOpen={isOpen} />
          </Grid>
          <Grid item xs={8.5} sx={{ background: '#E5E5E5' }}>
            <Component {...pageProps} />
          </Grid>
        </Grid>
      </>
    )
  }

  return (
    <>
      <TopBar toggleSideMenu={toggleSideMenu} />
      <Grid container columns={10} sx={{ height: 'calc(100vh - 64px)' }}>
        <Grid item xs={0}></Grid>
        <Grid item xs={10} sx={{ background: '#E5E5E5' }}>
          <Component {...pageProps} />
        </Grid>
      </Grid>
    </>
  )
}

export default MyApp
