import React from 'react'
import NavbarContainer from './Components/Navbar/NavbarContainer'
import { Themeprovider } from './Context/ThemeContext'
import SidebarContext, { SidebarProvider } from './Context/SidebarContext'
import Layout from './pages/Layout'

const App = () => {
  return <Themeprovider>
    <SidebarProvider>
      <Layout></Layout>
    </SidebarProvider>
  </Themeprovider>
}

export default App
