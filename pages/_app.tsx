import type { AppProps } from 'next/app';
import '../styles/globals.css'
import TopBar from '../components/global_components/TopBar/TopBar';
import SideBar from '../components/global_components/SideBar/SideBar';
import { Grid } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopBar />
      <Grid container columns={10} sx={{ height: 'calc(100vh - 64px)' }}>
        <Grid item xs={1.5}>
          <SideBar />
        </Grid>
        <Grid item xs={8.5} sx={{ background: '#E5E5E5' }}>
          <Component {...pageProps} />
        </Grid>
      </Grid>
    </>
  )
}

export default MyApp
