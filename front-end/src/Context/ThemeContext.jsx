import { createContext, useState } from "react"
import React  from 'react'
export let ThemeContext = createContext();
export let Themeprovider = ({children}) => {
    let [theme,setTheme] = useState("light");
    let toggleTheme=()=>{setTheme(t=>(t==="light"?"dark":"light"))}
  return <ThemeContext.Provider value={{theme,setTheme,toggleTheme}}>
    {children}
  </ThemeContext.Provider>
}

export default ThemeContext
