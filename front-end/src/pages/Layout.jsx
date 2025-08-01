import React, { useContext } from 'react'
import NavbarContainer from '../Components/Navbar/NavbarContainer'
import Sidebar from '../Components/Side Bar/Sidebar'
import SidebarContext from '../Context/SidebarContext'
import ChatSection from "../Components/Chat Section/ChatSection"
import SearchBar from '../Components/SearchBar/SearchBar'
const Layout = () => {
  let {sidebarStatus,setSidebar,toggleSidebar} = useContext(SidebarContext);
  return <>
  <NavbarContainer/>
  {sidebarStatus&&<Sidebar/>}
  <ChatSection/>
  <SearchBar/>
  </>
}

export default Layout
