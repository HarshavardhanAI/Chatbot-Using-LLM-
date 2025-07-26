import React, { createContext, useState } from 'react'

export let SidebarContext = createContext();


export const SidebarProvider = ({children}) => {
    let [sidebarStatus,setSidebar] = useState(false);
    let toggleSidebar = ()=>{setSidebar(!sidebarStatus),console.log(!sidebarStatus);
    }
    return (
    <SidebarContext.Provider value={{sidebarStatus,setSidebar,toggleSidebar}}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContext
