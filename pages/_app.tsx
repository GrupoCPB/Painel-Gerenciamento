import type { AppProps } from 'next/app';
import '../styles/globals.css'
import TopBar from '../components/global_components/TopBar/TopBar';
import SideBar from '../components/global_components/SideBar/SideBar';
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setOpen] = useState(true);

  function toggleSideMenu() {
    setOpen(!isOpen)
  }

  // if (isOpen) {
  return (
    <>
      <TopBar toggleSideMenu={toggleSideMenu} isOpen={isOpen} />

      {/* o componente principal fica dentro do SideBar para poder usar o efeito Drawer do MUI*/}
      <SideBar isOpen={isOpen}> 
        {<Component {...pageProps} /> || <div>Sem nada por enquanto</div>}
      </SideBar>
    </>
  )
}

export default MyApp
