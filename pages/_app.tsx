import type { AppProps } from 'next/app';
import '../styles/globals.css'
import TopBar from '../components/global_components/TopBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopBar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
