import React, { useContext, useState } from 'react'
import { MdDarkMode, MdLightMode, MdOutlineLightMode } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import ThemeContext from '../../Context/ThemeContext';
import SidebarContext from '../../Context/SidebarContext';

const NavbarContainer = () => {
    // states for handling button clicks 
    const {theme, setTheme,toggleTheme} = useContext(ThemeContext)
    const { sidebarStatus, toggleSidebar} = useContext(SidebarContext) 

    return <><nav className={`px-4 sm:px-6 h-[60px] md:h-[70px] w-full flex items-center sticky top-0 left-0 ${theme == "light"? "bg-gray-900 text-gray-100" : " text-black border-b-1"}`}>
    {/* previous chat button */}
    <button className=' text-lg sm:text-xl md:text-2xl mx-4 sm:mx-6 md:ml-[20px]' onClick={toggleSidebar}>
        <CiMenuBurger />
    </button>

    <section className=' w-[90%] h-full m-auto flex justify-between items-center sticky top-0 left-0'>
        {/* logo */}
        <header>
            <h1 className='font-bold text-2xl '>
                Bot
            </h1>
        </header>

        {/* buttton */}
        <button className='border-1 text-xl h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] md:h-[50px] md:w-[50px] rounded-full text-center flex justify-center items-center' onClick={toggleTheme}>
            {theme=="light"?<MdLightMode />:<MdDarkMode />}
        </button>
    </section>
    </nav>
    
    </>
  
}

export default NavbarContainer
