import React, { useContext } from 'react'
import ThemeContext from '../../Context/ThemeContext'
import { CiSearch } from 'react-icons/ci'

const SearchBar = () => {
 let { theme } = useContext(ThemeContext)
  return <section className={`justify-center  h-[10%] w-full fixed z-50 bottom-0 left-0 flex items-center ${theme==="dark"?"bg-white border border-t":"bg-gray-800 text-white"}`}>
   <divi className='h-[60%] w-[90%] border border-2 rounded-full flex'>
        <input placeholder='enter the prompt' className={`w-[97%] p-3 rounded-lg outline-none`}/>
        <button className=' rounded-full flex items-center justify-center w-[3%] text-bold border rounded-full'>
            <CiSearch />   
        </button>
   </divi>
  </section>
}

export default SearchBar
